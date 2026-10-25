"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import SoundToggle from "./SoundToggle";

/**
 * Smart Sticky Header matching Figma screen 68:609 & node 75:1102:
 *
 * Behavior:
 * - At top of page: seamless transparent background, no bottom border.
 * - Scrolling down: smoothly hides out of view (-translate-y-full).
 * - Scrolling up even slightly: smoothly slides back down (translate-y-0).
 *   - Shows frosted background: #faf7ef with subtle backdrop-blur.
 *   - Shows bottom separator: border-b 1px solid #dfdbd0 (exact Figma stroke).
 * - Height: 84px on desktop (pt-24px + 36px logo + pb-24px), matching Rectangle 4 in Figma.
 */
export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;

      // Check if we are past the hero top threshold
      if (currentScrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scrolling down -> hide header (with threshold to avoid micro-jitter)
      if (deltaY > 8 && currentScrollY > 84) {
        setIsVisible(false);
      }
      // Scrolling up a little bit -> show header
      else if (deltaY < -6) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          hasScrolled
            ? "bg-[#faf7ef]/92 backdrop-blur-md border-b border-[#dfdbd0]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-[1512px] mx-auto">
          {/* Desktop view (>= 1024px): 3-column baseline-locked grid (exact 84px height) */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-baseline px-8 xl:px-[120px] pt-[24px] pb-[24px]">
            <div className="justify-self-start">
              <Logo />
            </div>
            <div className="justify-self-center">
              <Nav />
            </div>
            <div className="justify-self-end">
              <SoundToggle />
            </div>
          </div>

          {/* Mobile & Tablet view (< 1024px) */}
          <div className="flex lg:hidden flex-col gap-3 px-6 pt-4 pb-4">
            <div className="flex items-center justify-between w-full">
              <Logo />
              <SoundToggle />
            </div>
            <div className="flex justify-center w-full pt-1">
              <Nav />
            </div>
          </div>
        </div>
      </header>

      {/* Ghost spacer to keep natural document flow and optical center */}
      <div className="h-[84px] hidden lg:block shrink-0" aria-hidden="true" />
      <div className="h-[96px] block lg:hidden shrink-0" aria-hidden="true" />
    </>
  );
}
