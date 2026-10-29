"use client";
import { useEffect, useRef, useState } from "react";

// Shows photo.jpg from /public. If it's missing, falls back to initials.
export default function Photo({ src, name }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);
  const initials = name.split(" ").map((w) => w[0]).join("");

  // The image can fail before React loads, so check once on mount too.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className="photo">
      {failed ? (
        <span className="photo-initials" aria-label={name}>{initials}</span>
      ) : (
        <img ref={ref} src={src} alt={name} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
