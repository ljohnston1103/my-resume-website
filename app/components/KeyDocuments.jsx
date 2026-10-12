import { fileInfo } from "../_lib/publicFiles";
import { keyDocuments } from "../siteData";
import DocActions from "./DocActions";

// Resume, CV, and curriculum portfolio, each with View and Download.
// Documents whose files are missing are left out entirely.
export default function KeyDocuments({ tone = "dark", documents = keyDocuments, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  const available = documents.filter((doc) => fileInfo(doc.href));
  if (!available.length) return null;

  return (
    <ul className={`keyDocs tone-${tone}`}>
      {available.map((doc) => (
        <li key={doc.id} className="keyDoc">
          <Heading className="keyDocTitle">{doc.label}</Heading>
          <p className="keyDocText">{doc.description}</p>
          <DocActions
            href={doc.href}
            downloadName={doc.downloadName}
            label={doc.label}
            pages={doc.pages}
            tone={tone}
          />
        </li>
      ))}
    </ul>
  );
}
