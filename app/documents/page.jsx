import PageHero from "../components/PageHero";
import { documents } from "../siteData";

export const metadata = {
  title: "Documents",
};

export default function DocumentsPage() {
  return (
    <main className="pageShell">
      <PageHero
        className="documentsHero"
        eyebrow="Documents"
        title="Professional resumes and academic records."
        lead="Choose the full professional resume or the focused curriculum developer resume. Supporting transcripts and degree records are also available below."
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
            <a
              className="button secondary"
              href="/documents/luther-rice-status-sheet.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Doctor of Ministry Status
            </a>
          </>
        }
      >
        <div className="heroPanel">
          <p className="eyebrow">PDF Files</p>
          <p>Each item below opens directly as a PDF from the site.</p>
        </div>
      </PageHero>

      <section className="section sectionWash">
        <div className="sectionHeader">
          <p className="eyebrow">Document Center</p>
          <h2>Every record in one place.</h2>
        </div>
        <div className="documentGrid">
          {documents.map((document) => (
            <a
              className="bookCard"
              href={document.href}
              key={document.title}
              target="_blank"
              rel="noreferrer"
            >
              <p className="eyebrow">{document.badge}</p>
              <h2>{document.title}</h2>
              <p>{document.text}</p>
              <span className="inlineLink">Open PDF</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
