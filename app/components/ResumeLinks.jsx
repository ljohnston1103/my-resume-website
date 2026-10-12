import { resumeFiles } from "../siteData";

const newTab = { target: "_blank", rel: "noopener" };

// Both resume PDFs, as a pair of buttons or as a fuller list.
export default function ResumeLinks({ variant = "buttons" }) {
  if (variant === "list") {
    return (
      <ul className="downloadList">
        {resumeFiles.map((file) => (
          <li key={file.id}>
            <a className="download" href={file.href} {...newTab}>
              <span className="downloadTitle">{file.label}</span>
              <span className="downloadText">{file.description}</span>
              <span className="downloadMeta">
                PDF, {file.pages} pages
                <span className="visuallyHidden"> (opens in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="buttonRow">
      {resumeFiles.map((file, index) => (
        <a
          key={file.id}
          className={index === 0 ? "button" : "button secondary"}
          href={file.href}
          {...newTab}
        >
          {file.label}
          <span className="buttonMeta" aria-hidden="true">
            PDF
          </span>
          <span className="visuallyHidden"> (PDF, opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}
