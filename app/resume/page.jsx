import Link from "next/link";
import PageHero from "../components/PageHero";
import { degrees, experience, skillGroups } from "../siteData";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <main className="pageShell">
      <PageHero
        className="resumeHero"
        eyebrow="Resume"
        title="Teaching, curriculum, ministry, and professional experience."
        lead="Explore my work in education, missions preparation, business, publishing, and digital resources, with completed education and three degrees expected in Spring 2027."
        actions={
          <>
            <a
              className="button"
              href="/documents/luke-johnston-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Full Professional Resume
            </a>
            <a
              className="button secondary"
              href="/documents/luke-johnston-curriculum-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Curriculum Developer Resume
            </a>
            <Link className="button secondary" href="/documents">
              Supporting Documents
            </Link>
          </>
        }
      >
        <div className="heroPanel">
          <p className="eyebrow">Resume Snapshot</p>
          <div className="resumeList">
            <div className="listRow">
              <strong>Teaching experience</strong>
              <span>7 years teaching children ages 6–11 and 5 years teaching students ages 12–19, plus adult training and discipleship.</span>
            </div>
            <div className="listRow">
              <strong>Professional background</strong>
              <span>Customer account service, sales, volunteer coordination, ministry leadership, and missions preparation.</span>
            </div>
            <div className="listRow">
              <strong>Creative work</strong>
              <span>Writing, publishing, editing, website management, and media production.</span>
            </div>
            <div className="listRow">
              <strong>Education in progress</strong>
              <span>Luther Rice Doctor of Ministry and Mission University Master of Arts in Church Ministry and Bachelor of Science in Biblical Studies. Expected completion Spring 2027.</span>
            </div>
          </div>
        </div>
      </PageHero>

      <section className="section resumeExperienceSection">
        <div className="teamIntro">
          <p className="eyebrow">Experience Highlights</p>
          <h2>Teaching, training, leadership, business, and creative work.</h2>
        </div>
        <div className="resumeGrid">
          {experience.map((item) => (
            <article className="experienceCard" key={`${item.period}-${item.title}`}>
              <p className="timelinePeriod">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="timelineOrg">{item.organization}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section splitSection">
        <div className="notePanel">
          <p className="eyebrow">Education</p>
          <div className="resumeList">
            {degrees.map((degree) => (
              <div className="listRow" key={degree.degree}>
                <strong>{degree.degree}</strong>
                <span>
                  {degree.school}, {degree.location}. {degree.note}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="notePanel">
          <p className="eyebrow">Core Skills</p>
          <div className="skillColumns">
            {skillGroups.map((group) => (
              <div className="skillColumn" key={group.title}>
                <strong>{group.title}</strong>
                <div className="skillChips">
                  {group.items.map((item) => (
                    <span className="skillChip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
