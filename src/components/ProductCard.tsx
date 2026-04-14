import Link from "next/link";
import { Product } from "@/data/brands";
import { ProductVisual } from "./ProductVisual";
import { BHD } from "@/lib/format";
import { AddToCartButton } from "./AddToCartButton";
import { BRANDS } from "@/data/brands";

const RATINGS: Record<string, { stars: number; count: number }> = {};
function rating(slug: string) {
  if (RATINGS[slug]) return RATINGS[slug];
  // deterministic pseudo-rating
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const stars = 4 + (h % 11) / 10;
  const count = 24 + (h % 480);
  RATINGS[slug] = { stars: Math.round(stars * 10) / 10, count };
  return RATINGS[slug];
}

export function ProductCard({ product }: { product: Product }) {
  const brand = BRANDS.find((b) => b.slug === product.brandSlug)!;
  const r = rating(product.slug);
  const save = product.compareAtBHD ? Math.round((1 - product.priceBHD / product.compareAtBHD) * 100) : 0;

  return (
    <article className="card group overflow-hidden flex flex-col" data-reveal>
      <Link href={`/product/${product.slug}`} className="block relative">
        <div className="aspect-square overflow-hidden bg-[var(--color-ink-50)]">
          <ProductVisual
            shade={product.shade}
            category={product.category}
            mark={brand.mark}
            className="h-full w-full transition-transform duration-700 group-hover:scale-[1.05]"
          />
        </div>
        <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
          {save > 0 && <span className="badge badge-deal">-{save}%</span>}
          {r.count > 300 && <span className="badge badge-hot">Hot</span>}
        </div>
        <span
          aria-label="Wishlist"
          className="absolute top-3 right-3 h-8 w-8 grid place-items-center rounded-full bg-white/90 backdrop-blur text-[var(--color-ink-500)] shadow-sm transition opacity-0 group-hover:opacity-100 pointer-events-none"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 8.5A5.5 5.5 0 0 0 12 5a5.5 5.5 0 0 0-8 3.5C4 15 12 20 12 20s8-5 8-11.5z"/></svg>
        </span>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <Link href={`/brands/${brand.slug}`} className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-ink-500)] hover:text-[var(--color-brand-500)]">
          {brand.name}
        </Link>
        <Link href={`/product/${product.slug}`} className="mt-1 text-[14.5px] font-medium text-[var(--color-ink-900)] leading-snug line-clamp-2 hover:text-[var(--color-brand-600)]">
          {product.name}
        </Link>

        <div className="mt-2 flex items-center gap-1.5 text-xs">
          <span className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < Math.round(r.stars) ? "star" : "text-[var(--color-ink-200)]"}>★</span>
            ))}
          </span>
          <span className="text-[var(--color-ink-500)]">{r.stars} ({r.count})</span>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-[18px] font-bold text-[var(--color-brand-600)]">{BHD(product.priceBHD)}</span>
          {product.compareAtBHD && (
            <span className="text-xs text-[var(--color-ink-400)] line-through">{BHD(product.compareAtBHD)}</span>
          )}
        </div>
        {save > 0 && (
          <div className="text-[11px] text-[var(--color-accent-green)] font-semibold mt-0.5">
            Save BHD {(product.compareAtBHD! - product.priceBHD).toFixed(3)}
          </div>
        )}

        <div className="mt-auto pt-3">
          <AddToCartButton product={product} compact />
        </div>
      </div>
    </article>
  );
}
