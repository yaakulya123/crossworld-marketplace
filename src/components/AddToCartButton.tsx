"use client";
import { Product } from "@/data/brands";
import { useCart } from "@/lib/cart";
import { useState } from "react";

export function AddToCartButton({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false);
  const onClick = () => {
    add({
      slug: product.slug,
      brandSlug: product.brandSlug,
      name: product.name,
      priceBHD: product.priceBHD,
      shade: product.shade,
      category: product.category,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };
  return (
    <button
      onClick={onClick}
      className={compact ? "btn-accent !px-4 !py-2 text-xs" : "btn-accent"}
      aria-label={`Add ${product.name} to basket`}
    >
      {added ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
          <span>Added</span>
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 7h15l-2 11H8L6 4H3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>{compact ? "Add" : "Add to basket"}</span>
        </>
      )}
    </button>
  );
}
