import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { CopyBlock, dracula } from "react-code-blocks";

function calcSpecificity(selector: string): {
  a: number;
  b: number;
  c: number;
  parts: { type: "id" | "class" | "type"; value: string }[];
} {
  // strip combinators and pseudo args
  const cleaned = selector.replace(/\s*[>+~]\s*/g, " ");
  const parts: { type: "id" | "class" | "type"; value: string }[] = [];
  let a = 0,
    b = 0,
    c = 0;

  // ids
  cleaned.replace(/#[\w-]+/g, (m) => {
    a++;
    parts.push({ type: "id", value: m });
    return "";
  });
  // classes, attributes, pseudo-classes
  cleaned
    .replace(/#[\w-]+/g, "")
    .replace(/\.[\w-]+/g, (m) => {
      b++;
      parts.push({ type: "class", value: m });
      return "";
    });
  cleaned
    .replace(/#[\w-]+/g, "")
    .replace(/\.[\w-]+/g, "")
    .replace(/\[[^\]]+\]/g, (m) => {
      b++;
      parts.push({ type: "class", value: m });
      return "";
    });
  cleaned
    .replace(/#[\w-]+/g, "")
    .replace(/\.[\w-]+/g, "")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/:(?!:)[\w-]+(\([^)]*\))?/g, (m) => {
      // :not :is :where do not add by themselves; ignore for simplicity but count :not contents
      if (m.startsWith(":where")) return "";
      b++;
      parts.push({ type: "class", value: m });
      return "";
    });
  // pseudo-elements & types
  cleaned
    .replace(/#[\w-]+/g, "")
    .replace(/\.[\w-]+/g, "")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/:(?!:)[\w-]+(\([^)]*\))?/g, "")
    .replace(/::[\w-]+/g, (m) => {
      c++;
      parts.push({ type: "type", value: m });
      return "";
    });
  cleaned
    .replace(/#[\w-]+/g, "")
    .replace(/\.[\w-]+/g, "")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/:(?!:)[\w-]+(\([^)]*\))?/g, "")
    .replace(/::[\w-]+/g, "")
    .replace(/\*/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .forEach((tok) => {
      if (/^[a-zA-Z][\w-]*$/.test(tok)) {
        c++;
        parts.push({ type: "type", value: tok });
      }
    });

  return { a, b, c, parts };
}

const examples = [
  "ul li.item",
  "#hero h1.headline",
  "nav a:hover",
  "form input[type='email']:focus",
  "article > p::first-line",
  ".card .title + .meta",
];

const groups = [
  {
    title: "Pseudo-classes",
    items: [
      [":hover", "Pointer is over the element."],
      [":focus", "Element has keyboard focus."],
      [":focus-visible", "Focus visible only via keyboard."],
      [":active", "Currently being clicked."],
      [":checked", "Checked input/option."],
      [":disabled", "Disabled form control."],
      [":nth-child(n)", "Pick by position among siblings."],
      [":not(s)", "Anything not matching selector s."],
      [":is(a, b)", "Match any in the list, takes highest specificity."],
      [":where(a, b)", "Like :is, but contributes 0 specificity."],
      [":has(s)", "Parent selector — has descendant matching s."],
    ],
  },
  {
    title: "Pseudo-elements",
    items: [
      ["::before", "Inserted before the content."],
      ["::after", "Inserted after the content."],
      ["::first-letter", "First letter of a block."],
      ["::first-line", "First formatted line of a block."],
      ["::placeholder", "Form input placeholder text."],
      ["::selection", "User-highlighted portion."],
      ["::marker", "List item marker."],
      ["::backdrop", "Backdrop behind <dialog> / fullscreen."],
    ],
  },
  {
    title: "Combinators",
    items: [
      ["A B", "Descendant — B inside A."],
      ["A > B", "Child — B as direct child of A."],
      ["A + B", "Adjacent — B right after A."],
      ["A ~ B", "General sibling — B after A."],
    ],
  },
];

