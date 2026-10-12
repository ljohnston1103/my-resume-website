import Image from "next/image";
import PageHeader from "../components/PageHeader";
import { mediaProjects } from "../siteData";

export const metadata = {
  title: "Media",
  description: "Video, podcast, web, and app projects connected to Luke Johnston’s work.",
};

export default function MediaPage() {
  return (
    <main>
      <PageHeader title="Media" lead="Video, podcast, web, and app projects." />

      {mediaProjects.map((project) => (
        <section
          key={project.id}
          className="section wrap split"
          aria-labelledby={`${project.id}-title`}
        >
          <h2 id={`${project.id}-title`} className="sectionTitle">
            {project.title}
          </h2>
          <div className="mediaBody">
            {project.image ? (
              <div
                className={`mediaImage fit-${project.image.fit}`}
                style={{ "--media-ratio": project.image.ratio }}
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(min-width: 900px) 36rem, 100vw"
                />
              </div>
            ) : null}
            <p className="bodyText">{project.text}</p>
            <ul className="linkList">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a className="textLink" href={link.href} target="_blank" rel="noopener">
                    {link.label}
                    <span className="visuallyHidden"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </main>
  );
}
