import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full max-w-[1512px] min-h-screen mx-auto relative flex flex-col justify-between">
      <Header />
      <div className="flex-1 flex flex-col justify-center pb-16 lg:pb-28">
        <Hero />
      </div>
      {/* Invisible spacer to balance header height for optical vertical centering */}
      <div className="h-0 md:h-[48px]" aria-hidden="true" />
    </div>
  );
}
