"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.8,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handlePause = () => lenis.stop();
    const handleResume = () => lenis.start();

    window.addEventListener("everon:modal-open", handlePause);
    window.addEventListener("everon:modal-close", handleResume);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("everon:modal-open", handlePause);
      window.removeEventListener("everon:modal-close", handleResume);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
