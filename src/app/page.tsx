import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <div className="w-full max-w-[1512px] mx-auto relative flex flex-col">
      {/* Screen 1: Header + Optical Centered Hero */}
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <div className="flex-1 flex flex-col justify-center pb-16 lg:pb-28">
          <Hero />
        </div>
        {/* Invisible spacer to balance header height for optical vertical centering */}
        <div className="h-0 md:h-[24px]" aria-hidden="true" />
      </div>

      {/* Screen 2: Work Highlights Section */}
      <WorkSection />
    </div>
  );
}
