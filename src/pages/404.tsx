import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-[70vh] grid place-items-center px-6 py-24">
      <div className="max-w-2xl text-center">
        <div className="eyebrow">Error · 404</div>
        <h1 className="font-display tracking-tighter leading-none text-[28vw] lg:text-[260px] mt-4">
          404
        </h1>
        <p className="font-display text-2xl lg:text-3xl text-ink-soft mt-2">
          Nothing in <em className="italic">this</em> cascade.
        </p>
        <p className="text-sm text-ink-muted mt-4">
          The page you tried to visit doesn&apos;t exist — or it never did.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="px-5 py-3 bg-ink text-paper font-mono-cw uppercase tracking-widest text-xs hover:bg-paper hover:text-ink hover:border hover:border-ink transition-colors border border-ink"
          >
            ← Back to home
          </Link>
          <Link
            to="/css-grid-guide"
            className="px-5 py-3 border border-ink font-mono-cw uppercase tracking-widest text-xs hover:bg-ink hover:text-paper transition-colors"
          >
            Open a guide
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
