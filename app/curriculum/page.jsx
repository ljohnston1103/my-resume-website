import Link from "next/link";
import downloads from "../../public/portfolio-downloads.json";
import { curriculumSections } from "../_lib/collections";
import { fileInfo } from "../_lib/publicFiles";
import { numberWord } from "../_lib/words";
import KeyDocuments from "../components/KeyDocuments";
import PageIntro from "../components/PageIntro";
import WorkCard from "../components/WorkCard";
import { curriculumPdf } from "../portfolioAssets";
import { keyDocuments } from "../siteData";

export const dynamic = "force-static";

export const metadata = {
  title: "Curriculum",
  description:
    "Luke Johnston’s flagship curricula, teaching series, missions and training resources, and teaching samples.",
};

export default function CurriculumPage() {
  const sections = curriculumSections();
  const flagship = sections.find((section) => section.id === "flagship");
  const readable = flagship.items.filter((item) => fileInfo(curriculumPdf(item.id))).length;
  const portfolioDoc = keyDocuments
    .filter((doc) => doc.id === "portfolio")
    .map((doc) => ({
      ...doc,
      label: "Complete curriculum portfolio",
      description: `${downloads.fullPortfolio.pages.toLocaleString("en-US")} pages containing all ${downloads.curricula.length} curriculum and teaching collections, with a clickable table of contents and bookmarks.`,
    }));
  const portfolioReady = portfolioDoc.some((doc) => fileInfo(doc.href));
  const allReadable = readable === flagship.items.length;

  const lead =
    readable === flagship.items.length
      ? `${numberWord(flagship.items.length, { capital: true })} flagship curricula you can read in full, plus teaching series, missions and training resources, and teaching samples.`
      : `${numberWord(flagship.items.length, { capital: true })} flagship curricula, plus teaching series, missions and training resources, and teaching samples.`;

  return (
    <main>
      <PageIntro title="Curriculum" lead={lead}>
        <nav className="jumpNav" aria-label="Curriculum sections">
          {sections.map((section) => (
            <a key={section.id} className="jumpLink" href={`#${section.id}`}>
              {section.title}
              <span className="jumpCount">{section.items.length}</span>
            </a>
          ))}
        </nav>
      </PageIntro>

      {portfolioReady ? (
        <section className="band bandNavy slimBand" aria-label="Curriculum portfolio">
          <div className="wrap">
            <KeyDocuments tone="dark" documents={portfolioDoc} headingLevel={2} />
          </div>
        </section>
      ) : null}

      <section className="band bandPaper slimBand" aria-labelledby="formats-title">
        <div className="wrap">
          <div className="bandHead">
            <h2 id="formats-title" className="displayTitle">
              Read the lessons. Explore the source files.
            </h2>
            <p className="bandLead">
              The individual PDFs below contain each collection’s full available written teaching
              materials. Teacher and student resources are included where available, with separate
              student companions clearly labeled. Each collection notes its scope and credits.
            </p>
          </div>
          <p className="bandLead">
            The supporting source ZIP contains 285 files in their original formats, including 84 slide
            decks, teaching documents, rule cards, and other classroom resources. Presentations and
            supporting formats mentioned in the collections are available in this download.
          </p>
          <div className="docActions tone-light size-md">
            <a
              className="btn btnOutline"
              href="https://github.com/ljohnston1103/my-resume-website/releases/download/portfolio-files-2026-10-12/Luke_Johnston_Teaching_Source_Files.zip"
              download="Luke_Johnston_Teaching_Source_Files.zip"
            >
              Download teaching source files
            </a>
            <span className="docMeta">ZIP, 808 MB · 285 files · 84 slide decks</span>
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`band ${section.id === "flagship" ? "bandPaper" : "bandTint"} anchorBand`}
          aria-labelledby={`${section.id}-title`}
        >
          <div className="wrap">
            <div className="bandHead">
              <h2 id={`${section.id}-title`} className="displayTitle">
                {section.title}
              </h2>
              <p className="bandLead">{sectionLead(section.id, section.items.length, allReadable)}</p>
            </div>
            <div className={section.id === "flagship" ? "featureList" : "cardGrid"}>
              {section.items.map((item) => (
                <WorkCard
                  key={item.id}
                  item={item}
                  variant={section.id === "flagship" ? "feature" : "card"}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="band bandPaper" aria-labelledby="more-title">
        <div className="wrap moreGrid">
          <h2 id="more-title" className="displayTitle">
            More of the work
          </h2>
          <ul className="moreLinks">
            <li>
              <Link className="textLink" href="/books">
                Books and research
              </Link>
            </li>
            <li>
              <Link className="textLink" href="/digital">
                Apps and websites
              </Link>
            </li>
            <li>
              <Link className="textLink" href="/documents">
                All downloads
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function sectionLead(id, count, allReadable) {
  switch (id) {
    case "flagship":
      return allReadable
        ? "Five complete curricula, each with its own full PDF. Student companions are listed with their editions."
        : "Complete curricula.";
    case "series":
      return `${numberWord(count, { capital: true })} teaching series. Each card names my role and notes where source material is credited.`;
    case "missions":
      return "Evangelism, outreach, and mission-team preparation resources.";
    case "samples":
      return "Stand-alone lessons and a designed Scripture notebook.";
    default:
      return null;
  }
}
