import Image from "next/image";
import Link from "next/link";
import ResumeLinks from "./components/ResumeLinks";
import TeachingRange from "./components/TeachingRange";
import { currentRoles, educationInProgress, person, portfolio } from "./siteData";

export default function Home() {
  const roles = currentRoles.slice(0, 3);

  return (
    <main>
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="heroText">
          <h1 id="hero-title" className="heroName">
            {person.name}
          </h1>
          <p className="heroRole">{person.role}</p>
          <p className="lead">{person.intro}</p>
          <ResumeLinks />
        </div>
        <div className="heroPortrait">
          <Image
            src={person.portrait}
            alt={`Portrait of ${person.name}`}
            fill
            preload
            sizes="(min-width: 900px) 34vw, 112px"
          />
        </div>
      </section>

      <section className="section wrap split" aria-labelledby="teaching-title">
        <h2 id="teaching-title" className="sectionTitle">
          Teaching experience
        </h2>
        <TeachingRange />
      </section>

      <section className="section wrap split" aria-labelledby="work-title">
        <div className="sectionIntro">
          <h2 id="work-title" className="sectionTitle">
            Selected work
          </h2>
          <p className="sectionNote">
            <Link className="textLink" href="/books">
              All work
            </Link>
          </p>
        </div>
        <ul className="workList">
          {portfolio.filter((item) => ["C01", "C02", "C03", "C04", "C05", "B03"].includes(item.id)).map((item) => (
            <li key={item.id}>
              <Link className="workItem" href={`/books#${item.id}`}>
                {item.cover ? (
                  <span className="workCover">
                    <Image
                      src={item.cover.src}
                      alt=""
                      width={item.cover.width}
                      height={item.cover.height}
                      sizes="(min-width: 640px) 120px, 80px"
                    />
                  </span>
                ) : null}
                <span className="workText">
                  <span className="workTitle">{item.title}</span>
                  {item.subtitle ? <span className="workSubtitle">{item.subtitle}</span> : null}
                  <span className="workMeta">
                    {item.kind}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section wrap split" aria-labelledby="now-title">
        <div className="sectionIntro">
          <h2 id="now-title" className="sectionTitle">
            Current roles and study
          </h2>
          <p className="sectionNote">
            <Link className="textLink" href="/resume">
              Full experience and education
            </Link>
          </p>
        </div>
        <ul className="lineList">
          {roles.map((role) => (
            <li key={role.title}>
              <span className="lineTitle">{role.title}</span>
              <span className="lineDetail">
                {role.org ? `${role.org}, ` : ""}
                {role.dates.replace("–Present", " to present")}
              </span>
            </li>
          ))}
          <li>
            <span className="lineTitle">Degrees in progress</span>
            <span className="lineDetail">
              {educationInProgress
                .map((degree) => `${degree.title}, ${degree.org}`)
                .join("; ")}
              . All expected Spring 2027.
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}
