import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProduct, getBrand, getRange, getProductsByBrand } from "@/data/brands";
import { ProductVisual } from "@/components/ProductVisual";
import { ProductCard } from "@/components/ProductCard";
import { AddToCartButton } from "@/components/AddToCartButton";
import { BHD } from "@/lib/format";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const brand = getBrand(product.brandSlug)!;
  const range = product.rangeSlug ? getRange(brand.slug, product.rangeSlug) : null;
  const related = getProductsByBrand(brand.slug).filter((p) => p.slug !== slug).slice(0, 4);
  const save = product.compareAtBHD ? Math.round((1 - product.priceBHD / product.compareAtBHD) * 100) : 0;

  return (
    <>
      {/* Breadcrumb bar */}
      <div className="bg-[var(--color-ink-50)] border-b border-[var(--color-ink-100)]">
        <div className="container-x py-3 text-xs uppercase tracking-wider text-[var(--color-ink-500)] flex items-center gap-2 overflow-x-auto">
          <Link href="/" className="hover:text-[var(--color-brand-500)]">Home</Link>
          <span>/</span>
          <Link href="/brands" className="hover:text-[var(--color-brand-500)]">Brands</Link>
          <span>/</span>
          <Link href={`/brands/${brand.slug}`} className="hover:text-[var(--color-brand-500)]">{brand.name}</Link>
          {range && (<><span>/</span><Link href={`/brands/${brand.slug}/${range.slug}`} className="hover:text-[var(--color-brand-500)]">{range.name}</Link></>)}
          <span>/</span>
          <span className="text-[var(--color-ink-900)] truncate">{product.name}</span>
        </div>
      </div>

      <section className="py-8 md:py-12">
        <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14">
          {/* Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-[var(--color-ink-50)] border border-[var(--color-ink-100)]">
              <ProductVisual shade={product.shade} category={product.category} mark={brand.mark} className="h-full w-full" />
              {save > 0 && (
                <span className="absolute top-4 left-4 badge badge-deal">-{save}%</span>
              )}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <button key={i} className={`aspect-square overflow-hidden rounded-lg border bg-[var(--color-ink-50)] ${i === 0 ? "border-[var(--color-ink-900)]" : "border-[var(--color-ink-100)] hover:border-[var(--color-ink-300)]"}`}>
                  <ProductVisual shade={product.shade} category={product.category} mark={brand.mark} className="h-full w-full opacity-90" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[var(--color-ink-500)]">
              <Link href={`/brands/${brand.slug}`} className="font-semibold text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)]">{brand.name}</Link>
              {range && <><span>·</span><Link href={`/brands/${brand.slug}/${range.slug}`} className="hover:text-[var(--color-brand-500)]">{range.name}</Link></>}
            </div>

            <h1 className="mt-2 font-display text-3xl md:text-4xl font-semibold leading-[1.1]">{product.name}</h1>
            <p className="mt-2 text-lg italic font-display text-[var(--color-ink-500)]">{product.tagline}</p>

            <div className="mt-4 flex items-center gap-3 text-sm">
              <span className="stars text-[14px]">★★★★★</span>
              <span className="text-[var(--color-ink-500)]">4.6 · 238 reviews</span>
              <span className="text-[var(--color-ink-300)]">|</span>
              <span className="text-[var(--color-accent-green)] font-semibold inline-flex items-center gap-1"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>In stock</span>
            </div>

            <div className="mt-6 flex items-baseline gap-3 pb-6 border-b border-[var(--color-ink-100)]">
              <span className="font-display text-4xl font-bold text-[var(--color-brand-600)]">{BHD(product.priceBHD)}</span>
              {product.compareAtBHD && (
                <>
                  <span className="text-lg text-[var(--color-ink-400)] line-through">{BHD(product.compareAtBHD)}</span>
                  <span className="badge badge-deal">-{save}%</span>
                </>
              )}
            </div>
            <div className="mt-1 text-xs text-[var(--color-ink-500)]">Price incl. all taxes · Bahrain shelf price</div>

            <div className="mt-6">
              <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-ink-500)]">Why this one</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {product.usp.map((u) => (
                  <li key={u} className="flex items-start gap-2 text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="mt-0.5 shrink-0 text-[var(--color-accent-green)]"><path d="M5 13l4 4L19 7"/></svg>
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center rounded-lg border border-[var(--color-ink-200)] bg-white">
                <button className="px-3 py-2.5 hover:bg-[var(--color-ink-50)] rounded-l-lg">−</button>
                <span className="px-4 text-sm font-medium">1</span>
                <button className="px-3 py-2.5 hover:bg-[var(--color-ink-50)] rounded-r-lg">+</button>
              </div>
              <AddToCartButton product={product} />
              <button className="btn btn-outline" aria-label="Wishlist">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 8.5A5.5 5.5 0 0 0 12 5a5.5 5.5 0 0 0-8 3.5C4 15 12 20 12 20s8-5 8-11.5z"/></svg>
              </button>
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { t: "Free BH delivery", s: "On BHD 20+" },
                { t: "2-year warranty", s: "Brand-backed" },
                { t: "Easy returns", s: "14-day window" },
              ].map((f) => (
                <div key={f.t} className="flex items-start gap-2.5 text-sm p-3 rounded-lg bg-[var(--color-ink-50)] border border-[var(--color-ink-100)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[var(--color-brand-500)] shrink-0 mt-0.5"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/></svg>
                  <div>
                    <div className="font-semibold text-[13px]">{f.t}</div>
                    <div className="text-[11.5px] text-[var(--color-ink-500)]">{f.s}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-ink-500)] mb-3">Description</h3>
              <p className="text-[15px] text-[var(--color-ink-700)] leading-relaxed">{product.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-ink-500)] mb-3">Specifications</h3>
              <dl className="divide-y divide-[var(--color-ink-100)] border-y border-[var(--color-ink-100)]">
                {Object.entries(product.specs).map(([k, v]) => (
                  <div key={k} className="flex justify-between py-2.5 text-sm">
                    <dt className="text-[var(--color-ink-500)]">{k}</dt>
                    <dd className="font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 bg-[var(--color-ink-50)]">
          <div className="container-x">
            <div className="flex items-end justify-between mb-6">
              <div>
                <div className="eyebrow"><span className="hairline"/>More from {brand.name}</div>
                <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold">Customers also viewed</h2>
              </div>
              <Link href={`/brands/${brand.slug}`} className="text-sm font-semibold text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)]">See all →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {related.map((p) => (<ProductCard key={p.slug} product={p} />))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
