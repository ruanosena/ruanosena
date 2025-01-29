import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative overflow-hidden bg-white dark:bg-black">
      <div className="mx-auto w-full max-w-7xl p-5">
        <Navbar />
        <HeroSection />
      </div>
      <div className="absolute -bottom-5 left-0 h-10 w-full bg-gradient-to-t from-black xl:bottom-0 xl:h-20"></div>
    </div>
  );
}
