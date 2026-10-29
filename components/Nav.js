"use client";
import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Nav({ name }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">{name}</a>
        <button className="nav-toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
