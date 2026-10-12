import Link from "next/link";
import { digitalItems } from "../_lib/collections";
import PageIntro from "../components/PageIntro";
import SiteCard from "../components/SiteCard";
import { digitalWork, mediaProjects } from "../siteData";

export const dynamic = "force-static";

export const metadata = {
  title: "Apps and websites",
  description:
    "Eternal Word Bible Handbook, the How to Study the Bible study app, Oldest and Best, JohnstonBros, and Eternal Word Publishing.",
};

export default function DigitalPage() {
  const items = digitalItems();
  const media = mediaProjects.filter((project) => project.id === "podcast");

  return (
    <main>
      <PageIntro
        title="Apps and websites"
        lead="I develop and direct ministry websites and Bible-study resources: I define their purpose, organize content, shape the user experience, and review the results."
      />

      <section className="band bandPaper" aria-label="Apps and websites">
        <div className="wrap siteList">
          {items.map((item) => (
            <SiteCard key={item.id} item={item} headingLevel={2} />
          ))}
        </div>
      </section>

      <section className="band bandTint" aria-labelledby="media-title">
        <div className="wrap">
          <div className="bandHead">
            <h2 id="media-title" className="displayTitle">
              Podcast
            </h2>
            <p className="bandLead">
              Video, podcast, and app links are also collected on the{" "}
              <Link className="textLink" href="/show">
                Media
              </Link>{" "}
              page.
            </p>
          </div>
          <ul className="mediaLinks">
            {media.map((project) => (
              <li key={project.id} className="mediaLinkItem">
                <h3 className="proofTitle">{project.title}</h3>
                <p className="proofText">{project.text}</p>
                <p className="mediaLinkRow">
                  {project.links.map((link) => (
                    <a key={link.href} className="textLink" href={link.href} target="_blank" rel="noopener">
                      {link.label}
                      <span className="visuallyHidden"> (opens in a new tab)</span>
                    </a>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band bandPaper" aria-labelledby="tools-title">
        <div className="wrap toolsGrid">
          <h2 id="tools-title" className="displayTitle">
            Tools used in project work
          </h2>
          <p className="leadText">{digitalWork.tools.join(", ")}.</p>
        </div>
      </section>
    </main>
  );
}
