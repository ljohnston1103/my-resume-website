// Files and cross-links for the approved portfolio in portfolioData.js.
// portfolioData.js stays exactly as approved; this file only says where each
// work's cover, screenshot, and PDF live, and how pages link to each other.
//
// Nothing here is shown unless its file exists in public/ at build time, so a
// missing asset hides a button or falls back to a designed tile instead of
// breaking. Paths match the asset list Codex is supplying.

export const sectionOrder = [
  { id: "flagship", category: "Curricula and workbooks", title: "Flagship curricula" },
  { id: "series", category: "Teaching series", title: "Teaching series" },
  { id: "missions", category: "Missions and training", title: "Missions and training" },
  { id: "samples", category: "Teaching and design samples", title: "Teaching and design samples" },
];

// Cover image for a work, in order of preference. The first file that exists wins.
export function coverCandidates(item) {
  const list = [`/assets/covers/${item.id}.jpg`];
  if (item.cover?.src) list.push(item.cover.src);
  return list;
}

// Full PDF for a curriculum, series, training resource, or sample.
export function curriculumPdf(id) {
  return `/documents/curricula/${id}.pdf`;
}

// Saved file name. Only Luke's own flagship curricula carry his name; adapted
// series and training resources do not.
export function curriculumDownloadName(item) {
  const slug = item.title
    .normalize("NFKD")
    .replace(/[’']/g, "")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const prefix = item.category === "Curricula and workbooks" ? "Luke-Johnston-" : "";
  return `${prefix}${item.id}-${slug}.pdf`;
}

// Books and research. To Have and To Hold is one work in three editions.
export const bookDetails = {
  B03: {
    order: 1,
    editions: [
      {
        id: "first",
        label: "First edition · 2025",
        covers: ["/assets/covers/B03-first.jpg"],
        pdf: "/documents/books/to-have-and-to-hold-first-edition.pdf",
        downloadName: "To-Have-and-To-Hold-First-Edition-2025.pdf",
      },
      {
        id: "original",
        label: "Second edition · 2026",
        covers: ["/assets/covers/B03-original.jpg", "/book-kjv-cover.jpg"],
        pdf: "/documents/books/to-have-and-to-hold-original.pdf",
        downloadName: "To-Have-and-To-Hold-Second-Edition-2026.pdf",
      },
      {
        id: "expanded",
        label: "Third edition · Expanded",
        covers: ["/assets/covers/B03-expanded.jpg"],
        pdf: "/documents/books/to-have-and-to-hold-expanded.pdf",
        downloadName: "To-Have-and-To-Hold-Expanded-Edition.pdf",
      },
    ],
    related: [{ label: "Companion curriculum: God’s Words Preserved", href: "/curriculum#C05" }],
  },
  B02: {
    order: 2,
    covers: ["/assets/covers/B02.jpg"],
    pdf: "/documents/books/the-truth-about-calvinism.pdf",
    downloadName: "The-Truth-About-Calvinism.pdf",
  },
  B01: {
    order: 3,
    covers: ["/assets/covers/B01.jpg"],
    pdf: "/documents/books/the-truth-about-israel.pdf",
    downloadName: "The-Truth-About-the-Israel-Issue.pdf",
  },
  B04: {
    order: 4,
    covers: ["/assets/covers/B04.jpg"],
    pdf: "/documents/books/one-kingdom-two-names.pdf",
    downloadName: "One-Kingdom-Two-Names.pdf",
  },
};

// Links between pages.
export const relatedLinks = {
  C01: [{ label: "Listed with the books", href: "/books#curriculum-books" }],
  C02: [{ label: "Listed with the books", href: "/books#curriculum-books" }],
  C05: [{ label: "Companion to To Have and To Hold", href: "/books#B03" }],
  S01: [{ label: "See the interactive study app", href: "/digital#S01" }],
};

// Apps and websites, in display order. Text comes from portfolioData.js
// (by id) or, for the iOS app, from mediaProjects in siteData.js.
export const digitalOrder = [
  { id: "W1", screenshot: "/assets/digital/W1.jpg" },
  {
    id: "S01",
    screenshot: "/assets/digital/S01.jpg",
    kind: "interactive study app",
    summary: "The interactive digital study companion to the twelve-week How to Study the Bible course.",
    related: [{ label: "See the course", href: "/curriculum#S01" }],
  },
  { id: "W3", screenshot: "/assets/digital/W3.jpg" },
  { id: "W5", screenshot: "/assets/digital/W5.jpg", mediaLinks: ["johnstonbros"] },
  { id: "app", fromMedia: "app", screenshot: "/johnston-bros-app.webp", kind: "iOS app", portrait: true },
  { id: "W6", screenshot: "/assets/digital/W6.jpg" },
];

// Shown on the home page, in this order.
export const homeFlagships = ["C01", "C02", "C03", "C04", "C05"];
