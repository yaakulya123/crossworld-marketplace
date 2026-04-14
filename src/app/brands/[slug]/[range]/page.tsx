import Link from "next/link";
import { notFound } from "next/navigation";
import { BRANDS, getBrand, getRange, getProductsByRange } from "@/data/brands";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  const params: { slug: string; range: string }[] = [];
  for (const b of BRANDS) {
    if (b.ranges) {
      for (const r of b.ranges) params.push({ slug: b.slug, range: r.slug });
    }
  }
  return params;
}

export default async function RangePage({
  params,
}: {
  params: Promise<{ slug: string; range: string }>;
}) {
  const { slug, range } = await params;
  const brand = getBrand(slug);
  const rangeObj = getRange(slug, range);
  if (!brand || !rangeObj) notFound();
  const products = getProductsByRange(slug, range);

  return (
    <>
      <section
        className="relative overflow-hidden pt-40 pb-24 text-[var(--color-cream)]"
        style={{ background: `linear-gradient(160deg, ${rangeObj.accent} 0%, #0a0706 100%)` }}
      >
        <div className="absolute inset-0 grid-lines opacity-25" />
        <div className="container-x relative">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-cream)]/70 flex items-center gap-3">
            <Link href="/brands" className="hover:text-[var(--color-gold)]">Brands</Link>
            <span>/</span>
            <Link href={`/brands/${brand.slug}`} className="hover:text-[var(--color-gold)]">{brand.name}</Link>
            <span>/</span>
            <span className="text-[var(--color-gold)]">{rangeObj.name}</span>
          </div>

          <div className="mt-10 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8" data-reveal>
              <div className="eyebrow text-[var(--color-gold)]"><span className="hairline"/><span>{brand.name} · Range</span></div>
              <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.92] tracking-[-0.02em]">{rangeObj.name}</h1>
              <p className="mt-6 text-xl md:text-2xl italic font-display text-[var(--color-cream)]/80">{rangeObj.tagline}</p>
            </div>
            <div className="md:col-span-4" data-reveal>
              <div className="rounded-2xl border border-[var(--color-cream)]/15 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">The USP</div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-cream)]/85">{rangeObj.usp}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between" data-reveal>
            <div>
              <div className="eyebrow text-[var(--color-ink-500)]"><span className="hairline"/><span>In the range</span></div>
              <h2 className="mt-5 font-display text-4xl">{products.length} product{products.length !== 1 && "s"}</h2>
            </div>
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
