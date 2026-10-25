"use client";

/**
 * Navigation component — centered nav links with superscript numbers.
 *
 * Exact Figma specs:
 * - Nav labels: Inter Regular (400), 16px, #1c1b19, letter-spacing -0.04em, line-height 125%
 * - Superscript numbers: JetBrains Mono Light (300), 10px, #a2a2a2, letter-spacing -0.06em, line-height 125%
 * - Baseline of labels is locked to master header baseline.
 * - Superscript numbers float above (top-aligned to frame).
 */

const navItems = [
  { label: "Work", number: "01", href: "#work" },
  { label: "About me", number: "02", href: "#about" },
  { label: "Taste in music", number: "03", href: "#music" },
  { label: "Views on politics", number: "04", href: "#politics" },
];

export default function Nav() {
  return (
    <nav className="flex items-baseline gap-[20px] md:gap-[24px] overflow-x-auto no-scrollbar">
      {navItems.map((item) => (
        <a
          key={item.number}
          href={item.href}
          className="inline-flex items-baseline relative group transition-opacity duration-200 hover:opacity-70 whitespace-nowrap"
        >
          <span
            className="font-sans text-[15px] md:text-[16px] font-normal text-[#1c1b19] leading-[1.25] tracking-[-0.04em]"
          >
            {item.label}
          </span>
          <span
            className="font-mono text-[9px] md:text-[10px] font-light text-[#a2a2a2] leading-[1] tracking-[-0.06em] ml-[1px] relative -top-[6px]"
          >
            {item.number}
          </span>
        </a>
      ))}
    </nav>
  );
}
