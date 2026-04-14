"use client";
import { useCart } from "@/lib/cart";
import { BHD } from "@/lib/format";
import Link from "next/link";
import { ProductVisual } from "./ProductVisual";
import { IconBag, IconCheck, IconX } from "./Icon";
import { useEffect } from "react";

export function CartDrawer() {
  const { isOpen, close, items, setQty, remove, subtotal } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const total = subtotal();
  const freeShipAt = 20;
  const remaining = Math.max(0, freeShipAt - total);
  const progress = Math.min(100, (total / freeShipAt) * 100);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-[var(--color-ink-900)]/50 fade-in" onClick={close} />
      <aside className="absolute right-0 top-0 h-full w-full sm:w-[440px] bg-white cart-in flex flex-col shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--color-ink-100)] px-5 py-4">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 7h15l-2 11H8L6 4H3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h2 className="font-display text-xl font-semibold">Your basket</h2>
            <span className="ml-1 text-sm text-[var(--color-ink-500)]">({items.length})</span>
          </div>
          <button onClick={close} aria-label="Close basket" className="rounded-full p-2 hover:bg-[var(--color-ink-50)] transition">
            <IconX size={18} />
          </button>
        </div>

        {items.length > 0 && (
          <div className="px-5 pt-4 pb-2">
            {remaining > 0 ? (
              <p className="text-xs text-[var(--color-ink-500)]">
                Add <span className="font-semibold text-[var(--color-ink-900)]">{BHD(remaining)}</span> more for free Bahrain delivery
              </p>
            ) : (
              <p className="text-xs text-[var(--color-accent-green)] font-semibold inline-flex items-center gap-1.5">
                <IconCheck size={14} /> You unlocked free delivery
              </p>
            )}
            <div className="mt-2 h-1.5 w-full bg-[var(--color-ink-100)] rounded-full overflow-hidden">
              <div className="h-full bg-[var(--color-brand-500)] transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="py-20 text-center">
              <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-[var(--color-ink-50)] grid place-items-center text-[var(--color-ink-400)]">
                <IconBag size={28} />
              </div>
              <div className="font-display text-xl font-semibold">Your basket is empty</div>
              <p className="mt-2 text-sm text-[var(--color-ink-500)] max-w-xs mx-auto">
                Start with a Milton Pro Cook, a Zojirushi mug, or a Blue Star AC.
              </p>
              <Link href="/brands" onClick={close} className="btn btn-brand mt-6 inline-flex">Browse brands</Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.slug} className="flex gap-3 pb-4 border-b border-[var(--color-ink-100)]">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-[var(--color-ink-50)]">
                    <ProductVisual shade={item.shade} category={item.category} className="h-full w-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.slug}`} onClick={close} className="block text-sm font-medium leading-tight hover:text-[var(--color-brand-600)] line-clamp-2">
                      {item.name}
                    </Link>
                    <div className="text-[11px] text-[var(--color-ink-500)] mt-0.5 uppercase tracking-wider">{item.category}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-lg border border-[var(--color-ink-200)]">
                        <button onClick={() => setQty(item.slug, item.qty - 1)} className="px-2.5 py-1 text-sm hover:bg-[var(--color-ink-50)] rounded-l-lg">−</button>
                        <span className="px-3 text-sm tabular-nums font-medium">{item.qty}</span>
                        <button onClick={() => setQty(item.slug, item.qty + 1)} className="px-2.5 py-1 text-sm hover:bg-[var(--color-ink-50)] rounded-r-lg">+</button>
                      </div>
                      <div className="text-sm font-bold text-[var(--color-brand-600)]">{BHD(item.priceBHD * item.qty)}</div>
                    </div>
                    <button onClick={() => remove(item.slug)} className="mt-1.5 text-[10.5px] text-[var(--color-ink-400)] hover:text-[var(--color-brand-500)] uppercase tracking-wider">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[var(--color-ink-100)] px-5 py-4 space-y-3 bg-[var(--color-ink-50)]">
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-[var(--color-ink-500)]">Subtotal</span>
              <span className="font-bold text-lg text-[var(--color-ink-900)]">{BHD(total)}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-[var(--color-ink-500)]">
              <span>Delivery</span>
              <span>{total >= freeShipAt ? "Free" : "Calculated at checkout"}</span>
            </div>
            <button className="btn btn-brand w-full !py-3">
              Request inquiry →
            </button>
            <button onClick={close} className="w-full text-center text-xs text-[var(--color-ink-500)] hover:text-[var(--color-ink-900)] py-1">
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
