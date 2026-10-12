import Image from "next/image";
import Link from "next/link";
import { firstImage } from "../_lib/publicFiles";
import { hostOf } from "../_lib/collections";
import { capitalize } from "./WorkCard";
import { ViewIcon } from "./Icons";

// An app or website: a framed screenshot, what it is, my role, and a working
// link. If the screenshot file is missing, the frame shows the site's name.
export default function SiteCard({ item, headingLevel = 3, compact = false }) {
  const Heading = `h${headingLevel}`;
  const [primary, ...more] = item.links ?? [];
  const host = primary ? hostOf(primary.href) : "";
  const shot = firstImage([item.screenshot]);
  const visitLabel = item.portrait ? primary?.label : "Visit site";

  return (
    <article
      className={`siteCard${item.portrait ? " isApp" : ""}${compact ? " isCompact" : ""}`}
      id={item.id}
      aria-labelledby={`${item.id}-title`}
    >
      <div className={`siteFrame${item.portrait ? " phoneFrame" : ""}`} aria-hidden="true">
        {!item.portrait ? (
          <span className="browserBar">
            <span className="browserDots" />
            <span className="browserUrl">{host}</span>
          </span>
        ) : null}
        <span className="siteShot">
          {shot ? (
            <Image
              src={shot.src}
              alt=""
              width={shot.width}
              height={shot.height}
              sizes={item.portrait ? "(min-width: 900px) 260px, 60vw" : "(min-width: 900px) 560px, 100vw"}
            />
          ) : (
            <span className="shotFallback">
              <span className="shotFallbackTitle">{item.title}</span>
              {host ? <span className="shotFallbackHost">{host}</span> : null}
            </span>
          )}
        </span>
      </div>

      <div className="siteBody">
        <p className="workKind">{capitalize(item.kind)}</p>
        <Heading id={`${item.id}-title`} className="siteTitle">
          {item.title}
        </Heading>
        <p className="workSummary">{item.summary}</p>
        {item.role && !compact ? (
          <p className="workRole">
            <span className="workRoleLabel">My role</span> {item.role}
          </p>
        ) : null}
        <div className="siteActions">
          {primary ? (
            <a className="btn btnSolid" href={primary.href} target="_blank" rel="noopener">
              <ViewIcon />
              {visitLabel}
              <span className="visuallyHidden">{`: ${item.title} (opens in a new tab)`}</span>
            </a>
          ) : null}
          {!compact
            ? more.map((link) => (
                <a key={link.href} className="textLink" href={link.href} target="_blank" rel="noopener">
                  {link.label}
                  <span className="visuallyHidden"> (opens in a new tab)</span>
                </a>
              ))
            : null}
          {!compact
            ? item.related.map((link) => (
                <Link key={link.href} className="textLink" href={link.href}>
                  {link.label}
                </Link>
              ))
            : null}
        </div>
      </div>
    </article>
  );
}
