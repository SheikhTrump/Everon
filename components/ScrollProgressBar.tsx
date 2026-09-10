"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-gold/60 via-gold to-[#f0deb4] origin-left z-[999] pointer-events-none shadow-[0_0_8px_rgba(201,166,107,0.5)]"
      style={{ scaleX }}
    />
  );
}
