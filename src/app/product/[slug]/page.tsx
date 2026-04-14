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
  const related = getProductsByBrand(brand.slug).filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="pt-36 pb-20 bg-[var(--color-cream)]">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-ink-500)] flex items-center gap-3">
            <Link href="/brands" className="hover:text-[var(--color-ox-500)]">Brands</Link>
            <span>/</span>
            <Link href={`/brands/${brand.slug}`} className="hover:text-[var(--color-ox-500)]">{brand.name}</Link>
            {range && (
              <>
                <span>/</span>
                <Link href={`/brands/${brand.slug}/${range.slug}`} className="hover:text-[var(--color-ox-500)]">{range.name}</Link>
              </>
            )}
            <span>/</span>
            <span className="text-[var(--color-ink-900)]">{product.name}</span>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="aspect-square overflow-hidden rounded-3xl border border-[var(--color-ink-900)]/8 relative" data-reveal>
              <ProductVisual shade={product.shade} category={product.category} mark={brand.mark} className="h-full w-full" />
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.24em] text-white/70">{product.category}</div>
            </div>

            <div data-reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[var(--color-ink-500)]">
                <span style={{ color: brand.accent }} className="font-display text-lg">{brand.mark}</span>
                <span>{brand.name}</span>
                {range && <><span>·</span><span>{range.name}</span></>}
              </div>
              <h1 className="mt-5 font-display text-5xl md:text-6xl leading-[1] tracking-[-0.01em]">{product.name}</h1>
              <p className="mt-4 text-xl font-display italic text-[var(--color-ox-500)]">{product.tagline}</p>

              <div className="mt-8 flex items-baseline gap-4">
                <span className="font-display text-4xl">{BHD(product.priceBHD)}</span>
                {product.compareAtBHD && (
                  <span className="text-lg text-[var(--color-ink-300)] line-through">{BHD(product.compareAtBHD)}</span>
                )}
                {product.compareAtBHD && (
                  <span className="text-xs text-[var(--color-ox-500)] uppercase tracking-wider">
                    You save {BHD(product.compareAtBHD - product.priceBHD)}
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs text-[var(--color-ink-500)]">Tentative shelf price. VAT calculated at inquiry stage.</p>

              <p className="mt-8 text-lg text-[var(--color-ink-700)] leading-relaxed">{product.description}</p>

              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                {product.usp.map((u) => (
                  <li key={u} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1 w-3 shrink-0 bg-[var(--color-ox-500)]" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <AddToCartButton product={product} />
                <Link href="#contact" className="btn-ghost">Ask about this product</Link>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-[var(--color-ink-900)]/10 pt-8">
                {Object.entries(product.specs).map(([k, v]) => (
                  <div key={k}>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-ox-500)]">{k}</div>
                    <div className="mt-1 text-sm">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[var(--color-cream-dark)]/60 py-24">
          <div className="container-x">
            <div className="mb-10" data-reveal>
              <div className="eyebrow text-[var(--color-ink-500)]"><span className="hairline"/><span>More from {brand.name}</span></div>
              <h2 className="mt-5 font-display text-4xl">Pairs well with</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} brandMark={brand.mark} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
