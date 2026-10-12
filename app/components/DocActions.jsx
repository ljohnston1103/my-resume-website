import downloads from "../../public/portfolio-downloads.json";
import { fileInfo, formatBytes } from "../_lib/publicFiles";
import { DownloadIcon, ViewIcon } from "./Icons";

// "View PDF" opens the browser's PDF reader in a new tab; "Download" saves the
// file. Renders nothing when the file is not in public/, so no button is
// ever left pointing at a missing document.
export default function DocActions({
  href,
  downloadName,
  label,
  pages = null,
  tone = "light",
  size = "md",
  showMeta = true,
}) {
  const file = fileInfo(href);
  if (!file) return null;

  const bytes = formatBytes(file.bytes);
  const allDownloads = [...downloads.curricula, ...downloads.companions, ...downloads.books, downloads.fullPortfolio, downloads.resume, downloads.cv];
  const pageCount = pages ?? allDownloads.find((item) => (item.href || item.webPath) === href)?.pages;
  const meta = ["PDF", pageCount ? `${pageCount.toLocaleString("en-US")} pages` : null, bytes].filter(Boolean).join(", ");

  return (
    <div className={`docActions tone-${tone} size-${size}`}>
      <a className="btn btnSolid" href={href} target="_blank" rel="noopener">
        <ViewIcon />
        View PDF
        <span className="visuallyHidden">{`: ${label} (opens in a new tab)`}</span>
      </a>
      <a className="btn btnOutline" href={href} download={downloadName || true}>
        <DownloadIcon />
        Download
        <span className="visuallyHidden">{`: ${label}, ${meta}`}</span>
      </a>
      {showMeta ? (
        <span className="docMeta" aria-hidden="true">
          {meta}
        </span>
      ) : null}
    </div>
  );
}

// True when the file exists, for pages that need to word things accordingly.
export function hasFile(href) {
  return Boolean(fileInfo(href));
}
