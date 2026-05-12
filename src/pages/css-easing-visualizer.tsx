import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

interface Easing {
  name: string;
  value: string;
  /** cubic-bezier(x1, y1, x2, y2) */
  bezier?: [number, number, number, number];
  category: "Standard" | "Strong" | "Back" | "Linear";
}

const easings: Easing[] = [
  { name: "linear", value: "linear", bezier: [0, 0, 1, 1], category: "Linear" },
  { name: "ease", value: "ease", bezier: [0.25, 0.1, 0.25, 1], category: "Standard" },
  { name: "ease-in", value: "ease-in", bezier: [0.42, 0, 1, 1], category: "Standard" },
  { name: "ease-out", value: "ease-out", bezier: [0, 0, 0.58, 1], category: "Standard" },
  { name: "ease-in-out", value: "ease-in-out", bezier: [0.42, 0, 0.58, 1], category: "Standard" },
  { name: "out-quart", value: "cubic-bezier(0.25, 1, 0.5, 1)", bezier: [0.25, 1, 0.5, 1], category: "Strong" },
  { name: "out-expo", value: "cubic-bezier(0.16, 1, 0.3, 1)", bezier: [0.16, 1, 0.3, 1], category: "Strong" },
  { name: "in-out-cubic", value: "cubic-bezier(0.65, 0, 0.35, 1)", bezier: [0.65, 0, 0.35, 1], category: "Strong" },
  { name: "back-out", value: "cubic-bezier(0.34, 1.56, 0.64, 1)", bezier: [0.34, 1.56, 0.64, 1], category: "Back" },
  { name: "back-in-out", value: "cubic-bezier(0.68, -0.6, 0.32, 1.6)", bezier: [0.68, -0.6, 0.32, 1.6], category: "Back" },
];

/* Sample a cubic bezier for SVG path */
const sampleBezier = (b: [number, number, number, number]) => {
  const [x1, y1, x2, y2] = b;
  const pts: [number, number][] = [];
  for (let i = 0; i <= 60; i++) {
    const t = i / 60;
    const u = 1 - t;
    const x = 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t;
    const y = 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t;
    pts.push([x, y]);
  }
  return pts;
};

const animations = [
  {
    name: "fade-in-up",
    keyframes: `@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}`,
  },
  {
    name: "scale-pop",
    keyframes: `@keyframes scale-pop {
  0%   { transform: scale(0.8); opacity: 0; }
  60%  { transform: scale(1.04); opacity: 1; }
  100% { transform: scale(1); }
}`,
  },
  {
    name: "shake",
    keyframes: `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}`,
  },
  {
    name: "spin",
    keyframes: `@keyframes spin {
  to { transform: rotate(360deg); }
}`,
  },
];

