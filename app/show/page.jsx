import Image from "next/image";
import PageHero from "../components/PageHero";
import { showHighlights, showLinks } from "../siteData";

export const metadata = {
  title: "Show",
};

export default function ShowPage() {
  return (
    <main className="pageShell">
      <PageHero
        className="showHero"
        eyebrow="JohnstonBros"
        title="JohnstonBros show work and media ministry."
        lead="This page highlights my role with JohnstonBros, the current teaching series, and links to the main show platforms."
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
          aria-label="Watch the current JohnstonBros series"
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

      <section className="section introGrid">
        {showHighlights.map((item) => (
          <article className="infoCard staticCard" key={item.title}>
            <p className="eyebrow">Show Focus</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section splitSection">
        <div className="sectionText">
          <p className="eyebrow">My Role</p>
          <h2 className="seriesHeadline">
            I help plan, produce, edit, and publish JohnstonBros content.
          </h2>
          <p>
            JohnstonBros is where my teaching, media production, and publishing
            work come together each week.
          </p>
        </div>
        <div className="notePanel">
          <p className="eyebrow">Current JohnstonBros Focus</p>
          <div className="resumeList">
            <div className="listRow">
              <strong>Weekly schedule</strong>
              <span>The homepage currently invites viewers to join every Wednesday morning.</span>
            </div>
            <div className="listRow">
              <strong>Featured series</strong>
              <span>The current featured series is WHY WE USE THE KJV.</span>
            </div>
            <div className="listRow">
              <strong>Series theme</strong>
              <span>The series explores the manuscripts, methods, and men behind the King James Version and modern versions.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="splitSection appShowcaseSection">
        <div className="appShowcaseImageWrap">
          <img
            src="/johnston-bros-app.webp"
            alt="Johnston Bros app preview"
            className="appShowcaseImage"
          />
        </div>

        <div className="splitContent">
          <p className="eyebrow">App Design & Development</p>
          <h2>Johnston Bros App</h2>
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
