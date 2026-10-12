"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems, person } from "../siteData";
import { CloseIcon, MenuIcon } from "./Icons";

// Sticky header. Wide screens show all five links; narrower screens show a
// Menu button that opens the same list. The menu closes on navigation,
// on Escape, or when focus or a click leaves it.
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="siteHeader" data-menu={open ? "open" : "closed"}>
      <div className="wrap headerBar">
        <Link className="brand" href="/" aria-current={pathname === "/" ? "page" : undefined}>
          {person.name}
        </Link>
        <nav className="primaryNav" aria-label="Primary" ref={navRef}>
          <button
            ref={buttonRef}
            type="button"
            className="menuButton"
            aria-expanded={open}
            aria-controls="primary-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
            <span>{open ? "Close" : "Menu"}</span>
          </button>
          <ul id="primary-menu" className="navList">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`navLink${item.href === "/documents" ? " navLinkResume" : ""}`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
