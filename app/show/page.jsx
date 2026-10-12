import Image from "next/image";
import Link from "next/link";
import { firstImage } from "../_lib/publicFiles";
import PageIntro from "../components/PageIntro";
import { mediaProjects } from "../siteData";

export const dynamic = "force-static";

export const metadata = {
  title: "Media",
  description: "Video, podcast, web, and app projects connected to Luke Johnston’s work.",
};

export default function MediaPage() {
  return (
    <main>
      <PageIntro title="Media" lead="Video, podcast, web, and app projects.">
        <p className="pageLeadNote">
          Websites and apps are also on the{" "}
          <Link className="textLink" href="/digital">
            Apps and websites
          </Link>{" "}
          page.
        </p>
      </PageIntro>

      <section className="band bandPaper" aria-label="Media projects">
        <div className="wrap mediaList">
          {mediaProjects.map((project) => {
            const image = project.image ? firstImage([project.image.src]) : null;
            return (
              <article key={project.id} className="mediaItem" aria-labelledby={`${project.id}-title`}>
                {image ? (
                  <div className={`mediaImage fit-${project.image.fit}`}>
                    <Image
                      src={image.src}
                      alt={project.image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(min-width: 900px) 34rem, 100vw"
                    />
                  </div>
                ) : null}
                <div className="mediaText">
                  <h2 id={`${project.id}-title`} className="siteTitle">
                    {project.title}
                  </h2>
                  <p className="workSummary">{project.text}</p>
                  <p className="mediaLinkRow">
                    {project.links.map((link) => (
                      <a key={link.href} className="textLink" href={link.href} target="_blank" rel="noopener">
                        {link.label}
                        <span className="visuallyHidden"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
