import downloads from "../../public/portfolio-downloads.json";
import Link from "next/link";
import { books, curriculumSections } from "../_lib/collections";
import DocRow, { anyFile } from "../components/DocRow";
import KeyDocuments from "../components/KeyDocuments";
import PageIntro from "../components/PageIntro";
import { capitalize } from "../components/WorkCard";
import { bookDetails, curriculumDownloadName, curriculumPdf } from "../portfolioAssets";
import { academicRecords, extraDocuments, keyDocuments } from "../siteData";

export const dynamic = "force-static";

export const metadata = {
  title: "Resume and downloads",
  description:
    "Luke Johnston's resume, comprehensive CV, curriculum portfolio, full curricula, books, and academic records, each ready to view or download.",
};

function bookFiles(item) {
  const details = bookDetails[item.id] ?? {};
  if (details.editions) {
    return details.editions.map((edition) => ({
      key: `${item.id}-${edition.id}`,
      title: `${item.title}, ${edition.label.toLowerCase()}`,
      detail: capitalize(item.kind),
      href: edition.pdf,
      downloadName: edition.downloadName,
    }));
  }
  return [
    {
      key: item.id,
      title: item.title,
      detail: capitalize(item.kind),
      href: details.pdf,
      downloadName: details.downloadName,
    },
  ];
}

export default function DownloadsPage() {
  const sections = curriculumSections()
    .map((section) => ({
      ...section,
      files: section.items.map((item) => ({
        key: item.id,
        title: item.title,
        // Adapted and credited work shows its role line, so credits travel with the file.
        detail:
          item.category === "Curricula and workbooks"
            ? capitalize(item.kind)
            : `${capitalize(item.kind)}. ${item.role}`,
        href: curriculumPdf(item.id),
        downloadName: curriculumDownloadName(item),
      })),
    }))
    .filter((section) => anyFile(section.files.map((file) => file.href)));
  const bookList = books().flatMap(bookFiles);
  const hasBooks = anyFile(bookList.map((file) => file.href));
  const records = academicRecords.map((record) => ({
    ...record,
    downloadName: record.href.split("/").pop(),
  }));

  return (
    <main>
      <PageIntro
        title="Resume and downloads"
        lead="Every document on the site in one place. View any file in your browser or download it."
      >
        <nav className="jumpNav" aria-label="Download sections">
          <a className="jumpLink" href="#resume">Resume and CV</a>
          {sections.length ? <a className="jumpLink" href="#curricula">Curricula</a> : null}
          {hasBooks ? <a className="jumpLink" href="#books">Books</a> : null}
          <a className="jumpLink" href="#records">Academic records</a>
        </nav>
      </PageIntro>

      <section className="band bandPaper anchorBand" id="resume" aria-labelledby="resume-title">
        <div className="wrap">
          <div className="bandHead">
            <h2 id="resume-title" className="displayTitle">
              Resume, CV, and portfolio
            </h2>
          </div>
          <div className="documentPreviews">
            <a href="/documents/luke-johnston-resume.pdf" target="_blank" rel="noopener">
              <img src="/assets/resume-preview.png" alt="First page of Luke Johnston’s redesigned professional resume" width="1020" height="1320" />
              <span>Professional resume · 3 pages</span>
            </a>
            <a href="/documents/luke-johnston-curriculum-portfolio.pdf" target="_blank" rel="noopener">
              <img src="/assets/portfolio-cover.png" alt="Cover of Luke Johnston’s complete curriculum and teaching portfolio" width="735" height="951" />
              <span>Curriculum portfolio · 29 collections</span>
            </a>
          </div>
          <KeyDocuments tone="light" documents={[...keyDocuments, ...extraDocuments]} />
          <p className="bandFoot">
            The same experience and education are on the{" "}
            <Link className="textLink" href="/resume">
              Experience
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {sections.length ? (
        <section className="band bandTint anchorBand" id="curricula" aria-labelledby="curricula-title">
          <div className="wrap">
            <div className="bandHead">
              <h2 id="curricula-title" className="displayTitle">
                Curricula
              </h2>
              <p className="bandLead">
                Descriptions and roles for each are on the{" "}
                <Link className="textLink" href="/curriculum">
                  Curriculum
                </Link>{" "}
                page.
              </p>
            </div>
            <p className="bandFoot">
              <a className="btn btnOutline" href="https://github.com/ljohnston1103/my-resume-website/releases/download/portfolio-files-2026-10-12/Luke_Johnston_Teaching_Source_Files.zip">Download editable teaching files and slide decks</a>
              <span className="docMeta">ZIP · 285 native files · 808 MB</span>
            </p>
            {sections.map((section) => (
              <div key={section.id} className="docGroup">
                <h3 className="docGroupTitle">{section.title}</h3>
                <ul className="docRows">
                  {section.files.map(({ key, ...file }) => (
                    <DocRow key={key} {...file} />
                  ))}
                </ul>
              </div>
            ))}
            <div className="docGroup">
              <h3 className="docGroupTitle">Student companions</h3>
              <ul className="docRows">
                {downloads.companions.map((item) => <DocRow key={item.href} title={item.title} detail={item.id === "C04" ? "Earlier student workbook; edition differs from the final teacher copy." : "Student workbook companion to the instructor edition."} href={item.href} downloadName={item.href.split("/").pop()} pages={item.pages} />)}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {hasBooks ? (
        <section className="band bandPaper anchorBand" id="books" aria-labelledby="books-title">
          <div className="wrap">
            <div className="bandHead">
              <h2 id="books-title" className="displayTitle">
                Books and research
              </h2>
            </div>
            <ul className="docRows">
              {bookList.map(({ key, ...file }) => (
                <DocRow key={key} {...file} />
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="band bandTint anchorBand" id="records" aria-labelledby="records-title">
        <div className="wrap">
          <div className="bandHead">
            <h2 id="records-title" className="displayTitle">
              Academic records
            </h2>
          </div>
          <ul className="docRows">
            {records.map((record) => (
              <DocRow
                key={record.href}
                title={record.title}
                detail={record.text}
                href={record.href}
                downloadName={record.downloadName}
              />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
