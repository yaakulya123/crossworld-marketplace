import Link from "next/link";
import { BRANDS, getProductsByBrand } from "@/data/brands";
import { BrandLogo } from "@/components/BrandLogo";

export default function BrandsIndex() {
  return (
    <>
      <section className="bg-[var(--color-ink-50)] py-10">
        <div className="container-x">
          <div className="text-xs uppercase tracking-wider text-[var(--color-ink-500)] flex items-center gap-2">
            <Link href="/" className="hover:text-[var(--color-brand-500)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--color-ink-900)]">All Brands</span>
          </div>
          <div className="mt-4 flex items-end justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-semibold">All brands</h1>
              <p className="mt-2 text-[var(--color-ink-500)] max-w-xl">
                Five in-house brands. Direct-sourced. No third-party mark-ups.
              </p>
            </div>
            <div className="text-sm text-[var(--color-ink-500)]">{BRANDS.length} brands · {BRANDS.reduce((a, b) => a + getProductsByBrand(b.slug).length, 0)} products</div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-x grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b, i) => {
            const count = getProductsByBrand(b.slug).length;
            return (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="card group relative overflow-hidden p-7 min-h-[240px] flex flex-col justify-between"
                style={{ background: `linear-gradient(145deg, ${b.accent}10, #ffffff 65%)`, transitionDelay: `${i * 70}ms` }}
                data-reveal
              >
                <div className="absolute -right-6 -bottom-14 font-display leading-none text-[180px] opacity-[0.08] group-hover:opacity-[0.16] transition-opacity" style={{ color: b.accent }}>
                  {b.mark}
                </div>
                <div className="relative">
                  <div className="h-12 flex items-center">
                    <BrandLogo brand={b} height={32} />
                  </div>
                  <div className="mt-4">
                    <div className="text-[11px] text-[var(--color-ink-500)] uppercase tracking-wider">{b.categoryLabel}</div>
                    <p className="mt-2 text-sm text-[var(--color-ink-600)] leading-relaxed max-w-sm">{b.tagline}</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between mt-5 pt-4 border-t border-[var(--color-ink-100)]">
                  <span className="text-xs text-[var(--color-ink-500)]">{b.origin}</span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand-600)] group-hover:gap-2.5 transition-all">
                    {count} products
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
