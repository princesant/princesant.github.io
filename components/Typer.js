"use client";
import { useEffect, useState } from "react";

// Types and deletes each phrase in turn, like a terminal.
export default function Typer({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let delay = deleting ? 40 : 85;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") { setDeleting(false); setI(i + 1); }
      else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="typer">
      {text}<span className="caret" aria-hidden="true">▋</span>
    </span>
  );
}
