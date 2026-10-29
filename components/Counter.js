"use client";
import { useEffect, useRef, useState } from "react";

// Counts up to the number in `value` (keeps any suffix like "+") when visible.
export default function Counter({ value }) {
  const target = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "");
  const [n, setN] = useState(target);
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / 1400, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  return <strong ref={ref}>{n}{suffix}</strong>;
}
