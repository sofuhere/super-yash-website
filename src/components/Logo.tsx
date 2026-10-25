import CricketBall from "./CricketBall";

/**
 * Logo component — cricket ball icon + "Yash." text.
 *
 * Exact Figma specs (Frame 6):
 * - Frame 6: y=48, h=36
 * - Ball: 36x36 (from y=48 to y=84)
 * - "Yash." text: Work Sans Medium (500), 20px, #1c1b19, letter-spacing -0.02em, line-height 125%
 * - Aligned to header baseline (y=71px)
 */
export default function Logo() {
  return (
    <a
      href="/"
      className="inline-flex items-baseline gap-[10px] select-none group"
      aria-label="Yash Portfolio Home"
    >
      <span className="inline-block relative top-[13px] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105 active:scale-95">
        <CricketBall size={36} variant="logo" />
      </span>
      <span
        className="font-logo text-[20px] font-medium text-[#1c1b19] leading-[1.25] tracking-[-0.02em]"
      >
        Yash.
      </span>
    </a>
  );
}
