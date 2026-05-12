import NavCard from "@/components/NavCard";
import HeroSection from "@/sections/HeroSection";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Helmet } from "react-helmet";

/* ──────────── Tile previews — pure CSS, monochrome ──────────── */

const GlassPreview = () => (
  <div className="relative w-32 h-24 bg-ink overflow-hidden">
    <div className="absolute inset-2 bg-paper" />
    <div className="absolute inset-5 bg-ink/80" />
    <div className="absolute inset-x-3 inset-y-7 bg-paper/70 backdrop-blur-md" />
  </div>
);

const GlitchPreview = () => (
  <div className="relative font-display italic text-5xl">
    <span className="absolute -translate-x-[3px] -translate-y-[1px] text-ink-muted">
      Aa
    </span>
    <span className="absolute translate-x-[3px] translate-y-[1px] text-ink-soft">
      Aa
    </span>
    <span className="relative text-ink">Aa</span>
  </div>
);

const ShadowPreview = () => (
  <div className="relative w-20 h-20 bg-paper border border-ink shadow-[10px_12px_0_#0a0a0a]" />
);

const ShadesPreview = () => (
  <div className="flex">
    {[15, 30, 45, 60, 75, 90].map((l) => (
      <div
        key={l}
        className="w-5 h-16"
        style={{ background: `hsl(0 0% ${l}%)` }}
      />
    ))}
  </div>
);

const GradientPreview = () => (
  <div className="w-32 h-24 bg-gradient-to-br from-ink via-ink-muted to-paper" />
);

const RadiusPreview = () => (
  <div className="grid grid-cols-3 gap-1.5">
    {[
      "0",
      "4px",
      "9999px",
      "30% 70% 70% 30%",
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "20% 80%",
    ].map((r) => (
      <div
        key={r}
        className="w-7 h-7 bg-ink"
        style={{ borderRadius: r }}
      />
    ))}
  </div>
);

const TypeScalePreview = () => (
  <div className="font-display leading-none flex items-end gap-1">
    <span className="text-xs">Aa</span>
    <span className="text-base">Aa</span>
    <span className="text-2xl">Aa</span>
    <span className="text-4xl">Aa</span>
    <span className="text-6xl">Aa</span>
  </div>
);

const ClampPreview = () => (
  <div className="font-mono-cw text-xs flex flex-col items-center gap-1">
    <span className="text-ink-muted">min</span>
    <span className="text-2xl text-ink">clamp()</span>
    <span className="text-ink-muted">max</span>
  </div>
);

const FilterPreview = () => (
  <div className="grid grid-cols-3 gap-1.5">
    {["", "blur(2px)", "contrast(2)", "invert(1)", "grayscale(1) blur(1px)", "sepia(1) contrast(1.5)"].map(
      (f, i) => (
        <div
          key={i}
          className="w-7 h-7 bg-ink"
          style={{ filter: f }}
        />
      )
    )}
  </div>
);

const TransformPreview = () => (
  <div className="grid grid-cols-3 gap-1.5">
    {[
      "rotate(15deg)",
      "skewX(15deg)",
      "scale(0.8)",
      "rotate(-15deg)",
      "skewY(10deg)",
      "scale(1.1) rotate(5deg)",
    ].map((t, i) => (
      <div
        key={i}
        className="w-7 h-7 bg-ink"
        style={{ transform: t }}
      />
    ))}
  </div>
);

const FlexPreview = () => (
  <div className="flex gap-2 items-end">
    <div className="w-5 h-8 bg-ink" />
    <div className="w-5 h-12 bg-ink" />
    <div className="w-5 h-6 bg-ink-muted" />
    <div className="w-5 h-10 bg-ink" />
  </div>
);

const GridPreview = () => (
  <div className="grid grid-cols-3 grid-rows-3 gap-1.5 w-24 h-24">
    <div className="bg-ink col-span-2" />
    <div className="bg-paper border border-ink" />
    <div className="bg-paper border border-ink" />
    <div className="bg-ink" />
    <div className="bg-paper border border-ink" />
    <div className="bg-paper border border-ink col-span-3" />
  </div>
);

const CursorPreview = () => (
  <div className="text-5xl rotate-12">↖</div>
);

