import Image from "next/image";
import Link from "next/link";
import { homeCards, homeHighlights } from "./siteData";

export default function Home() {
  return (
    <main className="pageShell">
      <section className="hero homeHero">
        <video
          className="heroVideo heroVideoBackground"
          src="/hero-video.mp4"
          aria-label="Dr. Luke Johnston featured video"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="heroContent">
          <p className="eyebrow">Official Site</p>
          <h1>Dr. Luke Johnston</h1>
          <p>
            This is the main place to explore my ministry background,
            published books, JohnstonBros media work, resume, degrees,
            transcripts, and supporting documents.
          </p>
          <div className="buttonRow">
            <Link className="button" href="/about">
              About Dr. Luke
            </Link>
            <Link className="button secondary" href="/resume">
              Resume
            </Link>
            <Link className="button secondary" href="/documents">
              Documents
            </Link>
          </div>
          <div className="heroMeta">
            <span>Ministry leadership</span>
            <span>Published books</span>
            <span>Academic records</span>
          </div>
        </div>
      </section>

      <section className="section introGrid">
        {homeCards.map((card) => (
          <Link key={card.href} className="infoCard" href={card.href}>
            <p className="eyebrow">{card.eyebrow}</p>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </Link>
        ))}
      </section>

      <section className="section splitSection">
        <Link
          className="portraitFeature"
          href="/about"
          aria-label="Learn more about Dr. Luke Johnston"
        >
          <div className="portraitFeatureFrame">
            <Image
              src="/luke-johnston-enhanced.png"
              alt="Dr. Luke Johnston in a black suit"
              fill
              sizes="(max-width: 860px) 100vw, 44vw"
              className="portraitFeatureImage"
            />
          </div>
          <span className="playBadge">About Dr. Luke</span>
        </Link>
        <div className="sectionText">
          <p className="eyebrow">About Dr. Luke Johnston</p>
          <h2 className="seriesHeadline">Pastor, teacher, author, and JohnstonBros contributor.</h2>
          <p>
            Use this site to learn about my ministry work, published writing,
            media involvement, and academic background.
          </p>
        </div>
      </section>

      <section className="section highlightSection">
        <div className="highlightGrid">
          {homeHighlights.map((item) => (
            <article className="highlightCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
