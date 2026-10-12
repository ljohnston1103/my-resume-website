import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { aboutFacts, aboutHighlights } from "../siteData";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="pageShell">
      <PageHero
        className="aboutHero"
        eyebrow="About Dr. Luke Johnston"
        title="Teacher, curriculum developer, author, and ministry leader."
        lead="I bring experience in children’s and youth teaching, adult training, missions preparation, business, publishing, and digital resources."
        actions={
          <>
            <Link className="button" href="/resume">
              Resume Page
            </Link>
            <Link className="button secondary" href="/documents">
              View Documents
            </Link>
          </>
        }
      >
        <div className="aboutPortraitCard">
          <Image
            src="/luke-johnston-enhanced.png"
            alt="Dr. Luke Johnston portrait"
            fill
            sizes="(max-width: 860px) 100vw, 34vw"
            className="aboutPortraitImage"
          />
        </div>
      </PageHero>

      <section className="section teamSection">
        <div className="teamIntro">
          <p className="eyebrow">Highlights</p>
          <h2>Teaching, ministry leadership, writing, and digital work.</h2>
        </div>
        <div className="teamGrid">
          {aboutHighlights.map((item) => (
            <article className="teamCard textCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section splitSection">
        <div className="notePanel">
          <p className="eyebrow">At a Glance</p>
          <div className="resumeList">
            {aboutFacts.map((fact) => (
              <div className="listRow" key={fact.title}>
                <strong>{fact.title}</strong>
                <span>{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="notePanel">
          <p className="eyebrow">Overview</p>
          <h2 className="panelHeadline">What this site brings together.</h2>
          <p>
            My work connects curriculum and teaching with individual discipleship,
            volunteer development, missions preparation, and practical resources.
            I also bring experience in customer account service, sales, independent
            publishing, podcast and video content, and ministry websites.
          </p>
        </div>
      </section>
    </main>
  );
}
