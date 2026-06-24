"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, PROFILE } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <Link href="/" className="nav__brand">
        <span className="nav__avatar">
          <Image src={PROFILE.photo} alt="Nafisa Aslam" width={44} height={44} />
        </span>
        <span className="nav__brandtext">
          Nafisa<strong>Aslam</strong>
        </span>
      </Link>

      <nav className={`nav__links${open ? " open" : ""}`}>
        {NAV.map((n) => {
          const active = pathname === n.href;
          return (
            <Link key={n.href} href={n.href} className={active ? "active" : ""}>
              {n.label}
            </Link>
          );
        })}
      </nav>

      <button
        className={`nav__toggle${open ? " open" : ""}`}
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>
    </header>
  );
}
