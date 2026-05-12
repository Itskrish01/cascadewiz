import { Helmet } from "react-helmet";
import { useMemo, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { ColorPicker } from "@/components/colorpicker/ColorPicker";
import { Plus, X } from "lucide-react";

interface Stop {
  color: string;
  position: number;
}

type Mode = "linear" | "radial" | "conic";

const presets: { name: string; mode: Mode; angle: number; stops: Stop[] }[] = [
  {
    name: "Vermillion Dawn",
    mode: "linear",
    angle: 135,
    stops: [
      { color: "#f3ede1", position: 0 },
      { color: "#d8431a", position: 60 },
      { color: "#2f4a37", position: 100 },
    ],
  },
  {
    name: "Paper Sun",
    mode: "radial",
    angle: 0,
    stops: [
      { color: "#ffd28a", position: 0 },
      { color: "#d8431a", position: 60 },
      { color: "#14110f", position: 100 },
    ],
  },
  {
    name: "Mineral",
    mode: "linear",
    angle: 200,
    stops: [
      { color: "#0f1115", position: 0 },
      { color: "#2f4a37", position: 50 },
      { color: "#bcae8e", position: 100 },
    ],
  },
  {
    name: "Sliced",
    mode: "conic",
    angle: 0,
    stops: [
      { color: "#d8431a", position: 0 },
      { color: "#f3ede1", position: 25 },
      { color: "#2f4a37", position: 50 },
      { color: "#14110f", position: 75 },
      { color: "#d8431a", position: 100 },
    ],
  },
];

const buildGradient = (mode: Mode, angle: number, stops: Stop[]) => {
  const sorted = [...stops].sort((a, b) => a.position - b.position);
  const stopString = sorted.map((s) => `${s.color} ${s.position}%`).join(", ");
  if (mode === "linear") return `linear-gradient(${angle}deg, ${stopString})`;
  if (mode === "radial")
    return `radial-gradient(circle at center, ${stopString})`;
  return `conic-gradient(from ${angle}deg at 50% 50%, ${stopString})`;
};

const GradientGenerator = () => {
  const [mode, setMode] = useState<Mode>("linear");
  const [angle, setAngle] = useState(135);
  const [stops, setStops] = useState<Stop[]>(presets[0].stops);
  const [active, setActive] = useState(0);

  const css = useMemo(() => buildGradient(mode, angle, stops), [
    mode,
    angle,
    stops,
  ]);

  const codeText = `.surface {
  background: ${css};
}`;

  const updateStop = (idx: number, patch: Partial<Stop>) => {
    setStops((prev) =>
      prev.map((s, i) => (i === idx ? { ...s, ...patch } : s))
    );
  };

  const addStop = () => {
    setStops((prev) => [...prev, { color: "#ffffff", position: 50 }]);
    setActive(stops.length);
  };

  const removeStop = (idx: number) => {
    if (stops.length <= 2) return;
    setStops((prev) => prev.filter((_, i) => i !== idx));
    setActive(0);
  };

  const loadPreset = (p: (typeof presets)[number]) => {
    setMode(p.mode);
    setAngle(p.angle);
    setStops(p.stops);
    setActive(0);
  };

  return (
    <>
      <Helmet>
        <title>Gradient Studio — CascadeWiz</title>
        <meta
          name="description"
          content="Multi-stop CSS gradients with live preview — linear, radial, conic."
        />
      </Helmet>

      <header className="border-b border-rule pb-10">
        <div className="eyebrow">T·05 ─ Studio</div>
        <h1 className="font-display text-6xl md:text-7xl tracking-tight mt-3 leading-none">
          Gradient <em className="italic text-accent">Studio</em>
        </h1>
        <p className="mt-5 max-w-2xl text-ink-soft">
          Multi-stop linear, radial and conic gradients. Drag stops, pick
          colors, copy the CSS — no fluff.
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-8 mt-10">
        {/* Preview */}
        <div className="lg:col-span-7">
          <div
            className="aspect-[5/4] rounded-md border border-rule shadow-[0_30px_60px_-30px_rgba(20,17,15,0.45)] relative overflow-hidden"
            style={{ background: css }}
          >
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="font-mono-cw text-[11px] uppercase tracking-widest bg-paper/80 backdrop-blur px-3 py-1 rounded-full">
                {mode} · {stops.length} stops
              </span>
              {mode === "linear" && (
                <span className="font-mono-cw text-[11px] uppercase tracking-widest bg-paper/80 backdrop-blur px-3 py-1 rounded-full">
                  {angle}°
                </span>
              )}
            </div>
          </div>

          {/* Stop track */}
          <div className="mt-6">
            <div className="eyebrow mb-2">Stops</div>
            <div
              className="relative h-10 rounded-md border border-rule"
              style={{ background: buildGradient("linear", 90, stops) }}
            >
              {stops.map((s, i) => (
                <button
                  key={i}
                  aria-label={`Stop ${i + 1}`}
                  onClick={() => setActive(i)}
                  style={{ left: `${s.position}%` }}
                  className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-8 rounded-sm border-2 ${
                    active === i ? "border-ink" : "border-paper"
                  }`}
                >
                  <span
                    className="block w-full h-full rounded-sm"
                    style={{ background: s.color }}
                  />
                </button>
              ))}
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={stops[active]?.position ?? 0}
              onChange={(e) => updateStop(active, { position: +e.target.value })}
              className="w-full mt-3 accent-[#d8431a]"
            />
          </div>
        </div>

        {/* Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="eyebrow mb-2">Mode</div>
            <div className="flex gap-2">
              {(["linear", "radial", "conic"] as Mode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-4 py-2 rounded-full font-mono-cw text-xs uppercase tracking-widest border ${
                    mode === m
                      ? "bg-ink text-paper border-ink"
                      : "border-rule text-ink-soft hover:border-ink hover:text-ink bg-paper-card"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {(mode === "linear" || mode === "conic") && (
            <div>
              <div className="eyebrow mb-2">Angle · {angle}°</div>
              <input
                type="range"
                min={0}
                max={360}
                value={angle}
                onChange={(e) => setAngle(+e.target.value)}
                className="w-full accent-[#d8431a]"
              />
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="eyebrow">Active stop</span>
              <button
                onClick={addStop}
                className="inline-flex items-center gap-1.5 font-mono-cw text-[11px] uppercase tracking-widest text-ink-soft hover:text-accent"
              >
                <Plus className="w-3 h-3" /> Add
              </button>
            </div>
            <div className="paper-card rounded-md p-4 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <ColorPicker
                  color={stops[active].color}
                  onChange={(c: string) => updateStop(active, { color: c })}
                />
                <code className="font-mono-cw text-xs">{stops[active].color}</code>
                <button
                  onClick={() => removeStop(active)}
                  disabled={stops.length <= 2}
                  className="text-ink-muted hover:text-accent disabled:opacity-30"
                  aria-label="Remove stop"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div>
                <label className="eyebrow">Position · {stops[active].position}%</label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={stops[active].position}
                  onChange={(e) =>
                    updateStop(active, { position: +e.target.value })
                  }
                  className="w-full accent-[#d8431a] mt-2"
                />
              </div>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {stops.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`shrink-0 px-3 py-1.5 rounded-full font-mono-cw text-[11px] border flex items-center gap-2 ${
                    active === i
                      ? "border-ink"
                      : "border-rule hover:border-ink"
                  }`}
                >
                  <span
                    className="w-3 h-3 rounded-full border border-rule"
                    style={{ background: s.color }}
                  />
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow mb-2">Presets</div>
            <div className="grid grid-cols-2 gap-3">
              {presets.map((p) => (
                <button
                  key={p.name}
                  onClick={() => loadPreset(p)}
                  className="group rounded-md border border-rule overflow-hidden text-left hover:border-ink transition"
                >
                  <div
                    className="h-14"
                    style={{ background: buildGradient(p.mode, p.angle, p.stops) }}
                  />
                  <div className="px-3 py-2 flex items-center justify-between">
                    <span className="font-display text-sm">{p.name}</span>
                    <span className="font-mono-cw text-[10px] text-ink-muted uppercase">
                      {p.mode}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Output */}
      <section className="mt-16">
        <div className="border-b border-rule pb-4 mb-4">
          <div className="eyebrow">Output</div>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mt-1">
            Copy your CSS
          </h2>
        </div>
        <div className="rounded-md overflow-hidden border border-rule">
          <CopyBlock text={codeText} language="css" theme={dracula} showLineNumbers />
        </div>
      </section>
    </>
  );
};

export default GradientGenerator;
