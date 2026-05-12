import { Link } from "react-router-dom";

const cols = [
  {
    label: "Tools",
    links: [
      { name: "Glassmorphism", href: "/css-glassmorphism" },
      { name: "Glitch Text", href: "/css-glitch-text-effect" },
      { name: "Box Shadow", href: "/css-box-shadow" },
      { name: "Color Shades", href: "/color-shades-generator" },
      { name: "Gradient Studio", href: "/css-gradient-generator" },
      { name: "Border Radius", href: "/css-border-radius" },
      { name: "Type Scale", href: "/css-type-scale" },
      { name: "Clamp Calculator", href: "/css-clamp-calculator" },
      { name: "Filter Lab", href: "/css-filter-lab" },
      { name: "Transform Lab", href: "/css-transform-lab" },
    ],
  },
  {
    label: "Guides",
    links: [
      { name: "Flexbox", href: "/css-flexbox-guide" },
      { name: "Grid", href: "/css-grid-guide" },
      { name: "Cursors", href: "/css-cursor-guide" },
      { name: "Easing & Animation", href: "/css-easing-visualizer" },
      { name: "Selectors & Specificity", href: "/css-selectors" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-rule">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="grid place-items-center h-9 w-9 bg-ink text-paper font-display italic text-lg leading-none">
                c
              </span>
              <span className="font-display text-xl tracking-tight">
                cascade<span className="italic">wiz</span>
              </span>
            </Link>
            <p className="font-display text-2xl leading-snug text-ink-soft mt-6 max-w-md">
              Learn CSS by touching it. Tools and visual guides for designers
              and developers who care about the details.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-ink font-mono-cw uppercase tracking-widest text-[10px] hover:bg-ink hover:text-paper transition-colors"
              >
                Github →
              </a>
              <a
                href="https://buymeacoffee.com/itskrish01"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-ink font-mono-cw uppercase tracking-widest text-[10px] hover:bg-ink hover:text-paper transition-colors"
              >
                Support
              </a>
            </div>
          </div>

          {cols.map((col, i) => (
            <div key={col.label} className="lg:col-span-3">
              <div className="eyebrow mb-4">
                0{i + 1} — {col.label}
              </div>
              <ul className="space-y-1.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="text-sm text-ink-soft hover:text-ink hover:underline underline-offset-4 decoration-1"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1 flex lg:justify-end">
            <div className="font-mono-cw text-[10px] uppercase tracking-widest text-ink-muted">
              Est · 2024
            </div>
          </div>
        </div>

        <div className="border-t border-rule mt-16 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono-cw text-[11px] text-ink-muted">
          <span>© {new Date().getFullYear()} CascadeWiz</span>
          <span>Made by hand. No frameworks taught.</span>
        </div>
      </div>
    </footer>
  );
}
