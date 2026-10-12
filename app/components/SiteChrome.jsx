"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerLinks, navItems, person } from "../siteData";
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
        <div className="wrap footerGrid">
          <div className="footerIdentity">
            <p className="footerName">{person.name}</p>
            <p className="footerLine">{person.headline}</p>
            <p className="footerLine">{person.location}</p>
          </div>
          <div>
            <p className="footerHeading">Contact</p>
            <ul className="footerList">
              <li>
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </li>
              <li>
                <a href={person.phoneHref}>{person.phone}</a>
              </li>
            </ul>
          </div>
          <nav aria-label="Portfolio">
            <p className="footerHeading">Portfolio</p>
            <ul className="footerList">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="More pages">
            <p className="footerHeading">More</p>
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
