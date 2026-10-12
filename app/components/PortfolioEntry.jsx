import Image from "next/image";

// One portfolio item. The summary row stays visible; the panel opens with the
// native <details> element, so it works with a keyboard and without script.
// The title is plain text rather than a heading because some screen readers
// drop heading semantics inside <summary>.
export default function PortfolioEntry({ item }) {
  return (
    <details className="entryCard" id={item.id}>
      <summary className="entrySummary">
        {item.cover ? (
          <span className="entryCover">
            <Image
              src={item.cover.src}
              alt=""
              width={item.cover.width}
              height={item.cover.height}
              sizes="96px"
            />
          </span>
        ) : null}
        <span className="entryHeading">
          <span className="entryTitle">{item.title}</span>
          {item.subtitle ? <span className="entrySubtitle">{item.subtitle}</span> : null}
          <span className="entryMeta">
            {item.kind}{item.year ? `, ${item.year}` : ""}
          </span>
        </span>
        <span className="entryToggle" aria-hidden="true">
          <span className="entryToggleText">Details</span>
          <span className="entryToggleIcon" />
        </span>
      </summary>

      <div className="entryPanel">
        <p className="entryText">{item.summary}</p>
        <dl className="entryFacts">
          <div>
            <dt>Role</dt>
            <dd>{item.role}</dd>
          </div>
          {item.shows?.length ? (
            <div>
              <dt>What it shows</dt>
              <dd>
                <ul className="plainList">
                  {item.shows.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ) : null}
        </dl>
        {item.links?.length ? (
          <p className="entryLinks">
            {item.links.map((link) => (
              <a
                key={link.href}
                className="textLink"
                href={link.href}
                target="_blank"
                rel="noopener"
              >
                {link.label}
                <span className="visuallyHidden">
                  {`: ${item.title} (opens in a new tab)`}
                </span>
              </a>
            ))}
          </p>
        ) : null}
      </div>
    </details>
  );
}
