"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollParallax from "../ScrollParallax";
import SiteHeader from "./SiteHeader";

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isEntryPage = pathname === "/enter";

  if (isEntryPage) {
    return children;
  }

  return (
    <>
      <a className="skipLink" href="#main-content">Skip to content</a>
      <ScrollParallax />
      <SiteHeader />
      <div id="main-content" tabIndex={-1}>{children}</div>
      <footer className="footer">
        <div>
          <p className="footerTitle">Dr. Luke Johnston</p>
          <p>Ministry, books, media, and academic documents</p>
        </div>
        <div className="footerLinks">
          <a href="mailto:luke.johnston1103@gmail.com">
            luke.johnston1103@gmail.com
          </a>
          <a
            href="/documents/luke-johnston-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Resume PDF
          </a>
          <Link href="/documents">Document Center</Link>
        </div>
      </footer>
    </>
  );
}
