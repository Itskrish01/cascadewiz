import NavCard from "@/components/NavCard";
import HeroSection from "@/sections/HeroSection";
import { BoxIcon } from "lucide-react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="mt-10">
        <h4 className="font-bold text-3xl blueDark-text">CSS Tools</h4>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          <NavCard
            name="Glassmorphism"
            description="Generate cool Glassmorphism design for your own websites or web apps"
            icon={<BoxIcon className="h-14 w-14 " />}
            href="/css-glassmorphism"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
