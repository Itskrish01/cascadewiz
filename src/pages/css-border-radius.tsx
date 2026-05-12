import { Helmet } from "react-helmet";
import { useMemo, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { Shuffle } from "lucide-react";

interface Corners {
  tlH: number;
  tlV: number;
  trH: number;
  trV: number;
  brH: number;
  brV: number;
  blH: number;
  blV: number;
}

const initial: Corners = {
  tlH: 60,
  tlV: 40,
  trH: 30,
  trV: 70,
  brH: 50,
  brV: 60,
  blH: 70,
  blV: 30,
};

const slider = (key: keyof Corners, label: string) => ({ key, label });

const sliders = [
  slider("tlH", "Top-Left · H"),
  slider("tlV", "Top-Left · V"),
  slider("trH", "Top-Right · H"),
  slider("trV", "Top-Right · V"),
  slider("brH", "Bottom-Right · H"),
  slider("brV", "Bottom-Right · V"),
  slider("blH", "Bottom-Left · H"),
  slider("blV", "Bottom-Left · V"),
];

const palette = ["#d8431a", "#14110f", "#2f4a37", "#bcae8e", "#f3ede1"];

const BorderRadiusStudio = () => {
  const [c, setC] = useState<Corners>(initial);
  const [color, setColor] = useState("#14110f");
  const [size, setSize] = useState(280);

  const radius = useMemo(
    () =>
      `${c.tlH}% ${c.trH}% ${c.brH}% ${c.blH}% / ${c.tlV}% ${c.trV}% ${c.brV}% ${c.blV}%`,
    [c]
  );

  const css = `.blob {
  width: ${size}px;
  aspect-ratio: 1;
  background: ${color};
  border-radius: ${radius};
}`;

  const randomize = () => {
    const r = () => Math.round(20 + Math.random() * 70);
    setC({
      tlH: r(),
      tlV: r(),
      trH: r(),
      trV: r(),
      brH: r(),
      brV: r(),
      blH: r(),
      blV: r(),
    });
  };

  const reset = () => setC(initial);

  return (
    <>
      <Helmet>
        <title>Border Radius Studio — CascadeWiz</title>
        <meta
          name="description"
          content="Sculpt eight-corner organic CSS shapes with full control over horizontal and vertical radii."
        />
      </Helmet>

      <header className="border-b border-rule pb-10">
        <div className="eyebrow">T·06 ─ Studio</div>
        <h1 className="font-display text-6xl md:text-7xl tracking-tight mt-3 leading-none">
          Border <em className="italic text-accent">Radius</em>
        </h1>
        <p className="mt-5 max-w-2xl text-ink-soft">
          Eight handles. Two per corner. Sculpt anything from a soft pebble to a
          fully organic blob — and copy the modern dual-radius syntax.
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-8 mt-10">
        {/* Canvas */}
        <div className="lg:col-span-7">
          <div className="paper-card rounded-md p-10 grid place-items-center bg-grid-dots">
            <div
              className="transition-all duration-300"
              style={{
                width: size,
                height: size,
                background: color,
                borderRadius: radius,
                boxShadow: "0 30px 60px -30px rgba(20,17,15,0.5)",
              }}
            />
          </div>

          {/* Quick actions */}
          <div className="mt-4 flex flex-wrap gap-3 items-center">
            <button
              onClick={randomize}
              className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-paper rounded-full font-mono-cw uppercase tracking-widest text-xs hover:bg-accent transition-colors"
            >
              <Shuffle className="w-3.5 h-3.5" /> Randomize
            </button>
            <button
              onClick={reset}
              className="px-4 py-2 border border-ink rounded-full font-mono-cw uppercase tracking-widest text-xs hover:bg-ink hover:text-paper transition-colors"
            >
              Reset
            </button>
            <div className="ml-auto flex items-center gap-2">
              {palette.map((p) => (
                <button
                  key={p}
                  onClick={() => setColor(p)}
                  aria-label={p}
                  className={`w-7 h-7 rounded-full border ${
                    color === p ? "border-ink ring-2 ring-ink/20" : "border-rule"
                  }`}
                  style={{ background: p }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div className="paper-card rounded-md p-5">
            <div className="eyebrow mb-3">Size · {size}px</div>
            <input
              type="range"
              min={120}
              max={420}
              value={size}
              onChange={(e) => setSize(+e.target.value)}
              className="w-full accent-[#d8431a]"
            />
          </div>

          <div className="paper-card rounded-md p-5">
            <div className="eyebrow mb-4">Eight handles</div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {sliders.map((s) => (
                <div key={s.key}>
                  <label className="font-mono-cw text-[11px] uppercase tracking-widest text-ink-soft flex items-center justify-between">
                    <span>{s.label}</span>
                    <span className="text-ink">{c[s.key]}%</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={c[s.key]}
                    onChange={(e) =>
                      setC((prev) => ({ ...prev, [s.key]: +e.target.value }))
                    }
                    className="w-full accent-[#d8431a] mt-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <div className="border-b border-rule pb-4 mb-4">
          <div className="eyebrow">Output</div>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mt-1">
            Modern dual-radius syntax
          </h2>
        </div>
        <div className="rounded-md overflow-hidden border border-rule">
          <CopyBlock text={css} language="css" theme={dracula} showLineNumbers />
        </div>
        <p className="mt-5 max-w-2xl text-sm text-ink-soft leading-relaxed">
          The <span className="font-mono-cw">/</span> separates horizontal radii
          (left of slash) from vertical radii (right). The four values cycle
          top-left → top-right → bottom-right → bottom-left, like every other
          CSS box property.
        </p>
      </section>
    </>
  );
};

export default BorderRadiusStudio;
