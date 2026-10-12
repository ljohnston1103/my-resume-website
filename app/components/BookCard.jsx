import Link from "next/link";
import { bookDetails } from "../portfolioAssets";
import Cover from "./Cover";
import DocActions from "./DocActions";
import { capitalize, slugify } from "./WorkCard";

// A book or research work. To Have and To Hold carries three editions of the
// same work, shown side by side.
export default function BookCard({ item, variant = "card", headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  const details = bookDetails[item.id] ?? {};
  const editions = details.editions;
  const external = item.links ?? [];
  const internal = details.related ?? [];

  // Home-page shelf: cover and title, linking to the full entry on /books.
  if (variant === "compact") {
    const note = editions
      ? "Three editions, including expanded"
      : item.kind === "coauthored book"
        ? item.role.replace(/\.$/, "")
        : capitalize(item.kind);
    return (
      <article className="book book-compact" aria-labelledby={`${item.id}-compact-title`}>
        <Link className="shelfLink" href={`/books#${item.id}`}>
          <Cover
            candidates={editions ? editions[editions.length - 1].covers : details.covers}
            title={item.title}
            kind={capitalize(item.kind)}
            sizes="(min-width: 1100px) 220px, (min-width: 640px) 30vw, 42vw"
          />
          <span className="shelfKind">{note}</span>
          <Heading id={`${item.id}-compact-title`} className="shelfTitle">
            {item.title}
          </Heading>
        </Link>
      </article>
    );
  }

  return (
    <article
      className={`book book-${variant}${editions ? " hasEditions" : ""}`}
      id={item.id}
      aria-labelledby={`${item.id}-title`}
    >
      {editions ? (
        <ul className="editionList" aria-label="Editions">
          {editions.map((edition) => (
            <li key={edition.id} className="edition">
              <Cover
                candidates={edition.covers}
                title={`${item.title}, ${edition.label.toLowerCase()}`}
                kind={edition.label}
                sizes="(min-width: 900px) 220px, 40vw"
                className="bookCover"
              />
              <p className="editionLabel">{edition.label}</p>
              <DocActions
                href={edition.pdf}
                downloadName={edition.downloadName}
                label={`${item.title}, ${edition.label.toLowerCase()}`}
                size="sm"
              />
            </li>
          ))}
        </ul>
      ) : (
        <Cover
          candidates={details.covers}
          title={item.title}
          kind={capitalize(item.kind)}
          sizes="(min-width: 900px) 220px, 40vw"
          className="bookCover"
        />
      )}

      <div className="bookBody">
        <p className="workKind">{capitalize(item.kind)}</p>
        <Heading id={`${item.id}-title`} className="bookTitle">
          {item.title}
        </Heading>
        <p className="workSummary">{item.summary}</p>
        <p className="workRole">
          <span className="workRoleLabel">My role</span> {item.role}
        </p>
        {item.shows?.length ? (
          <ul className="tagList" aria-label="What it shows">
            {item.shows.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : null}
        {!editions ? (
          <DocActions
            href={details.pdf}
            downloadName={details.downloadName || `${slugify(item.title)}.pdf`}
            label={item.title}
          />
        ) : null}
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
