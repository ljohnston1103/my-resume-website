import { fileInfo } from "../_lib/publicFiles";
import DocActions from "./DocActions";

// One line in a download list. Left out when its file is missing.
export default function DocRow({ title, detail, href, downloadName, pages = null }) {
  if (!fileInfo(href)) return null;

  return (
    <li className="docRow">
      <span className="docRowText">
        <span className="docRowTitle">{title}</span>
        {detail ? <span className="docRowDetail">{detail}</span> : null}
      </span>
      <DocActions href={href} downloadName={downloadName} label={title} pages={pages} size="sm" />
    </li>
  );
}

export function anyFile(hrefs) {
  return hrefs.some((href) => fileInfo(href));
}