const EasingVisualizer = () => {
  const [active, setActive] = useState<Easing>(easings[1]);
  const [duration, setDuration] = useState(900);
  const [tick, setTick] = useState(0);
  const [anim, setAnim] = useState(animations[0]);
  const [animKey, setAnimKey] = useState(0);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  // inject keyframes for chosen anim
  useEffect(() => {
    if (!styleRef.current) {
      const el = document.createElement("style");
      document.head.appendChild(el);
      styleRef.current = el;
    }
    styleRef.current.textContent = animations.map((a) => a.keyframes).join("\n");
    return () => {
      // keep until unmount
    };
  }, []);

  useEffect(() => {
    return () => {
      if (styleRef.current) {
        styleRef.current.remove();
        styleRef.current = null;
      }
    };
  }, []);

  const replay = () => {
    setTick((t) => t + 1);
    setAnimKey((k) => k + 1);
  };

  const cssOut = `.element {
  transition: transform ${duration}ms ${active.value};
}

/* keyframe + easing */
.element {
  animation: ${anim.name} ${duration}ms ${active.value} both;
}

${anim.keyframes}`;

  return (
    <>
      <Helmet>
        <title>Easing & Animation — CascadeWiz</title>
        <meta
          name="description"
          content="Compare easing curves and preview keyframe animations in real time."
        />
      </Helmet>

      <header className="border-b border-rule pb-10">
        <div className="eyebrow">G·04 ─ Visual Guide</div>
        <h1 className="font-display text-6xl md:text-7xl tracking-tight mt-3 leading-none">
          Easing &<br />
          <em className="italic text-accent">Animation</em>
        </h1>
        <p className="mt-5 max-w-2xl text-ink-soft">
          The shape of motion is everything. Compare curves, feel the
          difference, and pair them with keyframes.
        </p>
      </header>

      {/* Curve gallery */}
      <section className="mt-12">
        <div className="border-b border-rule pb-4 mb-6">
          <div className="eyebrow">01 ─ Curves</div>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mt-1">
            Pick a curve. Read its shape.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {easings.map((e) => {
            const isActive = e.name === active.name;
            const pts = e.bezier ? sampleBezier(e.bezier) : [];
            return (
              <button
                key={e.name}
                onClick={() => {
                  setActive(e);
                  setTick((t) => t + 1);
                }}
                className={`group rounded-md border text-left p-3 transition ${
                  isActive
                    ? "border-ink bg-paper-card"
                    : "border-rule bg-paper-card/60 hover:border-ink"
                }`}
              >
                <svg viewBox="0 0 1 1" className="w-full h-20 -my-1 overflow-visible">
                  {/* axes */}
                  <line x1={0} y1={1} x2={1} y2={1} stroke="rgba(20,17,15,0.15)" strokeWidth={0.01} />
                  <line x1={0} y1={0} x2={0} y2={1} stroke="rgba(20,17,15,0.15)" strokeWidth={0.01} />
                  {/* diagonal reference */}
                  <line x1={0} y1={1} x2={1} y2={0} stroke="rgba(20,17,15,0.08)" strokeDasharray="0.02 0.02" strokeWidth={0.005} />
                  {/* curve */}
                  <polyline
                    points={pts.map(([x, y]) => `${x},${1 - y}`).join(" ")}
                    fill="none"
                    stroke={isActive ? "#d8431a" : "#14110f"}
                    strokeWidth={0.025}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-mono-cw text-[11px] text-ink truncate">
                    {e.name}
                  </span>
                  <span className="font-mono-cw text-[10px] uppercase tracking-widest text-ink-muted">
                    {e.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Live preview */}
      <section className="mt-16">
        <div className="border-b border-rule pb-4 mb-6">
          <div className="eyebrow">02 ─ Preview</div>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mt-1">
            Watch it move
          </h2>
        </div>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 paper-card rounded-md p-6 relative overflow-hidden">
            {/* Translation track */}
            <div className="relative h-24 border-b border-dashed border-rule">
              <div className="absolute inset-y-0 left-0 w-px bg-rule" />
              <div className="absolute inset-y-0 right-0 w-px bg-rule" />
              <div
                key={`t-${tick}`}
                className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-md bg-ink"
                style={{
                  animation: `cw-translate ${duration}ms ${active.value} forwards`,
                }}
              />
              <style>{`
                @keyframes cw-translate {
                  from { left: 0%; }
                  to   { left: calc(100% - 48px); }
                }
              `}</style>
              <span className="absolute -top-5 left-0 font-mono-cw text-[10px] uppercase tracking-widest text-ink-muted">
                translateX
              </span>
            </div>

            {/* Keyframe player */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <span className="font-mono-cw text-[10px] uppercase tracking-widest text-ink-muted">
                  Keyframe → {anim.name}
                </span>
                <div className="flex gap-2">
                  {animations.map((a) => (
                    <button
                      key={a.name}
                      onClick={() => {
                        setAnim(a);
                        setAnimKey((k) => k + 1);
                      }}
                      className={`px-3 py-1 rounded-full font-mono-cw text-[11px] border ${
                        anim.name === a.name
                          ? "bg-ink text-paper border-ink"
                          : "border-rule text-ink-soft hover:border-ink hover:text-ink"
                      }`}
                    >
                      {a.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6 h-32 grid place-items-center bg-grid-dots rounded">
                <div
                  key={`a-${animKey}`}
                  className="w-20 h-20 bg-accent rounded-md"
                  style={{
                    animation: `${anim.name} ${duration}ms ${active.value} both`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <div className="paper-card rounded-md p-5">
              <div className="eyebrow">Active</div>
              <div className="font-display text-2xl mt-2">{active.name}</div>
              <code className="block mt-1 font-mono-cw text-xs text-ink-soft break-all">
                {active.value}
              </code>
            </div>
            <div className="paper-card rounded-md p-5">
              <div className="eyebrow">Duration · {duration}ms</div>
              <input
                type="range"
                min={150}
                max={2400}
                step={50}
                value={duration}
                onChange={(e) => setDuration(+e.target.value)}
                className="w-full accent-[#d8431a] mt-3"
              />
            </div>
            <button
              onClick={replay}
              className="w-full px-5 py-3 bg-ink text-paper rounded-full font-mono-cw uppercase tracking-widest text-xs hover:bg-accent transition-colors"
            >
              ↻ Replay
            </button>
          </div>
        </div>
      </section>

      {/* Output */}
      <section className="mt-16">
        <div className="border-b border-rule pb-4 mb-4">
          <div className="eyebrow">03 ─ Output</div>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mt-1">
            Pair, copy, ship
          </h2>
        </div>
        <div className="rounded-md overflow-hidden border border-rule">
          <CopyBlock text={cssOut} language="css" theme={dracula} showLineNumbers />
        </div>
      </section>
    </>
  );
};

export default EasingVisualizer;
