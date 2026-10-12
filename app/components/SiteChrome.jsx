"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerLinks, person } from "../siteData";
import SiteHeader from "./SiteHeader";

export default function SiteChrome({ children }) {
  const pathname = usePathname();

  // The password page keeps its own full-screen layout.
  if (pathname === "/enter") {
    return children;
  }

  return (
    <>
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <div id="main-content" tabIndex={-1}>
        {children}
      </div>
      <footer className="siteFooter">
        <div className="wrap siteFooterInner">
          <div className="footerIdentity">
            <p className="footerName">{person.name}</p>
            <p>{person.location}</p>
          </div>
          <ul className="footerList" aria-label="Contact">
            <li>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </li>
            <li>
              <a href={person.phoneHref}>{person.phone}</a>
            </li>
          </ul>
          <nav aria-label="More pages">
            <ul className="footerList">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
