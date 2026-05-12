import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { CopyBlock, dracula } from "react-code-blocks";

type Filter = {
  key: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  default: number;
  initial: number;
};

const FILTERS: Filter[] = [
  { key: "blur", label: "Blur", unit: "px", min: 0, max: 30, step: 0.1, default: 0, initial: 0 },
  { key: "brightness", label: "Brightness", unit: "", min: 0, max: 3, step: 0.01, default: 1, initial: 1 },
  { key: "contrast", label: "Contrast", unit: "", min: 0, max: 3, step: 0.01, default: 1, initial: 1 },
  { key: "grayscale", label: "Grayscale", unit: "", min: 0, max: 1, step: 0.01, default: 0, initial: 0 },
  { key: "hue-rotate", label: "Hue rotate", unit: "deg", min: 0, max: 360, step: 1, default: 0, initial: 0 },
  { key: "invert", label: "Invert", unit: "", min: 0, max: 1, step: 0.01, default: 0, initial: 0 },
  { key: "saturate", label: "Saturate", unit: "", min: 0, max: 3, step: 0.01, default: 1, initial: 1 },
  { key: "sepia", label: "Sepia", unit: "", min: 0, max: 1, step: 0.01, default: 0, initial: 0 },
  { key: "opacity", label: "Opacity", unit: "", min: 0, max: 1, step: 0.01, default: 1, initial: 1 },
];

const presets = [
  { name: "Reset", values: Object.fromEntries(FILTERS.map((f) => [f.key, f.default])) },
  { name: "Vintage", values: { blur: 0, brightness: 1.1, contrast: 0.9, grayscale: 0, "hue-rotate": 0, invert: 0, saturate: 1.2, sepia: 0.6, opacity: 1 } },
  { name: "Noir", values: { blur: 0, brightness: 1, contrast: 1.4, grayscale: 1, "hue-rotate": 0, invert: 0, saturate: 0, sepia: 0, opacity: 1 } },
  { name: "Soft Dream", values: { blur: 1.4, brightness: 1.1, contrast: 0.9, grayscale: 0, "hue-rotate": 0, invert: 0, saturate: 1.2, sepia: 0, opacity: 1 } },
  { name: "Inverted", values: { blur: 0, brightness: 1, contrast: 1, grayscale: 0, "hue-rotate": 180, invert: 1, saturate: 1, sepia: 0, opacity: 1 } },
];

export default function FilterLab() {
  const [vals, setVals] = useState<Record<string, number>>(
    Object.fromEntries(FILTERS.map((f) => [f.key, f.initial]))
  );

  const filterStr = useMemo(
    () =>
      FILTERS.filter((f) => vals[f.key] !== f.default)
        .map((f) => `${f.key}(${vals[f.key]}${f.unit})`)
        .join(" ") || "none",
    [vals]
  );

  const css = `.element {\n  filter: ${filterStr};\n}`;

  return (
    <>
      <Helmet>
        <title>Filter Lab — CascadeWiz</title>
      </Helmet>
      <section className="pt-12 pb-6 border-b border-rule">
        <div className="eyebrow">Tool · T·09</div>
        <h1 className="font-display text-6xl lg:text-7xl tracking-tight mt-3">
          Filter <em className="italic">Lab</em>.
        </h1>
        <p className="text-ink-soft max-w-xl mt-4">
          Stack the filter functions live. Watch a still life respond, then
          take the CSS with you.
        </p>
      </section>

      <div className="grid lg:grid-cols-12 gap-10 pt-12">
        <main className="lg:col-span-7 space-y-8 lg:order-2">
          <div className="paper-card overflow-hidden">
            <div className="aspect-[4/3] relative bg-paper-deep grid place-items-center overflow-hidden">
              <div
                className="absolute inset-0 bg-grid-dots opacity-30"
                style={{ filter: filterStr }}
              />
              <div
                className="relative grid grid-cols-3 gap-3 p-10"
                style={{ filter: filterStr }}
              >
                {[
                  "#0a0a0a",
                  "#525252",
                  "#a3a3a3",
                  "#2a2a2a",
                  "#737373",
                  "#d4d4d4",
                  "#171717",
                  "#404040",
                  "#e5e5e5",
                ].map((c, i) => (
                  <div
                    key={i}
                    className="w-20 h-20"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div
                className="absolute inset-0 grid place-items-center pointer-events-none font-display italic text-7xl"
                style={{ filter: filterStr, mixBlendMode: "difference", color: "#fff" }}
              >
                cascade
              </div>
            </div>
            <div className="border-t border-rule px-5 py-3 font-mono-cw text-xs text-ink-muted overflow-x-auto whitespace-nowrap">
              filter: {filterStr};
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p.name}
                onClick={() =>
                  setVals((v) => ({ ...v, ...(p.values as Record<string, number>) }))
                }
                className="px-3 py-1.5 border border-ink font-mono-cw text-[10px] uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors"
              >
                {p.name}
              </button>
            ))}
          </div>

          <div>
            <div className="eyebrow mb-3">Output · CSS</div>
            <CopyBlock
              text={css}
              language="css"
              theme={dracula}
              showLineNumbers
              wrapLongLines
            />
          </div>
        </main>

        <aside className="lg:col-span-5 space-y-3 lg:order-1">
          {FILTERS.map((f) => (
            <div key={f.key} className="paper-card p-4">
              <div className="flex items-center justify-between">
                <div className="eyebrow">{f.label}</div>
                <span className="font-mono-cw text-xs">
                  {vals[f.key]}
                  {f.unit}
                </span>
              </div>
              <input
                type="range"
                min={f.min}
                max={f.max}
                step={f.step}
                value={vals[f.key]}
                onChange={(e) =>
                  setVals((v) => ({ ...v, [f.key]: +e.target.value }))
                }
                className="w-full mt-2"
              />
            </div>
          ))}
        </aside>
      </div>
    </>
  );
}
