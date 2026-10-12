import Link from "next/link";
import downloads from "../../public/portfolio-downloads.json";
import { coverCandidates, curriculumDownloadName, curriculumPdf, relatedLinks } from "../portfolioAssets";
import Cover from "./Cover";
import DocActions from "./DocActions";

// "workbook" -> "Workbook"; words like "iOS" keep their own casing.
export const capitalize = (text) =>
  !text || /^[a-z][A-Z]/.test(text) ? text : text.charAt(0).toUpperCase() + text.slice(1);

export const slugify = (text) =>
  text
    .normalize("NFKD")
    .replace(/[’']/g, "")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// One curriculum, series, training resource, or sample. Text comes straight
// from portfolioData.js, including the role line that carries source credits.
export default function WorkCard({ item, variant = "card", headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  const external = item.links ?? [];
  const internal = relatedLinks[item.id] ?? [];
  const companions = downloads.companions.filter((file) => file.id === item.id);
  const isFeature = variant === "feature";

  return (
    <article className={`work work-${variant}`} id={item.id} aria-labelledby={`${item.id}-title`}>
      {isFeature ? (
        <Cover
          candidates={coverCandidates(item)}
          title={item.title}
          kind={capitalize(item.kind)}
          sizes="(min-width: 900px) 240px, 38vw"
          className="workCover"
        />
      ) : null}
      <div className="workBody">
        <p className="workKind">{capitalize(item.kind)}</p>
        <Heading id={`${item.id}-title`} className="workTitle">
          {item.title}
        </Heading>
        <p className="workSummary">{item.summary}</p>
        <p className="workRole">
          <span className="workRoleLabel">My role</span> {item.role}
        </p>
        {item.scope ? <p className="workRole">{item.scope}</p> : null}
        {item.shows?.length ? (
          <ul className="tagList" aria-label="What it shows">
            {item.shows.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : null}
        <DocActions
          href={curriculumPdf(item.id)}
          downloadName={curriculumDownloadName(item)}
          label={item.title}
          size={isFeature ? "md" : "sm"}
        />
        {companions.map((file) => (
          <div key={file.href}>
            <p className="workRole">
              <span className="workRoleLabel">
                {item.id === "C04" ? "Earlier student companion" : "Student workbook"}
              </span>
            </p>
            <DocActions
              href={file.href}
              downloadName={`${slugify(item.title)}-${item.id === "C04" ? "Earlier-Student-Companion" : "Student-Workbook"}.pdf`}
              label={`${item.title}: ${item.id === "C04" ? "earlier student companion" : "student workbook"}`}
              pages={file.pages}
              size={isFeature ? "md" : "sm"}
            />
          </div>
        ))}
        {external.length || internal.length ? (
          <ul className="workLinks">
            {external.map((link) => (
              <li key={link.href}>
                <a className="textLink" href={link.href} target="_blank" rel="noopener">
                  {link.label}
                  <span className="visuallyHidden">{`: ${item.title} (opens in a new tab)`}</span>
                </a>
              </li>
            ))}
            {internal.map((link) => (
              <li key={link.href}>
                <Link className="textLink" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
