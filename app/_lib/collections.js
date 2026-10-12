// Assembles page-ready lists from portfolioData.js, portfolioAssets.js, and
// siteData.js, without changing any approved text.
import { portfolio } from "../portfolioData";
import { bookDetails, digitalOrder, sectionOrder } from "../portfolioAssets";
import { mediaProjects } from "../siteData";

export const portfolioById = Object.fromEntries(portfolio.map((item) => [item.id, item]));

export function itemsIn(category) {
  return portfolio.filter((item) => item.category === category);
}

export function curriculumSections() {
  return sectionOrder.map((section) => ({ ...section, items: itemsIn(section.category) }));
}

export function books() {
  return itemsIn("Books and research").sort(
    (a, b) => (bookDetails[a.id]?.order ?? 99) - (bookDetails[b.id]?.order ?? 99),
  );
}

const mediaById = Object.fromEntries(mediaProjects.map((project) => [project.id, project]));

export function digitalItems() {
  return digitalOrder.map((entry) => {
    if (entry.fromMedia) {
      const media = mediaById[entry.fromMedia];
      return {
        id: entry.id,
        title: media.title,
        kind: entry.kind,
        summary: media.text,
        role: null,
        links: media.links,
        screenshot: entry.screenshot,
        portrait: Boolean(entry.portrait),
        related: [],
      };
    }
    const item = portfolioById[entry.id];
    const mediaLinks = (entry.mediaLinks ?? []).flatMap((id) => mediaById[id]?.links ?? []);
    return {
      id: item.id,
      title: item.title,
      kind: entry.kind ?? item.kind,
      summary: entry.summary ?? item.summary,
      role: item.role,
      links: [...(item.links ?? []), ...mediaLinks],
      screenshot: entry.screenshot,
      portrait: false,
      related: entry.related ?? [],
    };
  });
}

export function hostOf(href) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}
