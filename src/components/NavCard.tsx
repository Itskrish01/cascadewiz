import { Link } from "react-router-dom";

export interface NavCardProps {
  name: string;
  description: string;
  href: string;
  index?: string;
  category?: string;
  preview?: React.ReactNode;
}

const NavCard = ({
  name,
  description,
  href,
  index = "00",
  category = "Tool",
  preview,
}: NavCardProps) => {
  return (
    <Link
      to={href}
      className="group relative flex flex-col bg-paper border border-rule hover:border-ink transition-colors"
    >
      {/* Preview area */}
      <div className="aspect-[5/3] relative overflow-hidden border-b border-rule bg-paper-deep">
        <div className="absolute inset-0 bg-grid-dots opacity-20" />
        <div className="absolute inset-0 grid place-items-center transition-transform duration-500 group-hover:scale-[1.04]">
          {preview}
        </div>
        <div className="absolute top-3 left-3 font-mono-cw text-[10px] uppercase tracking-widest text-ink-muted">
          {index}
        </div>
        <div className="absolute top-3 right-3 font-mono-cw text-[10px] uppercase tracking-widest text-ink-muted">
          {category}
        </div>
      </div>

      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl tracking-tight leading-tight">
            {name}
          </h3>
          <span className="font-mono-cw text-sm text-ink-muted group-hover:text-ink transition-colors translate-y-1">
            →
          </span>
        </div>
        <p className="text-sm text-ink-soft mt-2 leading-relaxed">
          {description}
        </p>
        <div className="mt-5 pt-4 border-t border-rule flex items-center justify-between font-mono-cw text-[10px] uppercase tracking-widest text-ink-muted">
          <span>Open</span>
          <span>↗</span>
        </div>
      </div>
    </Link>
  );
};

export default NavCard;
