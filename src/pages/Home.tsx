import NavCard from "@/components/NavCard";
import HeroSection from "@/sections/HeroSection";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import { BoxesIcon, BoxIcon, BoxSelect, BringToFront } from "lucide-react";
import { useRef } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const toolRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    toolRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <meta property="og:title" content="CascadeWiz" />
        <meta
          property="og:description"
          content=" Unleash Your Imagination with CascadeWiz, and Build amazing css
  designs."
        />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:site_name" content="cascadeWiz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CascadeWiz" />
        <meta
          name="twitter:description"
          content="Unleash Your Imagination with CascadeWiz, and Build amazing css
  designs."
        />
        <meta name="twitter:image" content="/preview.png" />
        <meta name="twitter:url" content="https://cascadwiz.netlify.app/" />
        <title>CascadeWiz</title>
      </Helmet>
      <HeroSection handleClick={handleClick} />
      <div className="mt-20" ref={toolRef}>
        <h4 className="font-bold text-3xl blueDark-text">CSS Tools</h4>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          <NavCard
            name="Glassmorphism"
            description="Generate cool Glassmorphism design for your own websites or web apps"
            icon={<BoxIcon className="h-14 w-14 " />}
            href="/css-glassmorphism"
          />
          <NavCard
            name="Glitch Text Effect"
            description="Generate a very cool glitch text effect with HTML and CSS"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 125"
                enable-background="new 0 0 100 100"
                xmlSpace="preserve"
                className="h-14 w-14"
              >
                <g>
                  <path
                    fill="#4b5563 "
                    d="M74.493,78.351H17.575V57.245l8.984-2.36l-16.244-2.368l12.346-4.902L4.954,44.371l15.619-6.755V21.649   h56.918V39.66l-8.182,2.898l17.895,4.211L76.458,50.7L95,52.825l-20.507,6.666V78.351z M20.573,75.353h50.923v-18.04l9.47-3.08   l-17.431-1.997l13.236-4.843l-18.078-4.252l15.801-5.6V24.647H23.571v14.939l-8.362,3.617l18.264,3.345l-11.635,4.621l19.728,2.875   l-20.993,5.515V75.353z"
                  />
                </g>
              </svg>
            }
            href="/css-glitch-text-effect"
          />
          <NavCard
            name="Box Shadow"
            description="Generate cool box shadow effects for your own websites or web apps"
            icon={<BoxSelect className="h-14 w-14 " />}
            href="/css-box-shadow"
          />
          <NavCard
            name="Color Shades Generator"
            description="Generate color shades from one color easily with this tool"
            icon={<BringToFront className="h-14 w-14 " />}
            href="/color-shades-generator"
          />
        </div>
      </div>
      <div className="mt-20">
        <h4 className="font-bold text-3xl blueDark-text">CSS Guide</h4>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          <NavCard
            name="Flex Box Guide"
            description="Learn how flex box works with its different properties, visually."
            icon={<BoxesIcon className="h-14 w-14 " />}
            href="/css-flexbox-guide"
          />

          <NavCard
            name="Cursor Guide"
            description="Learn how to use different cursor types in CSS"
            icon={<CursorArrowRaysIcon className="h-14 w-14 " />}
            href="/css-cursor-guide"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
