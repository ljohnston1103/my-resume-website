import Image from "next/image";
import PageHero from "../components/PageHero";
import { showHighlights, showLinks } from "../siteData";

export const metadata = {
  title: "Multimedia Produced",
};

export default function ShowPage() {
  return (
    <main className="pageShell">
      <PageHero
        className="showHero"
        eyebrow="Multimedia Produced"
        title="Media, research, and teaching resources I help bring to life."
        lead="Explore my work with JohnstonBros, Oldest & Best, and the How To Study the Bible podcast from Millheim Baptist Church."
        actions={
          <>
            {showLinks.map((link) => (
              <a
                key={link.label}
                className="button"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </>
        }
      >
        <a
          className="videoThumbnail"
          href="https://youtu.be/b8YelGLYFH4"
          target="_blank"
          rel="noreferrer"
          aria-label="Watch a JohnstonBros series"
        >
          <Image
            src="/why-kjv-thumbnail.png"
            alt="JohnstonBros series thumbnail"
            fill
            sizes="(max-width: 860px) 100vw, 40vw"
            className="thumbnailImage"
          />
          <span className="playBadge">Watch Series</span>
        </a>
      </PageHero>

      <section className="section sectionWash">
        <div className="sectionHeader">
          <p className="eyebrow">Featured work</p>
          <h2>Media with a purpose.</h2>
        </div>
        <div className="introGrid">
          {showHighlights.map((item) => (
            <article className="infoCard staticCard" key={item.title}>
              <p className="eyebrow">Multimedia Produced</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section splitSection">
        <div className="sectionText">
          <p className="eyebrow">Production Role</p>
          <h2 className="seriesHeadline">
            I help plan, produce, edit, and publish meaningful digital content.
          </h2>
          <p>
            From video and podcast production to research-focused web resources,
            this work brings teaching, media production, and publishing together.
          </p>
        </div>
        <div className="notePanel">
          <p className="eyebrow">Explore the Projects</p>
          <div className="resumeList">
            <div className="listRow">
              <strong>JohnstonBros</strong>
              <span>
                Faith-centered video and podcast content, from episode ideas to
                online publishing.
              </span>
            </div>
            <div className="listRow">
              <strong>Oldest &amp; Best</strong>
              <span>
                An interactive evidence database for exploring disputed New
                Testament passages and their textual witnesses.
              </span>
            </div>
            <div className="listRow">
              <strong>How To Study the Bible</strong>
              <span>
                Listen to the Millheim Baptist Church podcast on Spotify.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section splitSection appShowcaseSection">
        <div className="appShowcaseImageWrap">
          <img
            src="/johnston-bros-app.webp"
            alt="Johnston Bros app preview"
            className="appShowcaseImage"
          />
        </div>

        <div className="splitContent">
          <p className="eyebrow">App Design &amp; Development</p>
          <h2 className="seriesHeadline">Johnston Bros App</h2>
          <p>
            I designed and developed the Johnston Bros app as an extension of
            the Johnston Bros brand, bringing together website content, media,
            and mobile-friendly access in one place.
          </p>

          <a
            className="button"
            href="https://apps.apple.com/us/app/johnston-bros/id6763349676"
            target="_blank"
            rel="noreferrer"
          >
            View on the App Store
          </a>
        </div>
      </section>
    </main>
  );
}
