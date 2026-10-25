import Logo from "./Logo";
import Nav from "./Nav";
import SoundToggle from "./SoundToggle";

/**
 * Header component — logo (left), nav (center), sound toggle (right).
 *
 * Exact Desktop alignment (MacBook Pro 14" in Figma):
 * - Canvas width: 1512px
 * - Master baseline at y = 71px
 * - Logo text, Nav labels, and SoundToggle text share the EXACT SAME baseline.
 * - Nav is centered horizontally between left and right margins (120px).
 */
export default function Header() {
  return (
    <header className="w-full relative z-20">
      {/* Desktop view (>= 1024px): 3-column baseline-locked grid */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-baseline px-8 xl:px-[120px] pt-[48px]">
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

      {/* Mobile & Tablet view (< 1024px): mobile-first responsive layout */}
      <div className="flex lg:hidden flex-col gap-4 px-6 pt-6">
        <div className="flex items-center justify-between w-full">
          <Logo />
          <SoundToggle />
        </div>
        <div className="flex justify-center w-full pt-1">
          <Nav />
        </div>
      </div>
    </header>
  );
}
