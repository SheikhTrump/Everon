export default function BrandLogo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  const isLarge = size === "large";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Architectural Abstract "E" Mark (Overlapping structural pillars & cantilevers) */}
      <div className={`relative flex items-center justify-center flex-shrink-0 ${isLarge ? "w-8 h-9" : "w-7 h-8"}`}>
        <svg
          viewBox="0 0 32 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-gold"
        >
          {/* Primary vertical pylon */}
          <rect x="2" y="2" width="5" height="34" fill="currentColor" />
          
          {/* Parallel setback vertical column evoking building elevation */}
          <rect x="10" y="7" width="4" height="29" fill="currentColor" opacity="0.6" />
          
          {/* Top structural cantilever beam */}
          <rect x="2" y="2" width="28" height="4.5" fill="currentColor" />
          
          {/* Mid cantilever beam */}
          <rect x="2" y="17" width="20" height="4" fill="currentColor" />
          
          {/* Base cantilever beam / podium */}
          <rect x="2" y="31.5" width="28" height="4.5" fill="currentColor" />
          
          {/* Geometric crown accent */}
          <path d="M26 2L30 6H26V2Z" fill="currentColor" opacity="0.9" />
        </svg>
      </div>

      {/* Monumental Wordmark */}
      <span
        className={`font-display font-bold text-base tracking-[0.18em] uppercase ${
          isLarge ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
        }`}
        style={{ letterSpacing: "0.18em" }}
      >
        EVERON
      </span>
    </div>
  );
}
