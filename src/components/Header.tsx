import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const tools = [
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
];

const guides = [
  { name: "Flexbox", href: "/css-flexbox-guide" },
  { name: "Grid", href: "/css-grid-guide" },
  { name: "Cursors", href: "/css-cursor-guide" },
  { name: "Easing & Animation", href: "/css-easing-visualizer" },
  { name: "Selectors & Specificity", href: "/css-selectors" },
];

function MenuColumn({
  label,
  items,
  index,
  onNavigate,
}: {
  label: string;
  items: { name: string; href: string }[];
  index: string;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="eyebrow flex items-center gap-2">
        <span>{index}</span>
        <span className="text-ink">{label}</span>
        <span className="text-ink-muted">/ {items.length}</span>
      </div>
      <ul className="mt-2 flex flex-col">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              to={it.href}
              onClick={onNavigate}
              className="group flex items-center justify-between border-b border-rule py-3 -mx-2 px-2 hover:bg-paper-deep transition-colors"
            >
              <span className="font-display text-xl tracking-tight">
                {it.name}
              </span>
              <span className="font-mono-cw text-xs text-ink-muted group-hover:text-ink transition-colors">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/90 border-b border-rule">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid place-items-center h-8 w-8 bg-ink text-paper font-display italic text-base leading-none">
              c
            </span>
            <span className="font-display text-lg tracking-tight">
              cascade<span className="italic">wiz</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm">
            <NavLink
              to="/css-grid-guide"
              className={({ isActive }) =>
                `font-mono-cw uppercase tracking-widest text-[11px] ${
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                }`
              }
            >
              Guides
            </NavLink>
            <NavLink
              to="/css-gradient-generator"
              className={({ isActive }) =>
                `font-mono-cw uppercase tracking-widest text-[11px] ${
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                }`
              }
            >
              Tools
            </NavLink>
            <a
              href="https://krishtasood.in"
              target="_blank"
              rel="noreferrer"
              className="font-mono-cw uppercase tracking-widest text-[11px] text-ink-muted hover:text-ink"
            >
              About
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-ink hover:bg-ink hover:text-paper transition-colors"
            >
              <span
                className={`relative inline-block w-3 h-3 transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : ""
                }`}
              >
                <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-current" />
                <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-current" />
              </span>
              <span className="font-mono-cw uppercase tracking-widest text-[10px]">
                Index
              </span>
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </nav>

        {menuOpen && (
          <div className="hidden lg:block border-t border-rule py-12 rise">
            <div className="grid grid-cols-3 gap-12">
              <MenuColumn label="Tools" index="01" items={tools} onNavigate={() => setMenuOpen(false)} />
              <MenuColumn label="Guides" index="02" items={guides} onNavigate={() => setMenuOpen(false)} />
              <div className="flex flex-col justify-between">
                <div>
                  <div className="eyebrow">03 — Mission</div>
                  <p className="font-display text-2xl leading-snug mt-3">
                    A simple, focused workspace for learning and shipping CSS.
                  </p>
                </div>
                <div className="font-mono-cw text-[11px] text-ink-muted mt-8 space-y-1">
                  <div>v3.0 · {new Date().getFullYear()}</div>
                  <div>Black & white · No noise</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Dialog as="div" className="lg:hidden" open={open} onClose={setOpen}>
        <div className="fixed inset-0 z-50 bg-ink/30" aria-hidden />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-paper p-6 overflow-y-auto border-l border-rule">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg">
              cascade<span className="italic">wiz</span>
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-10 space-y-10">
            <MenuColumn label="Tools" index="01" items={tools} onNavigate={() => setOpen(false)} />
            <MenuColumn label="Guides" index="02" items={guides} onNavigate={() => setOpen(false)} />
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
