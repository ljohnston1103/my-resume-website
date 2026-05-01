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
        title="Resume, ministry experience, skills, and degrees."
        lead="This page gives a quick look at my work history, ministry background, key skills, academic training, and current Luther Rice DMin progress."
        actions={
          <>
            <a
              className="button"
              href="/documents/luke-johnston-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume PDF
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
              <strong>Ministry leadership</strong>
              <span>Youth, discipleship, evangelism, training, outreach, and curriculum work.</span>
            </div>
            <div className="listRow">
              <strong>Professional background</strong>
              <span>Account management, client communication, and relationship-building through State Farm.</span>
            </div>
            <div className="listRow">
              <strong>Creative work</strong>
              <span>Writing, publishing, editing, website management, and media production.</span>
            </div>
            <div className="listRow">
              <strong>DMin progress</strong>
              <span>Luther Rice Doctor of Ministry work currently shows 18 completed hours and a 3.83 GPA.</span>
            </div>
          </div>
        </div>
      </PageHero>

      <section className="section resumeExperienceSection">
        <div className="teamIntro">
          <p className="eyebrow">Experience Highlights</p>
          <h2>Recent ministry, media, writing, and professional experience.</h2>
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
