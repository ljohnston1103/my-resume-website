"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../siteData";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="Dr. Luke Johnston home">
        <span className="brandMark">LJ</span>
        <span className="brandText">
          <strong>Dr. Luke Johnston</strong>
          <span>Pastor, teacher, author</span>
        </span>
      </Link>
      <nav className="navLinks" aria-label="Primary">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
