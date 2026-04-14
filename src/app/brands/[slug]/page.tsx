import Link from "next/link";
import { notFound } from "next/navigation";
import { BRANDS, getBrand, getProductsByBrand, PRODUCTS } from "@/data/brands";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const products = getProductsByBrand(slug);
  const hasRanges = (brand.ranges?.length ?? 0) > 0;

  return (
    <>
      {/* Brand hero */}
      <section
        className="relative overflow-hidden pt-40 pb-28 text-[var(--color-cream)]"
        style={{ background: `linear-gradient(160deg, ${brand.accent} 0%, #0a0706 100%)` }}
      >
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute -right-20 -top-20 font-display opacity-10 text-[440px] leading-none" style={{ color: "#fff" }}>
          {brand.mark}
        </div>
        <div className="container-x relative">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-cream)]/70 flex items-center gap-3">
            <Link href="/brands" className="hover:text-[var(--color-gold)]">Brands</Link>
            <span>/</span>
            <span className="text-[var(--color-gold)]">{brand.name}</span>
          </div>
          <div className="mt-8 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8" data-reveal>
              <div className="eyebrow text-[var(--color-gold)]"><span className="hairline"/><span>{brand.categoryLabel}</span></div>
              <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.92] tracking-[-0.02em]">{brand.name}</h1>
              <p className="mt-6 text-xl md:text-2xl italic text-[var(--color-cream)]/80 font-display">{brand.tagline}</p>
            </div>
            <div className="md:col-span-4" data-reveal>
              <p className="text-[var(--color-cream)]/75 leading-relaxed">{brand.description}</p>
              <div className="mt-5 text-xs uppercase tracking-[0.24em] text-[var(--color-cream)]/50">{brand.origin}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranges (if any) */}
      {hasRanges && (
        <section className="bg-[var(--color-cream)] py-24">
          <div className="container-x">
            <div className="mb-12" data-reveal>
              <div className="eyebrow text-[var(--color-ink-500)]"><span className="hairline"/><span>Collections</span></div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl">{brand.name} ranges</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {brand.ranges!.map((r) => {
                const rCount = PRODUCTS.filter((p) => p.brandSlug === brand.slug && p.rangeSlug === r.slug).length;
                return (
                  <Link
                    key={r.slug}
                    href={`/brands/${brand.slug}/${r.slug}`}
                    className="group relative overflow-hidden rounded-3xl border border-[var(--color-ink-900)]/8 p-10 min-h-[260px]"
                    style={{ background: `linear-gradient(140deg, ${r.accent}15, transparent 80%)` }}
                    data-reveal
                  >
                    <div className="absolute inset-0 grid-dots opacity-60"/>
                    <div className="relative">
                      <div className="eyebrow text-[var(--color-ox-500)]"><span className="hairline"/><span>Range</span></div>
                      <h3 className="mt-4 font-display text-3xl md:text-4xl text-[var(--color-ink-900)]">{r.name}</h3>
                      <p className="mt-3 text-[var(--color-ink-500)] italic font-display">{r.tagline}</p>
                      <p className="mt-4 text-sm text-[var(--color-ink-500)] leading-relaxed max-w-md">{r.usp}</p>
                      <div className="mt-8 flex items-center justify-between text-xs">
                        <span className="uppercase tracking-[0.22em] text-[var(--color-ink-500)]">{rCount} products</span>
                        <span className="flex items-center gap-2 text-[var(--color-ink-900)] group-hover:text-[var(--color-ox-500)]">
                          Explore the range
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
      )}

      {/* All products */}
      <section className="bg-[var(--color-cream)] pb-28">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between" data-reveal>
            <div>
              <div className="eyebrow text-[var(--color-ink-500)]"><span className="hairline"/><span>{hasRanges ? "All products" : "Products"}</span></div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl">{brand.name} catalog</h2>
            </div>
            <div className="text-sm text-[var(--color-ink-500)]">{products.length} products</div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} brandMark={brand.mark} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
