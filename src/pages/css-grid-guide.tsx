import { Helmet } from "react-helmet";
import { useState, useMemo } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

/* ─────────── Reusable section wrapper ─────────── */
const Section = ({
  index,
  title,
  children,
  desc,
}: {
  index: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) => (
  <section className="mt-16 first:mt-0">
    <div className="flex items-end justify-between gap-6 border-b border-rule pb-4 mb-6">
      <div>
        <div className="eyebrow">{index}</div>
        <h2 className="font-display text-3xl md:text-4xl tracking-tight mt-1">
          {title}
        </h2>
      </div>
      {desc && (
        <p className="hidden md:block max-w-sm text-sm text-ink-soft">{desc}</p>
      )}
    </div>
    {children}
  </section>
);

const TokenButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full font-mono-cw text-xs border transition-colors ${
      active
        ? "bg-ink text-paper border-ink"
        : "bg-paper-card border-rule text-ink-soft hover:border-ink hover:text-ink"
    }`}
  >
    {children}
  </button>
);

const justifyItems = ["start", "end", "center", "stretch"];
const alignItems = ["start", "end", "center", "stretch"];
const justifyContent = [
  "start",
  "end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
];
const alignContent = [
  "start",
  "end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
];

const GridGuide = () => {
  const [cols, setCols] = useState("repeat(4, 1fr)");
  const [rows, setRows] = useState("repeat(2, 80px)");
  const [gap, setGap] = useState(12);
  const [ji, setJi] = useState("stretch");
  const [ai, setAi] = useState("stretch");
  const [jc, setJc] = useState("start");
  const [ac, setAc] = useState("start");
  const [items, setItems] = useState(8);

  const code = useMemo(
    () => `.grid {
  display: grid;
  grid-template-columns: ${cols};
  grid-template-rows: ${rows};
  gap: ${gap}px;
  justify-items: ${ji};
  align-items: ${ai};
  justify-content: ${jc};
  align-content: ${ac};
}`,
    [cols, rows, gap, ji, ai, jc, ac]
  );

  /* Areas demo */
  const [areas, setAreas] = useState(
    `"header header header"\n"sidebar main main"\n"footer footer footer"`
  );
  const areaItems = ["header", "sidebar", "main", "footer"];

  return (
    <>
      <Helmet>
        <title>CSS Grid Guide — CascadeWiz</title>
        <meta
          name="description"
          content="A visual, interactive guide to CSS Grid: tracks, gaps, alignment, and template areas."
        />
      </Helmet>

      {/* Page header */}
      <header className="border-b border-rule pb-10">
        <div className="eyebrow">G·02 ─ Visual Guide</div>
        <h1 className="font-display text-6xl md:text-7xl tracking-tight mt-3 leading-none">
          The <em className="italic text-accent">Grid</em> Guide
        </h1>
        <p className="mt-5 max-w-2xl text-ink-soft">
          CSS Grid is two-dimensional layout. Think tracks, lines, and areas.
          Use the controls below to feel each property change the canvas in
          real time.
        </p>
      </header>

      {/* ───────── Tracks ───────── */}
      <Section
        index="01 ─ Tracks"
        title="Columns, rows & gap"
        desc="Define the skeleton: how many tracks, what size, and the gutter between them."
      >
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 paper-card rounded-md p-4 min-h-[320px]">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: cols,
                gridTemplateRows: rows,
                gap: `${gap}px`,
                justifyItems: ji,
                alignItems: ai,
                justifyContent: jc,
                alignContent: ac,
                minHeight: 320,
                background:
                  "repeating-linear-gradient(45deg,transparent,transparent 8px,rgba(20,17,15,0.04) 8px,rgba(20,17,15,0.04) 9px)",
              }}
              className="border border-rule rounded p-2 transition-all"
            >
              {Array.from({ length: items }).map((_, i) => (
                <div
                  key={i}
                  className="bg-ink text-paper rounded grid place-items-center font-mono-cw text-xs px-3 py-3"
                  style={{ minHeight: 32, minWidth: 32 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <div>
              <label className="eyebrow">grid-template-columns</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(4, 1fr)",
                  "1fr 2fr 1fr",
                  "100px 1fr 100px",
                  "repeat(auto-fill, minmax(80px, 1fr))",
                ].map((v) => (
                  <TokenButton key={v} active={cols === v} onClick={() => setCols(v)}>
                    {v}
                  </TokenButton>
                ))}
              </div>
            </div>
            <div>
              <label className="eyebrow">grid-template-rows</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["repeat(2, 80px)", "repeat(3, 60px)", "auto", "120px auto"].map(
                  (v) => (
                    <TokenButton key={v} active={rows === v} onClick={() => setRows(v)}>
                      {v}
                    </TokenButton>
                  )
                )}
              </div>
            </div>
            <div>
              <label className="eyebrow">gap · {gap}px</label>
              <input
                type="range"
                min={0}
                max={40}
                value={gap}
                onChange={(e) => setGap(+e.target.value)}
                className="w-full accent-[#d8431a] mt-2"
              />
            </div>
            <div>
              <label className="eyebrow">items · {items}</label>
              <input
                type="range"
                min={1}
                max={16}
                value={items}
                onChange={(e) => setItems(+e.target.value)}
                className="w-full accent-[#d8431a] mt-2"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ───────── Item alignment ───────── */}
      <Section
        index="02 ─ Item alignment"
        title="justify-items · align-items"
        desc="How each cell positions its child along the row and column axes."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="paper-card rounded-md p-4">
            <div className="eyebrow mb-3">justify-items (row axis)</div>
            <div className="flex flex-wrap gap-2">
              {justifyItems.map((v) => (
                <TokenButton key={v} active={ji === v} onClick={() => setJi(v)}>
                  {v}
                </TokenButton>
              ))}
            </div>
          </div>
          <div className="paper-card rounded-md p-4">
            <div className="eyebrow mb-3">align-items (column axis)</div>
            <div className="flex flex-wrap gap-2">
              {alignItems.map((v) => (
                <TokenButton key={v} active={ai === v} onClick={() => setAi(v)}>
                  {v}
                </TokenButton>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ───────── Track distribution ───────── */}
      <Section
        index="03 ─ Track distribution"
        title="justify-content · align-content"
        desc="When tracks don't fill the container, distribute the leftover space."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="paper-card rounded-md p-4">
            <div className="eyebrow mb-3">justify-content</div>
            <div className="flex flex-wrap gap-2">
              {justifyContent.map((v) => (
                <TokenButton key={v} active={jc === v} onClick={() => setJc(v)}>
                  {v}
                </TokenButton>
              ))}
            </div>
          </div>
          <div className="paper-card rounded-md p-4">
            <div className="eyebrow mb-3">align-content</div>
            <div className="flex flex-wrap gap-2">
              {alignContent.map((v) => (
                <TokenButton key={v} active={ac === v} onClick={() => setAc(v)}>
                  {v}
                </TokenButton>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ───────── Code output ───────── */}
      <Section
        index="04 ─ Output"
        title="Your CSS, ready to copy"
      >
        <div className="rounded-md overflow-hidden border border-rule">
          <CopyBlock text={code} language="css" theme={dracula} showLineNumbers />
        </div>
      </Section>

      {/* ───────── Template areas ───────── */}
      <Section
        index="05 ─ Template areas"
        title="grid-template-areas"
        desc="Name regions, then place children by name. The most readable layout syntax in CSS."
      >
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 paper-card rounded-md p-4">
            <div
              style={{
                display: "grid",
                gridTemplateAreas: areas.replace(/\\n/g, " "),
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "60px 1fr 60px",
                gap: 10,
                minHeight: 320,
              }}
            >
              {areaItems.map((a) => (
                <div
                  key={a}
                  style={{ gridArea: a }}
                  className="grid place-items-center bg-ink text-paper rounded font-mono-cw text-xs uppercase tracking-widest"
                >
                  {a}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <label className="eyebrow">grid-template-areas</label>
            <textarea
              value={areas}
              onChange={(e) => setAreas(e.target.value)}
              rows={5}
              className="mt-2 w-full font-mono-cw text-sm rounded-md border border-rule bg-paper-card p-3 focus:border-ink focus:outline-none"
            />
            <p className="mt-3 text-xs text-ink-muted leading-relaxed">
              Each quoted line describes one row. Repeat a name to span columns,
              or use a <code className="font-mono-cw">.</code> for an empty cell.
            </p>
          </div>
        </div>
      </Section>

      {/* ───────── Cheatsheet ───────── */}
      <Section index="06 ─ Cheatsheet" title="The lines & spans you'll reach for">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            ["grid-column: 1 / 3", "Span columns 1 and 2."],
            ["grid-column: span 2", "Span 2 columns from current line."],
            ["grid-row: 1 / -1", "Span every row from first to last."],
            [
              "grid-template-columns: repeat(auto-fill, minmax(180px, 1fr))",
              "Responsive track count without media queries.",
            ],
            ["place-items: center", "Shorthand for align-items + justify-items."],
            [
              "subgrid",
              "Inherit parent tracks — set on grid-template-columns/rows.",
            ],
          ].map(([k, v]) => (
            <div key={k} className="border border-rule rounded-md p-4 bg-paper-card">
              <div className="font-mono-cw text-xs text-ink">{k}</div>
              <div className="text-sm text-ink-soft mt-1">{v}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default GridGuide;
