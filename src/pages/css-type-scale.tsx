import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { CopyBlock, dracula } from "react-code-blocks";

const ratios = [
  { name: "Minor Second", value: 1.067 },
  { name: "Major Second", value: 1.125 },
  { name: "Minor Third", value: 1.2 },
  { name: "Major Third", value: 1.25 },
  { name: "Perfect Fourth", value: 1.333 },
  { name: "Augmented Fourth", value: 1.414 },
  { name: "Perfect Fifth", value: 1.5 },
  { name: "Golden Ratio", value: 1.618 },
];

const steps = [
  { key: "xs", exp: -2, label: "xs" },
  { key: "sm", exp: -1, label: "sm" },
  { key: "base", exp: 0, label: "base" },
  { key: "md", exp: 1, label: "md" },
  { key: "lg", exp: 2, label: "lg" },
  { key: "xl", exp: 3, label: "xl" },
  { key: "2xl", exp: 4, label: "2xl" },
  { key: "3xl", exp: 5, label: "3xl" },
  { key: "4xl", exp: 6, label: "4xl" },
];

const previewSamples: Record<string, string> = {
  "4xl": "Cascading the cosmos",
  "3xl": "A scale, with feeling",
  "2xl": "Read the curve",
  xl: "Hierarchy emerges",
  lg: "Subheading rhythm",
  md: "Body copy, comfortable",
  base: "The cascade is calm. Nothing competes with the work, only the type itself.",
  sm: "Annotations and meta",
  xs: "Footnotes & captions",
};

export default function TypeScale() {
  const [base, setBase] = useState(16);
  const [ratio, setRatio] = useState(1.25);

  const sizes = useMemo(
    () =>
      steps.map((s) => ({
        ...s,
        px: +(base * Math.pow(ratio, s.exp)).toFixed(2),
      })),
    [base, ratio]
  );

  const css = useMemo(() => {
    const vars = sizes
      .map((s) => `  --fs-${s.key}: ${(s.px / 16).toFixed(3)}rem;`)
      .join("\n");
    return `:root {\n${vars}\n}`;
  }, [sizes]);

  return (
    <>
      <Helmet>
        <title>Type Scale — CascadeWiz</title>
      </Helmet>
      <section className="pt-12 pb-6 border-b border-rule">
        <div className="eyebrow">Tool · T·07</div>
        <h1 className="font-display text-6xl lg:text-7xl tracking-tight mt-3">
          Type <em className="italic">Scale</em>.
        </h1>
        <p className="text-ink-soft max-w-xl mt-4">
          Pick a base size and a modular ratio. Get a calm, harmonious type
          system in one breath.
        </p>
      </section>

      <div className="grid lg:grid-cols-12 gap-10 pt-12">
        <aside className="lg:col-span-3 space-y-8">
          <div className="paper-card p-5">
            <div className="eyebrow mb-3">Base size</div>
            <div className="flex items-baseline gap-2">
              <input
                type="range"
                min={12}
                max={24}
                step={1}
                value={base}
                onChange={(e) => setBase(+e.target.value)}
                className="w-full"
              />
              <span className="font-mono-cw text-sm">{base}px</span>
            </div>
          </div>
          <div className="paper-card p-5">
            <div className="eyebrow mb-3">Ratio</div>
            <ul className="space-y-1">
              {ratios.map((r) => (
                <li key={r.name}>
                  <button
                    onClick={() => setRatio(r.value)}
                    className={`w-full text-left flex items-center justify-between px-3 py-2 border ${
                      ratio === r.value
                        ? "bg-ink text-paper border-ink"
                        : "border-rule hover:border-ink"
                    }`}
                  >
                    <span className="text-sm">{r.name}</span>
                    <span className="font-mono-cw text-xs">{r.value}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="lg:col-span-9 space-y-12">
          <div className="paper-card">
            {sizes
              .slice()
              .reverse()
              .map((s) => (
                <div
                  key={s.key}
                  className="grid grid-cols-12 gap-4 items-baseline border-b border-rule px-6 py-4 last:border-b-0"
                >
                  <div className="col-span-2 font-mono-cw text-[11px] uppercase tracking-widest text-ink-muted">
                    {s.label}
                    <div className="text-ink">{s.px}px</div>
                  </div>
                  <div
                    className="col-span-10 font-display tracking-tight leading-tight"
                    style={{ fontSize: `${s.px}px` }}
                  >
                    {previewSamples[s.key]}
                  </div>
                </div>
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
      </div>
    </>
  );
}
