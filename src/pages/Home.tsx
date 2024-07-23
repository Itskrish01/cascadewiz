import NavCard from "@/components/NavCard";
import HeroSection from "@/sections/HeroSection";
import { BoxesIcon, BoxIcon } from "lucide-react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="mt-20" id="tools">
        <h4 className="font-bold text-3xl blueDark-text">CSS Tools</h4>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          <NavCard
            name="Glassmorphism"
            description="Generate cool Glassmorphism design for your own websites or web apps"
            icon={<BoxIcon className="h-14 w-14 " />}
            href="/css-glassmorphism"
          />
          <NavCard
            name="Flex Box Guide"
            description="Learn how flex box works with its different properties, visually."
            icon={<BoxesIcon className="h-14 w-14 " />}
            href="/css-flexbox-guide"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
