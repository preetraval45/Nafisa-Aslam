"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/lib/data";

export default function Metrics() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCounts(metrics.map((m) => Math.round(m.num * eased)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div className="metrics" ref={ref}>
      {metrics.map((m, i) => (
        <div className="metric" key={m.label}>
          <span className="metric__num">
            {counts[i]}
            {m.suffix}
          </span>
          <p>{m.label}</p>
        </div>
      ))}
    </div>
  );
}
