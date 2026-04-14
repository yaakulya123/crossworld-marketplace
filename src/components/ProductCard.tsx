import Link from "next/link";
import { Product } from "@/data/brands";
import { ProductVisual } from "./ProductVisual";
import { BHD } from "@/lib/format";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard({ product, brandMark }: { product: Product; brandMark: string }) {
  return (
    <article className="group flex flex-col" data-reveal>
      <Link href={`/product/${product.slug}`} className="block">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-ink-900)]/8 bg-white relative">
          <ProductVisual shade={product.shade} category={product.category} mark={brandMark} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]" />
          <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.22em] text-white/80">{product.category}</div>
          {product.compareAtBHD && (
            <div className="absolute top-3 right-3 rounded-full bg-[var(--color-ox-500)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-cream)] px-2.5 py-1">
              Save {Math.round((1 - product.priceBHD / product.compareAtBHD) * 100)}%
            </div>
          )}
        </div>
        <div className="mt-5">
          <h3 className="font-display text-xl text-[var(--color-ink-900)] leading-tight">{product.name}</h3>
          <p className="mt-1 text-sm text-[var(--color-ink-500)]">{product.tagline}</p>
        </div>
      </Link>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <div className="text-lg font-medium text-[var(--color-ink-900)]">{BHD(product.priceBHD)}</div>
          {product.compareAtBHD && (
            <div className="text-xs text-[var(--color-ink-300)] line-through">{BHD(product.compareAtBHD)}</div>
          )}
        </div>
        <AddToCartButton product={product} compact />
      </div>
    </article>
  );
}