export default function Selectors() {
  const [selector, setSelector] = useState("#hero .card > a:hover");
  const spec = useMemo(() => calcSpecificity(selector), [selector]);

  const css = `${selector} {\n  /* a=${spec.a}, b=${spec.b}, c=${spec.c} → (${spec.a},${spec.b},${spec.c}) */\n  outline: 1px solid currentColor;\n}`;

  return (
    <>
      <Helmet>
        <title>Selectors & Specificity — CascadeWiz</title>
      </Helmet>
      <section className="pt-12 pb-6 border-b border-rule">
        <div className="eyebrow">Guide · G·05</div>
        <h1 className="font-display text-6xl lg:text-7xl tracking-tight mt-3">
          Selectors &amp; <em className="italic">Specificity</em>.
        </h1>
        <p className="text-ink-soft max-w-xl mt-4">
          Read any selector. Count its weight. Stop guessing which rule wins
          the cascade.
        </p>
      </section>

      <div className="grid lg:grid-cols-12 gap-10 pt-12">
        <main className="lg:col-span-8 space-y-12">
          <div className="paper-card p-6 lg:p-8">
            <div className="eyebrow mb-3">Selector</div>
            <input
              type="text"
              value={selector}
              onChange={(e) => setSelector(e.target.value)}
              className="w-full bg-paper-deep border border-rule focus:border-ink outline-none px-4 py-3 font-mono-cw text-base"
              spellCheck={false}
            />

            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                ["a", "IDs", spec.a],
                ["b", "Classes / attrs / pseudo-classes", spec.b],
                ["c", "Types / pseudo-elements", spec.c],
              ].map(([k, label, val]) => (
                <div key={k as string} className="border border-ink p-4">
                  <div className="font-mono-cw text-[10px] uppercase tracking-widest text-ink-muted">
                    {k}
                  </div>
                  <div className="font-display text-5xl tracking-tight leading-none mt-1">
                    {val as number}
                  </div>
                  <div className="text-xs text-ink-soft mt-2">{label as string}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <div className="eyebrow">Specificity</div>
              <div className="font-display text-3xl tracking-tight">
                ({spec.a},{spec.b},{spec.c})
              </div>
            </div>

            <div className="mt-6">
              <div className="eyebrow mb-2">Parts detected</div>
              <div className="flex flex-wrap gap-2">
                {spec.parts.length === 0 && (
                  <span className="font-mono-cw text-xs text-ink-muted">
                    none
                  </span>
                )}
                {spec.parts.map((p, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 font-mono-cw text-xs border ${
                      p.type === "id"
                        ? "bg-ink text-paper border-ink"
                        : p.type === "class"
                        ? "border-ink"
                        : "border-rule text-ink-muted"
                    }`}
                  >
                    {p.value}
                    <span className="ml-2 opacity-60">[{p.type}]</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="eyebrow self-center mr-2">Try</span>
              {examples.map((ex) => (
                <button
                  key={ex}
                  onClick={() => setSelector(ex)}
                  className="px-2 py-1 font-mono-cw text-xs border border-rule hover:border-ink"
                >
                  {ex}
                </button>
              ))}
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

          <div className="space-y-10">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="border-b border-ink pb-3 mb-4 flex items-end justify-between">
                  <h2 className="font-display text-3xl tracking-tight">
                    {g.title}
                  </h2>
                  <span className="font-mono-cw text-[11px] uppercase tracking-widest text-ink-muted">
                    {g.items.length} entries
                  </span>
                </div>
                <ul className="divide-y divide-rule border-y border-rule">
                  {g.items.map(([token, desc]) => (
                    <li
                      key={token}
                      className="grid grid-cols-12 gap-4 py-3 items-baseline cursor-pointer hover:bg-paper-deep px-2"
                      onClick={() => setSelector(token.replace(/[()].*/g, ""))}
                    >
                      <code className="col-span-4 font-mono-cw text-sm">
                        {token}
                      </code>
                      <span className="col-span-8 text-sm text-ink-soft">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>

        <aside className="lg:col-span-4">
          <div className="sticky top-24 paper-card p-6 space-y-5">
            <div>
              <div className="eyebrow mb-2">How it works</div>
              <p className="text-sm text-ink-soft leading-relaxed">
                Specificity is read as <strong>(a, b, c)</strong> where{" "}
                <strong>a</strong> counts IDs, <strong>b</strong> counts
                classes, attributes and pseudo-classes, and{" "}
                <strong>c</strong> counts type selectors and pseudo-elements.
                Higher tuples win, compared left to right.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-2">Cascade order</div>
              <ol className="text-sm text-ink-soft space-y-1.5 list-decimal pl-5">
                <li>Origin & importance (user agent → user → author → !important).</li>
                <li>@layer order.</li>
                <li>Specificity (a, b, c).</li>
                <li>Source order — last wins.</li>
              </ol>
            </div>
            <div>
              <div className="eyebrow mb-2">Quick wins</div>
              <ul className="text-sm text-ink-soft space-y-1.5 list-disc pl-5">
                <li>Use <code className="font-mono-cw">:where()</code> to lower specificity.</li>
                <li>Avoid <code className="font-mono-cw">!important</code>; reach for <code className="font-mono-cw">@layer</code> instead.</li>
                <li>Prefer classes — they keep weights flat and predictable.</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
