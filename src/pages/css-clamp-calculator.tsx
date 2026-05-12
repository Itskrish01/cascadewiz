import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { CopyBlock, dracula } from "react-code-blocks";

export default function ClampCalculator() {
  const [minVw, setMinVw] = useState(360);
  const [maxVw, setMaxVw] = useState(1440);
  const [minSize, setMinSize] = useState(16);
  const [maxSize, setMaxSize] = useState(28);
  const [unit, setUnit] = useState<"rem" | "px">("rem");
  const [previewVw, setPreviewVw] = useState(800);

  const { slope, intercept, preferred, expression, livePx } = useMemo(() => {
    const slope = (maxSize - minSize) / (maxVw - minVw);
    const intercept = minSize - slope * minVw;
    const slopeVw = +(slope * 100).toFixed(4);
    const interceptRem = +(intercept / 16).toFixed(4);
    const interceptPx = +intercept.toFixed(2);

    const preferred =
      unit === "rem"
        ? `${interceptRem}rem + ${slopeVw}vw`
        : `${interceptPx}px + ${slopeVw}vw`;

    const minOut = unit === "rem" ? `${(minSize / 16).toFixed(3)}rem` : `${minSize}px`;
    const maxOut = unit === "rem" ? `${(maxSize / 16).toFixed(3)}rem` : `${maxSize}px`;

    const expression = `clamp(${minOut}, ${preferred}, ${maxOut})`;

    const raw = slope * previewVw + intercept;
    const livePx = Math.max(minSize, Math.min(maxSize, raw));

    return { slope, intercept, preferred, expression, livePx };
  }, [minVw, maxVw, minSize, maxSize, unit, previewVw]);

  const css = `:root {\n  --fluid-size: ${expression};\n}\n\n.headline {\n  font-size: ${expression};\n}`;

  return (
    <>
      <Helmet>
        <title>Clamp Calculator — CascadeWiz</title>
      </Helmet>
      <section className="pt-12 pb-6 border-b border-rule">
        <div className="eyebrow">Tool · T·08</div>
        <h1 className="font-display text-6xl lg:text-7xl tracking-tight mt-3">
          Clamp <em className="italic">Calculator</em>.
        </h1>
        <p className="text-ink-soft max-w-xl mt-4">
          Fluid sizes that scale linearly between two viewports — clamped at the
          edges so nothing breaks.
        </p>
      </section>

      <div className="grid lg:grid-cols-12 gap-10 pt-12">
        <aside className="lg:col-span-4 space-y-6">
          {[
            ["Min viewport (px)", minVw, setMinVw, 200, 1024, 10],
            ["Max viewport (px)", maxVw, setMaxVw, 600, 2400, 10],
            ["Min size (px)", minSize, setMinSize, 8, 96, 1],
            ["Max size (px)", maxSize, setMaxSize, 12, 200, 1],
          ].map(([label, val, set, min, max, step]) => (
            <div key={label as string} className="paper-card p-5">
              <div className="flex items-center justify-between">
                <div className="eyebrow">{label as string}</div>
                <span className="font-mono-cw text-xs">{val as number}</span>
              </div>
              <input
                type="range"
                min={min as number}
                max={max as number}
                step={step as number}
                value={val as number}
                onChange={(e) => (set as (n: number) => void)(+e.target.value)}
                className="w-full mt-3"
              />
            </div>
          ))}

          <div className="paper-card p-5">
            <div className="eyebrow mb-3">Unit</div>
            <div className="flex border border-ink">
              {(["rem", "px"] as const).map((u) => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  className={`flex-1 py-2 font-mono-cw text-xs uppercase tracking-widest ${
                    unit === u
                      ? "bg-ink text-paper"
                      : "hover:bg-paper-deep"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="lg:col-span-8 space-y-10">
          <div className="paper-card p-8 lg:p-10">
            <div className="flex items-center justify-between">
              <div className="eyebrow">Live preview</div>
              <span className="font-mono-cw text-xs text-ink-muted">
                @ {previewVw}px → {livePx.toFixed(2)}px
              </span>
            </div>
            <div className="mt-6 border-t border-rule pt-6">
              <p
                className="font-display tracking-tight leading-tight"
                style={{ fontSize: `${livePx}px` }}
              >
                The cascade is calm.
              </p>
            </div>
            <div className="mt-8">
              <input
                type="range"
                min={200}
                max={2400}
                step={10}
                value={previewVw}
                onChange={(e) => setPreviewVw(+e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between font-mono-cw text-[11px] text-ink-muted mt-1">
                <span>200px</span>
                <span>viewport</span>
                <span>2400px</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="paper-card p-5">
              <div className="eyebrow mb-2">Slope</div>
              <div className="font-display text-3xl">
                {(slope * 100).toFixed(3)}vw
              </div>
            </div>
            <div className="paper-card p-5">
              <div className="eyebrow mb-2">Intercept</div>
              <div className="font-display text-3xl">
                {(intercept / 16).toFixed(3)}rem
              </div>
            </div>
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
      </div>
    </>
  );
}
