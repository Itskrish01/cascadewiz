import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { CopyBlock, dracula } from "react-code-blocks";

type T = {
  key: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  default: number;
};

const TX: T[] = [
  { key: "translateX", label: "Translate X", unit: "px", min: -200, max: 200, step: 1, default: 0 },
  { key: "translateY", label: "Translate Y", unit: "px", min: -200, max: 200, step: 1, default: 0 },
  { key: "translateZ", label: "Translate Z", unit: "px", min: -300, max: 300, step: 1, default: 0 },
  { key: "rotateX", label: "Rotate X", unit: "deg", min: -180, max: 180, step: 1, default: 0 },
  { key: "rotateY", label: "Rotate Y", unit: "deg", min: -180, max: 180, step: 1, default: 0 },
  { key: "rotateZ", label: "Rotate Z", unit: "deg", min: -180, max: 180, step: 1, default: 0 },
  { key: "scaleX", label: "Scale X", unit: "", min: 0, max: 3, step: 0.01, default: 1 },
  { key: "scaleY", label: "Scale Y", unit: "", min: 0, max: 3, step: 0.01, default: 1 },
  { key: "skewX", label: "Skew X", unit: "deg", min: -60, max: 60, step: 1, default: 0 },
  { key: "skewY", label: "Skew Y", unit: "deg", min: -60, max: 60, step: 1, default: 0 },
];

export default function TransformLab() {
  const [vals, setVals] = useState<Record<string, number>>(
    Object.fromEntries(TX.map((t) => [t.key, t.default]))
  );
  const [perspective, setPerspective] = useState(800);

  const transformStr = useMemo(
    () =>
      TX.filter((t) => vals[t.key] !== t.default)
        .map((t) => `${t.key}(${vals[t.key]}${t.unit})`)
        .join(" ") || "none",
    [vals]
  );

  const css = `.element {\n  transform: ${transformStr};\n  transform-style: preserve-3d;\n}`;

  return (
    <>
      <Helmet>
        <title>Transform Lab — CascadeWiz</title>
      </Helmet>
      <section className="pt-12 pb-6 border-b border-rule">
        <div className="eyebrow">Tool · T·10</div>
        <h1 className="font-display text-6xl lg:text-7xl tracking-tight mt-3">
          Transform <em className="italic">Lab</em>.
        </h1>
        <p className="text-ink-soft max-w-xl mt-4">
          Translate, rotate, scale and skew. Compose 3D transforms visually,
          then export the matrix.
        </p>
      </section>

      <div className="grid lg:grid-cols-12 gap-10 pt-12">
        <main className="lg:col-span-7 space-y-8 lg:order-2">
          <div className="paper-card overflow-hidden">
            <div
              className="aspect-[4/3] relative bg-paper-deep grid place-items-center overflow-hidden"
              style={{ perspective: `${perspective}px` }}
            >
              <div className="absolute inset-0 bg-grid-lines opacity-20" />
              <div
                className="relative w-40 h-40 bg-ink text-paper grid place-items-center font-display italic text-3xl border border-ink"
                style={{
                  transform: transformStr,
                  transformStyle: "preserve-3d",
                  transition: "transform 200ms linear",
                }}
              >
                cw
              </div>
            </div>
            <div className="border-t border-rule px-5 py-3 font-mono-cw text-xs text-ink-muted overflow-x-auto whitespace-nowrap">
              transform: {transformStr};
            </div>
          </div>

          <div className="paper-card p-4">
            <div className="flex items-center justify-between">
              <div className="eyebrow">Perspective (parent)</div>
              <span className="font-mono-cw text-xs">{perspective}px</span>
            </div>
            <input
              type="range"
              min={200}
              max={2000}
              step={10}
              value={perspective}
              onChange={(e) => setPerspective(+e.target.value)}
              className="w-full mt-2"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() =>
                setVals(Object.fromEntries(TX.map((t) => [t.key, t.default])))
              }
              className="px-3 py-1.5 border border-ink font-mono-cw text-[10px] uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors"
            >
              Reset
            </button>
            <button
              onClick={() =>
                setVals({
                  translateX: 0,
                  translateY: 0,
                  translateZ: 0,
                  rotateX: -20,
                  rotateY: 35,
                  rotateZ: 0,
                  scaleX: 1,
                  scaleY: 1,
                  skewX: 0,
                  skewY: 0,
                })
              }
              className="px-3 py-1.5 border border-ink font-mono-cw text-[10px] uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors"
            >
              Iso
            </button>
            <button
              onClick={() =>
                setVals((v) => ({ ...v, rotateZ: 45, scaleX: 1.2, scaleY: 0.8 }))
              }
              className="px-3 py-1.5 border border-ink font-mono-cw text-[10px] uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors"
            >
              Diamond
            </button>
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
          {TX.map((t) => (
            <div key={t.key} className="paper-card p-4">
              <div className="flex items-center justify-between">
                <div className="eyebrow">{t.label}</div>
                <span className="font-mono-cw text-xs">
                  {vals[t.key]}
                  {t.unit}
                </span>
              </div>
              <input
                type="range"
                min={t.min}
                max={t.max}
                step={t.step}
                value={vals[t.key]}
                onChange={(e) =>
                  setVals((v) => ({ ...v, [t.key]: +e.target.value }))
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
