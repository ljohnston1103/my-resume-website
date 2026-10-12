import Image from "next/image";
import Link from "next/link";
import TeachingStats from "../components/TeachingStats";
import { person } from "../siteData";

export const dynamic = "force-static";

export const metadata = {
  title: "About",
  description: "About Luke Johnston: teaching, ministry, publishing, and study.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="band bandPaper aboutBand" aria-labelledby="about-title">
        <div className="wrap aboutGrid">
          <div className="introPortrait aboutPortrait">
            <Image
              src={person.portrait}
              alt={`Portrait of ${person.name}`}
              fill
              preload
              sizes="(min-width: 900px) 34vw, 90vw"
            />
          </div>
          <div className="aboutText">
            <h1 id="about-title" className="pageTitle">
              About
            </h1>
            <p className="leadText">{person.intro}</p>
            <p className="bodyText">
              I serve as Youth and Discipleship Pastor at Millheim Baptist Church and as an
              Account Representative with State Farm in North Canton, Ohio. From April 2022 to
              October 2025, I served as Youth and Evangelism Director at Greentown Baptist
              Church, where my evangelism leadership began in February 2019.
            </p>
            <p className="bodyText">
              I am completing a Doctor of Ministry at Luther Rice College &amp; Seminary, where my
              doctoral ministry project concerns an intentional one-to-one discipleship process
              at Millheim. I am also completing a Master of Arts in Church Ministry and a
              Bachelor of Science in Biblical Studies at Mission University. All three are
              expected in Spring 2027.
            </p>
            <TeachingStats />
            <dl className="contactList">
              <div>
                <dt>Location</dt>
                <dd>{person.location}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a className="textLink" href={`mailto:${person.email}`}>
                    {person.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a className="textLink" href={person.phoneHref}>
                    {person.phone}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="buttonRow">
              <Link className="btn btnSolid" href="/curriculum">
                See the curriculum
              </Link>
              <Link className="btn btnOutline" href="/resume">
                Experience and education
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
