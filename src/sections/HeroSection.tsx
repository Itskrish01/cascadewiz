import { Link } from "react-router-dom";

const HeroSection = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-rule">
      {/* Eyebrow status bar */}
      <div className="flex items-center justify-between font-mono-cw text-[11px] uppercase tracking-widest text-ink-muted mb-12">
        <div className="flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 bg-ink animate-pulse" />
          <span>v3.0 — Now in monochrome</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span>15 modules · 100% free · open source</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-9">
          <h1 className="font-display tracking-tighter leading-[0.92] text-[14vw] lg:text-[136px] rise">
            <span className="block">The simplest way</span>
            <span className="block">
              to <em className="italic font-light">learn</em>{" "}
              <span className="text-ink-muted font-light">&amp;</span>{" "}
              <em className="italic font-light">ship</em> CSS.
            </span>
          </h1>
        </div>
        <div className="lg:col-span-3">
          <p className="text-base lg:text-[17px] leading-relaxed text-ink-soft border-l border-ink pl-5">
            Interactive tools for designers. Visual guides for developers.
            Black, white, and to the point.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={handleClick}
              className="group relative inline-flex items-center gap-3 px-5 py-3 bg-ink text-paper overflow-hidden"
            >
              <span className="absolute inset-0 bg-paper translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 border border-ink opacity-0 group-hover:opacity-100" />
              <span className="relative font-mono-cw uppercase tracking-widest text-xs group-hover:text-ink transition-colors">
                Browse modules
              </span>
              <span className="relative group-hover:text-ink transition-colors">
                →
              </span>
            </button>
            <Link
              to="/css-grid-guide"
              className="inline-flex items-center gap-2 px-5 py-3 border border-ink font-mono-cw uppercase tracking-widest text-xs hover:bg-ink hover:text-paper transition-colors"
            >
              Start with Grid
            </Link>
          </div>
        </div>
      </div>

      {/* Stats strip — sharp grid, no radius */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border border-ink divide-x divide-ink">
        {[
          ["10", "Interactive tools"],
          ["5", "Visual guides"],
          ["100%", "Hand-written CSS"],
          ["0", "Frameworks taught"],
        ].map(([k, v], i) => (
          <div key={v} className={`p-6 ${i > 1 ? "border-t md:border-t-0 border-ink" : ""}`}>
            <div className="font-display text-5xl tracking-tighter leading-none">
              {k}
            </div>
            <div className="eyebrow mt-3">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
