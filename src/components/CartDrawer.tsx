"use client";
import { useCart } from "@/lib/cart";
import { BHD } from "@/lib/format";
import Link from "next/link";
import { ProductVisual } from "./ProductVisual";
import { useEffect } from "react";

export function CartDrawer() {
  const { isOpen, close, items, setQty, remove, subtotal } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const total = subtotal();

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-[var(--color-ink-900)]/60 fade-in" onClick={close} />
      <aside className="absolute right-0 top-0 h-full w-full sm:w-[460px] bg-[var(--color-cream)] cart-in flex flex-col shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--color-ink-900)]/10 px-6 py-5">
          <div>
            <div className="eyebrow text-[var(--color-ink-500)]"><span className="hairline"/>Your Basket</div>
            <h2 className="font-display text-2xl mt-1">{items.length} {items.length === 1 ? "item" : "items"}</h2>
          </div>
          <button onClick={close} aria-label="Close basket" className="rounded-full p-2 hover:bg-[var(--color-cream-dark)] transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6l12 12M6 18L18 6"/></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <div className="font-display text-3xl text-[var(--color-ink-700)]">Empty basket.</div>
              <p className="mt-3 text-sm text-[var(--color-ink-500)] max-w-xs mx-auto">
                Start with a Milton Pro Cook pan, a Zojirushi mug, or a Blue Star inverter.
              </p>
              <Link href="/brands" onClick={close} className="btn-accent mt-8 inline-flex">Browse brands</Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.slug} className="flex gap-4 border-b border-[var(--color-ink-900)]/8 pb-5">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <ProductVisual shade={item.shade} category={item.category} className="h-full w-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.slug}`} onClick={close} className="block font-medium leading-tight hover:underline">
                      {item.name}
                    </Link>
                    <div className="text-xs text-[var(--color-ink-500)] mt-0.5 uppercase tracking-wider">{item.category}</div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-[var(--color-ink-900)]/15">
                        <button onClick={() => setQty(item.slug, item.qty - 1)} className="px-3 py-1 hover:bg-[var(--color-cream-dark)] rounded-l-full">−</button>
                        <span className="px-3 text-sm tabular-nums">{item.qty}</span>
                        <button onClick={() => setQty(item.slug, item.qty + 1)} className="px-3 py-1 hover:bg-[var(--color-cream-dark)] rounded-r-full">+</button>
                      </div>
                      <div className="text-sm font-medium">{BHD(item.priceBHD * item.qty)}</div>
                    </div>
                    <button onClick={() => remove(item.slug)} className="mt-2 text-[11px] text-[var(--color-ink-300)] hover:text-[var(--color-ox-500)] uppercase tracking-wider">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[var(--color-ink-900)]/10 px-6 py-5 space-y-4 bg-[var(--color-cream-dark)]/40">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-[var(--color-ink-500)] uppercase tracking-wider">Subtotal</span>
              <span className="font-display text-2xl">{BHD(total)}</span>
            </div>
            <p className="text-xs text-[var(--color-ink-500)]">VAT & delivery calculated at inquiry stage. Bahrain-wide delivery.</p>
            <button className="btn-accent w-full justify-center">
              Request Inquiry
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
            <button onClick={close} className="block w-full text-center text-xs uppercase tracking-[0.22em] text-[var(--color-ink-500)] hover:text-[var(--color-ink-900)]">
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
