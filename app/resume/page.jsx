import Link from "next/link";
import { anyFile } from "../components/DocRow";
import KeyDocuments from "../components/KeyDocuments";
import PageIntro from "../components/PageIntro";
import ResumeEntry from "../components/ResumeEntry";
import TeachingStats from "../components/TeachingStats";
import {
  currentRoles,
  digitalWork,
  educationAdditional,
  educationCompleted,
  educationInProgress,
  keyDocuments,
  missions,
  person,
  previousRoles,
  professionalDevelopment,
  skillGroups,
} from "../siteData";

export const dynamic = "force-static";

export const metadata = {
  title: "Experience",
  description:
    "Teaching, ministry, customer service, sales, missions training, publishing, digital projects, and education.",
};

const sections = [
  { id: "teaching", label: "Teaching" },
  { id: "current", label: "Current roles" },
  { id: "previous", label: "Previous roles" },
  { id: "missions", label: "Missions training" },
  { id: "digital", label: "Digital projects" },
  { id: "education", label: "Education" },
  { id: "development", label: "Professional development" },
  { id: "skills", label: "Skills" },
];

// "curriculum development, lesson planning" -> "Curriculum development, lesson planning."
function sentence(items) {
  const text = items.join(", ");
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}.`;
}

function EntryGroup({ entries, level = 3 }) {
  return (
    <div className="resumeEntries">
      {entries.map((entry) => (
        <ResumeEntry key={`${entry.title}-${entry.dates}`} entry={entry} level={level} />
      ))}
    </div>
  );
}

export default function ExperiencePage() {
  const resumeDocs = keyDocuments.filter((doc) => doc.id === "resume" || doc.id === "cv");

  return (
    <main>
      <PageIntro title="Experience and education" lead={person.intro}>
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
      </PageIntro>

      {anyFile(resumeDocs.map((doc) => doc.href)) ? (
        <section className="band bandNavy slimBand" aria-label="Resume and CV">
          <div className="wrap">
            <KeyDocuments tone="dark" documents={resumeDocs} headingLevel={2} />
          </div>
        </section>
      ) : null}

      <div className="wrap resumeLayout">
        <nav className="pageNav" aria-label="On this page">
          <p className="pageNavTitle">On this page</p>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="resumeBody">
          <section id="teaching" className="resumeSection" aria-labelledby="teaching-title">
            <h2 id="teaching-title" className="resumeHeading">
              Teaching
            </h2>
            <TeachingStats />
            <p className="resumeAside">
              Curriculum, series, and training materials are on the{" "}
              <Link className="textLink" href="/curriculum">
                Curriculum
              </Link>{" "}
              page.
            </p>
          </section>

          <section id="current" className="resumeSection" aria-labelledby="current-title">
            <h2 id="current-title" className="resumeHeading">
              Current roles
            </h2>
            <EntryGroup entries={currentRoles} />
          </section>

          <section id="previous" className="resumeSection" aria-labelledby="previous-title">
            <h2 id="previous-title" className="resumeHeading">
              Previous roles
            </h2>
            <EntryGroup entries={previousRoles} />
          </section>

          <section id="missions" className="resumeSection" aria-labelledby="missions-title">
            <h2 id="missions-title" className="resumeHeading">
              Missions training and preparation
            </h2>
            <EntryGroup entries={missions} />
          </section>

          <section id="digital" className="resumeSection" aria-labelledby="digital-title">
            <h2 id="digital-title" className="resumeHeading">
              Digital projects
            </h2>
            <p className="bodyText">{digitalWork.summary}</p>
            <ul className="lineList">
              {digitalWork.projects.map((project) => (
                <li key={project.title}>
                  <span className="lineTitle">{project.title}</span>
                  {project.text ? <span className="lineDetail">{project.text}</span> : null}
                </li>
              ))}
            </ul>
            <p className="toolLine">
              <span className="toolLabel">Tools used in project work</span>{" "}
              {digitalWork.tools.join(", ")}.
            </p>
            <p className="resumeAside">
              See the work on the{" "}
              <Link className="textLink" href="/digital">
                Apps and websites
              </Link>{" "}
              page.
            </p>
          </section>

          <section id="education" className="resumeSection" aria-labelledby="education-title">
            <h2 id="education-title" className="resumeHeading">
              Education
            </h2>
            <h3 className="groupTitle">In progress</h3>
            <EntryGroup entries={educationInProgress} level={4} />
            <h3 className="groupTitle">Completed</h3>
            <EntryGroup entries={educationCompleted} level={4} />
            <h3 className="groupTitle">Additional</h3>
            <EntryGroup entries={educationAdditional} level={4} />
          </section>

          <section id="development" className="resumeSection" aria-labelledby="development-title">
            <h2 id="development-title" className="resumeHeading">
              Professional development
            </h2>
            <EntryGroup entries={professionalDevelopment} />
          </section>

          <section id="skills" className="resumeSection" aria-labelledby="skills-title">
            <h2 id="skills-title" className="resumeHeading">
              Skills
            </h2>
            <dl className="skillList">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <dt>{group.title}</dt>
                  <dd>{sentence(group.items)}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
    </main>
  );
}