const EasingPreview = () => (
  <svg viewBox="0 0 100 60" className="w-32 h-20">
    <path
      d="M0,55 C 30,55 30,5 50,5 S 70,55 100,55"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-ink"
    />
    <circle cx="50" cy="5" r="3" className="fill-ink" />
  </svg>
);

const SelectorPreview = () => (
  <div className="font-mono-cw text-sm leading-tight text-center">
    <div>div.btn</div>
    <div className="text-ink-muted">a:hover</div>
    <div className="font-bold">#hero {">"} *</div>
  </div>
);

const Home = () => {
  const toolRef = useRef<HTMLDivElement>(null);
  const handleClick = () =>
    toolRef.current?.scrollIntoView({ behavior: "smooth" });

  const tools = [
    {
      name: "Glassmorphism",
      description:
        "Layered glass surfaces — blur, opacity, and tint, dialed in.",
      href: "/css-glassmorphism",
      preview: <GlassPreview />,
    },
    {
      name: "Glitch Text",
      description:
        "Broken-signal type built from offset color channels and clip-path.",
      href: "/css-glitch-text-effect",
      preview: <GlitchPreview />,
    },
    {
      name: "Box Shadow",
      description:
        "Stack shadows like a designer — multiple layers, fine-grain control.",
      href: "/css-box-shadow",
      preview: <ShadowPreview />,
    },
    {
      name: "Color Shades",
      description:
        "Build a tonal scale from a single hue, ready for design tokens.",
      href: "/color-shades-generator",
      preview: <ShadesPreview />,
    },
    {
      name: "Gradient Studio",
      description:
        "Multi-stop linear, radial and conic gradients with copy-ready output.",
      href: "/css-gradient-generator",
      preview: <GradientPreview />,
    },
    {
      name: "Border Radius",
      description:
        "Sculpt eight-corner organic shapes — from soft pebbles to blobs.",
      href: "/css-border-radius",
      preview: <RadiusPreview />,
    },
    {
      name: "Type Scale",
      description:
        "Build a modular typographic scale with previews and CSS variables.",
      href: "/css-type-scale",
      preview: <TypeScalePreview />,
    },
    {
      name: "Clamp Calculator",
      description:
        "Fluid typography & spacing with clamp(min, preferred, max).",
      href: "/css-clamp-calculator",
      preview: <ClampPreview />,
    },
    {
      name: "Filter Lab",
      description:
        "Stack blur, contrast, hue-rotate and friends. Live preview, copy CSS.",
      href: "/css-filter-lab",
      preview: <FilterPreview />,
    },
    {
      name: "Transform Lab",
      description:
        "Translate, rotate, scale, skew and perspective — composed visually.",
      href: "/css-transform-lab",
      preview: <TransformPreview />,
    },
  ];

  const guides = [
    {
      name: "Flexbox",
      description:
        "Each property, demonstrated. Direction, alignment, distribution.",
      href: "/css-flexbox-guide",
      preview: <FlexPreview />,
    },
    {
      name: "Grid",
      description:
        "Tracks, areas, and lines. Two-dimensional layout, drawn out.",
      href: "/css-grid-guide",
      preview: <GridPreview />,
    },
    {
      name: "Cursors",
      description: "Every cursor keyword, hoverable. Pick the right affordance.",
      href: "/css-cursor-guide",
      preview: <CursorPreview />,
    },
    {
      name: "Easing & Animation",
      description:
        "Compare easing curves and feel the difference. Author keyframes live.",
      href: "/css-easing-visualizer",
      preview: <EasingPreview />,
    },
    {
      name: "Selectors & Specificity",
      description:
        "Read selectors, count specificity, and stop guessing what wins.",
      href: "/css-selectors",
      preview: <SelectorPreview />,
    },
  ];

  return (
    <>
      <Helmet>
        <meta property="og:title" content="CascadeWiz — Learn & ship CSS" />
        <meta
          property="og:description"
          content="Interactive tools and visual guides for learning CSS, from layout to typography to motion."
        />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:site_name" content="cascadeWiz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CascadeWiz" />
        <meta
          name="twitter:description"
          content="Interactive tools and visual guides for learning CSS."
        />
        <title>CascadeWiz — The simplest way to learn & ship CSS.</title>
      </Helmet>

      <HeroSection handleClick={handleClick} />

      {/* Tools section */}
      <section ref={toolRef} className="pt-24">
        <div className="flex items-end justify-between gap-6 border-b border-ink pb-6 mb-10">
          <div>
            <div className="eyebrow">01 — Studio</div>
            <h2 className="font-display text-5xl lg:text-6xl tracking-tight mt-3">
              Tools.
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm text-ink-soft">
            Tactile generators with live previews. Tweak inputs, copy CSS, ship.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t, i) => (
            <NavCard
              key={t.href}
              {...t}
              index={`T·${String(i + 1).padStart(2, "0")}`}
              category="Tool"
            />
          ))}
        </div>
      </section>

      {/* Guides section */}
      <section className="pt-24">
        <div className="flex items-end justify-between gap-6 border-b border-ink pb-6 mb-10">
          <div>
            <div className="eyebrow">02 — Library</div>
            <h2 className="font-display text-5xl lg:text-6xl tracking-tight mt-3">
              Guides.
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm text-ink-soft">
            Concepts you can poke. Every property is a button, every value a
            visible result.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((g, i) => (
            <NavCard
              key={g.href}
              {...g}
              index={`G·${String(i + 1).padStart(2, "0")}`}
              category="Guide"
            />
          ))}
        </div>
      </section>

      {/* Topics ticker — kept simple, monochrome */}
      <section className="pt-24">
        <div className="border-y border-ink py-6 overflow-hidden">
          <div className="flex whitespace-nowrap animate-ticker font-display text-2xl gap-10">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex items-center gap-10 pr-10">
                {[
                  "@layer",
                  "container queries",
                  ":has()",
                  "subgrid",
                  "color-mix()",
                  "view-transition",
                  "anchor positioning",
                  "logical properties",
                  "clamp()",
                  "scroll-driven animations",
                  "@scope",
                  "nesting",
                ].map((w) => (
                  <span key={w} className="flex items-center gap-10">
                    <span className="text-ink-muted">/</span>
                    <span className="font-mono-cw text-sm text-ink">{w}</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="manifesto" className="pt-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="eyebrow">03 — Principles</div>
            <h2 className="font-display text-5xl lg:text-6xl tracking-tight mt-4 leading-none">
              Less surface,
              <br />
              more <em className="italic">substance</em>.
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {[
              [
                "01",
                "Show the result.",
                "Specifications explain. We demonstrate first, then explain.",
              ],
              [
                "02",
                "One control, one effect.",
                "Each input changes one visible thing. No magic. No hidden state.",
              ],
              [
                "03",
                "Read the output.",
                "Every tool emits real CSS you can paste and own. Nothing is opaque.",
              ],
              [
                "04",
                "Calm by default.",
                "Black, white, and the cascade. Nothing competes with the work.",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="border-t border-ink pt-5">
                <div className="font-mono-cw text-xs uppercase tracking-widest text-ink-muted">
                  {n}
                </div>
                <h3 className="font-display text-2xl mt-2">{t}</h3>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-24">
        <div className="relative overflow-hidden border border-ink bg-ink text-paper p-10 lg:p-16">
          <div className="absolute inset-0 bg-grid-lines opacity-[0.06]" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="font-mono-cw text-xs uppercase tracking-widest text-paper/60">
                ⌘ — Pick a starting point
              </div>
              <h2 className="font-display text-5xl lg:text-7xl tracking-tight mt-4 leading-none">
                Open a tool.
                <br />
                <em className="italic">Drag a slider.</em>
                <br />
                Learn a property.
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/css-grid-guide"
                className="px-5 py-3 bg-paper text-ink font-mono-cw uppercase tracking-widest text-xs hover:bg-ink hover:text-paper hover:border hover:border-paper transition-colors border border-paper"
              >
                Start with Grid →
              </Link>
              <Link
                to="/css-gradient-generator"
                className="px-5 py-3 border border-paper font-mono-cw uppercase tracking-widest text-xs hover:bg-paper hover:text-ink transition-colors"
              >
                Open Studio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
