"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { BRANDS } from "@/data/brands";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const { toggle, count } = useCart();
  const itemCount = useCart((s) => s.items.reduce((a, b) => a + b.qty, 0));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[var(--color-cream)]/90 backdrop-blur-md border-b border-[var(--color-ink-900)]/8" : "bg-transparent"
      }`}
    >
      {/* Top strip */}
      <div className="hidden md:block bg-[var(--color-ink-900)] text-[var(--color-cream)]/70 text-[11px]">
        <div className="container-x flex items-center justify-between py-1.5 tracking-wide">
          <span>Based in the Kingdom of Bahrain · Prices in BHD</span>
          <span className="text-[var(--color-gold)]">In-house curated brands · Eliminating third-party mark-ups</span>
        </div>
      </div>

      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/crossworld-logo.png" alt="Crossworld WLL" width={42} height={42} className="rounded-full" />
          <div>
            <div className="font-display text-lg leading-none tracking-tight">Crossworld</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-ink-500)]">Bahrain · WLL</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <div
            onMouseEnter={() => setBrandsOpen(true)}
            onMouseLeave={() => setBrandsOpen(false)}
            className="relative"
          >
            <Link href="/brands" className="hover:text-[var(--color-ox-500)] transition">Brands</Link>
            {brandsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 fade-in">
                <div className="w-[520px] rounded-2xl border border-[var(--color-ink-900)]/10 bg-[var(--color-cream)] p-4 shadow-2xl shadow-black/10">
                  <div className="grid grid-cols-2 gap-1">
                    {BRANDS.map((b) => (
                      <Link
                        key={b.slug}
                        href={`/brands/${b.slug}`}
                        className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-[var(--color-cream-dark)] transition"
                      >
                        <span className="font-display text-2xl w-8 text-center" style={{ color: b.accent }}>{b.mark}</span>
                        <span>
                          <span className="block font-medium">{b.name}</span>
                          <span className="block text-xs text-[var(--color-ink-500)]">{b.categoryLabel}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/#ranges" className="hover:text-[var(--color-ox-500)] transition">Ranges</Link>
          <Link href="/#why" className="hover:text-[var(--color-ox-500)] transition">Why Crossworld</Link>
          <Link href="/#contact" className="hover:text-[var(--color-ox-500)] transition">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex btn-ghost !py-2 !px-3 text-xs" aria-label="Search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg>
            Search
          </button>
          <button
            onClick={toggle}
            className="relative btn-primary !py-2 !px-4 text-xs"
            aria-label="Open basket"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 7h15l-2 11H8L6 4H3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="hidden sm:inline">Basket</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-ox-500)] text-[10px] font-medium px-1.5">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
