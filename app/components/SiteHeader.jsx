"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, person } from "../siteData";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="siteHeader">
      <div className="wrap siteHeaderInner">
        <Link
          className="brand"
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          {person.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="navList">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="navLink"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
