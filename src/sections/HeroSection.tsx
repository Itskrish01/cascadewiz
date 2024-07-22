const HeroSection = () => {
  return (
    <div className="relative isolate px-6 py-10 lg:px-8">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto max-w-2xl  sm:py-14 lg:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight blueDark-text sm:text-6xl">
            Allow yourself to design better with{" "}
            <span className="text-orange-500">CascadeWiz</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Unleash Your Imagination with CascadeWiz, and Build amazing css
            designs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-orange-50 border-2 border-orange-500 text-orange-600 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-orange-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">
                Explore Tools
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
