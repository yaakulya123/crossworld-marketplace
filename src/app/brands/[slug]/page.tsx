import Link from "next/link";
import { notFound } from "next/navigation";
import { BRANDS, getBrand, getProductsByBrand, PRODUCTS } from "@/data/brands";
import { ProductCard } from "@/components/ProductCard";
import { BrandLogo } from "@/components/BrandLogo";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const products = getProductsByBrand(slug);
  const hasRanges = (brand.ranges?.length ?? 0) > 0;
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <>
      {/* Brand banner */}
      <section className="relative overflow-hidden text-white" style={{ background: `linear-gradient(135deg, ${brand.accent} 0%, #0a0c11 110%)` }}>
        <div className="absolute inset-0 grid-dots opacity-25" />
        <div className="absolute -right-20 -top-10 font-display opacity-[0.08] text-[420px] leading-none">{brand.mark}</div>
        <div className="container-x relative py-10 md:py-14">
          <div className="text-xs uppercase tracking-wider text-white/70 flex items-center gap-2">
            <Link href="/" className="hover:text-[var(--color-brand-300)]">Home</Link>
            <span>/</span>
            <Link href="/brands" className="hover:text-[var(--color-brand-300)]">Brands</Link>
            <span>/</span>
            <span className="text-white">{brand.name}</span>
          </div>
          <div className="mt-6 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl ring-1 ring-white/15 px-6 py-5 inline-flex items-center">
                <BrandLogo brand={brand} height={brand.logo ? 44 : 40} variant="light" />
              </div>
              <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold leading-none">{brand.name}</h1>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-3">{brand.origin}</div>
              <p className="mt-5 text-lg italic font-display text-white/85 max-w-xl">{brand.tagline}</p>
            </div>
            <div className="md:col-span-4">
              <p className="text-white/70 leading-relaxed text-[14.5px]">{brand.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <span key={c} className="text-[11px] bg-white/10 border border-white/15 rounded-md px-2.5 py-1">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranges strip */}
      {hasRanges && (
        <section className="py-10 bg-[var(--color-ink-50)]">
          <div className="container-x">
            <div className="eyebrow"><span className="hairline"/>Collections</div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold">{brand.name} ranges</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {brand.ranges!.map((r) => {
                const rCount = PRODUCTS.filter((p) => p.brandSlug === brand.slug && p.rangeSlug === r.slug).length;
                return (
                  <Link
                    key={r.slug}
                    href={`/brands/${brand.slug}/${r.slug}`}
                    className="card group relative overflow-hidden p-6 flex items-center gap-5 min-h-[140px]"
                  >
                    <div className="h-20 w-20 rounded-xl grid place-items-center font-display text-xl font-semibold shrink-0" style={{ background: `${r.accent}15`, color: r.accent }}>
                      {r.name.split(" ").map((w) => w[0]).join("").slice(0,2)}
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-xl font-semibold">{r.name}</div>
                      <div className="text-[12px] text-[var(--color-ink-500)] italic">{r.tagline}</div>
                      <div className="mt-2 text-xs text-[var(--color-ink-500)] flex items-center gap-1.5">
                        {rCount} products
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Products */}
      <section className="py-10 md:py-12">
        <div className="container-x">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold">{hasRanges ? "All products" : "Products"}</h2>
              <div className="text-sm text-[var(--color-ink-500)] mt-1">{products.length} items in {brand.name}</div>
            </div>
            <div className="flex items-center gap-2">
              <select className="chip !bg-white !cursor-pointer">
                <option>Sort: Featured</option>
                <option>Price: Low → High</option>
                <option>Price: High → Low</option>
                <option>Newest</option>
              </select>
              <select className="chip !bg-white !cursor-pointer">
                <option>Any price</option>
                <option>Under BHD 25</option>
                <option>BHD 25–100</option>
                <option>BHD 100+</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {products.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
