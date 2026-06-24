import Link from "next/link";
import { NAV } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__links">
        {NAV.filter((n) => n.href !== "/").map((n) => (
          <Link key={n.href} href={n.href}>
            {n.label}
          </Link>
        ))}
      </div>
      <p>© {year} Nafisa Aslam · Crafted with curiosity &amp; clean analysis.</p>
    </footer>
  );
}
