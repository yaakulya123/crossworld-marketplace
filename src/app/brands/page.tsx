import Link from "next/link";
import { BRANDS, getProductsByBrand } from "@/data/brands";

export default function BrandsIndex() {
  return (
    <section className="bg-[var(--color-cream)] pt-40 pb-28">
      <div className="container-x">
        <div className="max-w-2xl mb-14" data-reveal>
          <div className="eyebrow text-[var(--color-ink-500)]"><span className="hairline"/><span>All brands</span></div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.98]">
            Five houses.<br /><span className="italic text-[var(--color-ox-500)]">All in one place</span>.
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {BRANDS.map((b) => {
            const count = getProductsByBrand(b.slug).length;
            return (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-[var(--color-ink-900)]/8 p-10 md:p-12 min-h-[280px]"
                style={{ background: `linear-gradient(140deg, ${b.accent}20 0%, ${b.accent}05 100%)` }}
                data-reveal
              >
                <div className="absolute inset-0 grid-dots opacity-60" />
                <div className="absolute -right-10 -bottom-20 font-display opacity-10 group-hover:opacity-25 transition-opacity duration-700 text-[260px] leading-none" style={{ color: b.accent }}>
                  {b.mark}
                </div>
                <div className="relative">
                  <div className="eyebrow" style={{ color: b.accent }}><span className="hairline"/><span>{b.categoryLabel}</span></div>
                  <h2 className="mt-5 font-display text-5xl">{b.name}</h2>
                  <p className="mt-3 text-[var(--color-ink-500)] max-w-md leading-relaxed">{b.tagline}</p>
                  <div className="mt-10 flex items-center justify-between text-xs">
                    <span className="uppercase tracking-[0.22em] text-[var(--color-ink-500)]">{b.origin}</span>
                    <span className="flex items-center gap-2 text-[var(--color-ink-900)] group-hover:text-[var(--color-ox-500)] transition">
                      {count} product{count !== 1 && "s"}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
