import Link from "next/link";
import PageHeader from "../components/PageHeader";
import ResumeLinks from "../components/ResumeLinks";
import { academicRecords } from "../siteData";

export const metadata = {
  title: "Resume",
  description: "Luke Johnston's full professional resume and curriculum developer resume, with academic records.",
};

export default function ResumePage() {
  return (
    <main>
      <PageHeader
        title="Resume"
        lead="Two versions, both as PDFs: a comprehensive professional resume, and a shorter resume focused on curriculum development and teaching."
      />

      <section className="section wrap split" aria-labelledby="downloads-title">
        <h2 id="downloads-title" className="sectionTitle">
          Download
        </h2>
        <div>
          <ResumeLinks variant="list" />
          <p className="sectionFoot">
            <a className="textLink" href="/documents/luke-johnston-portfolio-guide.pdf" target="_blank" rel="noopener">Download the portfolio guide</a>{" "}
            for curriculum, teaching, missions training, books, and digital work samples.
          </p>
          <p className="sectionFoot">
            <a className="textLink" href="/documents/luke-johnston-curriculum-samples.pdf" target="_blank" rel="noopener">View selected teaching samples</a>{" "}
            from the children’s devotional and youth and adult curricula.
          </p>
          <p className="sectionFoot">
            Experience, education, and skills are also listed on the{" "}
            <Link className="textLink" href="/resume">
              Experience
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      <section id="records" className="section wrap split" aria-labelledby="records-title">
        <h2 id="records-title" className="sectionTitle">
          Academic records
        </h2>
        <ul className="recordList">
          {academicRecords.map((record) => (
            <li key={record.href}>
              <a className="record" href={record.href} target="_blank" rel="noopener">
                <span className="recordTitle">{record.title}</span>
                <span className="recordText">{record.text}</span>
                <span className="recordMeta">
                  PDF<span className="visuallyHidden"> (opens in a new tab)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
