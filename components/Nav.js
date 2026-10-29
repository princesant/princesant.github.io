"use client";
import { useState } from "react";

const links = [
  ["about", "#about"],
  ["experience", "#experience"],
  ["projects", "#projects"],
  ["stack", "#skills"],
  ["education", "#education"],
  ["contact", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <span className="accent">~/</span>prince<span className="blink">_</span>
        </a>
        <button className="nav-toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, href], i) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span className="accent">0{i + 1}.</span>{label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
