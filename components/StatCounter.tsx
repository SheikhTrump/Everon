"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  index?: number;
  caption?: string;
}

export default function StatCounter({
  value,
  suffix,
  label,
  index = 0,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const startTime = performance.now();
    const isDecimal = value % 1 !== 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = eased * value;

      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, index * 150);

    return () => clearTimeout(timeout);
  }, [isInView, value, index]);

  return (
    <div ref={ref} className="text-left pt-6 sm:pt-8 border-t border-ink/15">
      <div className="font-mono text-[11px] text-gold tracking-widest uppercase mb-3">
        INDEX 0{index + 1}
      </div>
      <div className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ink font-medium tracking-tight leading-none mb-3">
        {count}
        <span className="text-gold font-normal font-serif italic text-3xl sm:text-4xl lg:text-5xl ml-1">
          {suffix}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-slate uppercase tracking-[0.1em] font-mono leading-relaxed">
        {label}
      </p>
    </div>
  );
}
