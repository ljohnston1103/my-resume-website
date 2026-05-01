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
        title="Resume, transcripts, and ministry degree records."
        lead="This page includes my resume, updated Luther Rice DMin transcript, Doctor of Ministry status sheet, and degree transcripts in PDF format."
        actions={
          <>
            <a
              className="button"
              href="/documents/luke-johnston-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume PDF
            </a>
            <a
              className="button secondary"
              href="/documents/luther-rice-dmin-transcript.pdf"
              target="_blank"
              rel="noreferrer"
            >
              DMin Transcript
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

      <section className="section documentGrid">
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
      </section>

    </main>
  );
}
