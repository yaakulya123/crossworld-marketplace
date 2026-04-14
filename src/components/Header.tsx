"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { BRANDS } from "@/data/brands";

const CATEGORIES = [
  { label: "Televisions", href: "/brands/jvc" },
  { label: "Air Conditioning", href: "/brands/bluestar" },
  { label: "Cookware", href: "/brands/milton/pro-cook" },
  { label: "Insulated Bottles", href: "/brands/milton/insulated-bottles" },
  { label: "Premium Drinkware", href: "/brands/zojirushi" },
  { label: "Offers", href: "/#deals" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggle = useCart((s) => s.toggle);
  const itemCount = useCart((s) => s.items.reduce((a, b) => a + b.qty, 0));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      {/* Announcement bar */}
      <div className="bg-[var(--color-ink-900)] text-white text-[12px]">
        <div className="container-x flex items-center justify-between py-2">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-400)] pulse-dot" />
            Free delivery across Bahrain on orders above BHD 20
          </span>
          <div className="hidden md:flex items-center gap-6 text-white/70">
            <Link href="#" className="hover:text-white">Track order</Link>
            <Link href="#" className="hover:text-white">Help</Link>
            <span className="inline-flex items-center gap-1.5"><span className="inline-block w-3.5 h-2.5 rounded-[1px] overflow-hidden" style={{background: "linear-gradient(to right, #fff 28%, #CE1126 28%)"}} /> BHD</span>
            <span>EN · AR</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className={`bg-white border-b ${scrolled ? "border-[var(--color-ink-200)] shadow-[0_1px_0_rgba(10,12,17,0.04)]" : "border-[var(--color-ink-100)]"}`}>
        <div className="container-x flex items-center gap-4 md:gap-6 py-3 md:py-4">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/images/crossworld-logo.png" alt="Crossworld WLL" width={40} height={40} className="rounded-full ring-1 ring-[var(--color-ink-100)]" />
            <div className="leading-none">
              <div className="font-display text-[22px] font-semibold">Crossworld</div>
              <div className="text-[9.5px] uppercase tracking-[0.24em] text-[var(--color-ink-500)] mt-0.5">Bahrain Marketplace</div>
            </div>
          </Link>

          {/* Search */}
          <form role="search" className="hidden md:flex flex-1 max-w-2xl mx-auto">
            <div className="flex w-full rounded-full border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] focus-within:border-[var(--color-brand-500)] focus-within:bg-white transition overflow-hidden">
              <select className="bg-transparent text-sm px-4 py-2.5 border-r border-[var(--color-ink-200)] outline-none">
                <option>All brands</option>
                {BRANDS.map((b) => (<option key={b.slug} value={b.slug}>{b.name}</option>))}
              </select>
              <input
                type="text"
                placeholder="Search TVs, ACs, Milton Pro Cook, Zojirushi…"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-[var(--color-ink-400)]"
              />
              <button type="submit" className="px-5 bg-[var(--color-brand-500)] text-white hover:bg-[var(--color-brand-600)] transition" aria-label="Search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg>
              </button>
            </div>
          </form>

          <div className="flex items-center gap-1 md:gap-2 ml-auto">
            <button className="btn btn-ghost hidden md:inline-flex !px-3" aria-label="Account">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
              <span className="text-[13px]">Account</span>
            </button>
            <button className="btn btn-ghost hidden md:inline-flex !px-3" aria-label="Wishlist">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 8.5A5.5 5.5 0 0 0 12 5a5.5 5.5 0 0 0-8 3.5C4 15 12 20 12 20s8-5 8-11.5z"/></svg>
            </button>
            <button onClick={toggle} className="relative btn btn-dark !px-4" aria-label="Open basket">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 7h15l-2 11H8L6 4H3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="hidden sm:inline">Basket</span>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-brand-500)] text-white text-[10px] font-bold px-1.5 ring-2 ring-white">
                  {itemCount}
                </span>
              )}
            </button>
            <button onClick={() => setMobileOpen((o) => !o)} className="md:hidden btn btn-ghost !px-2" aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            </button>
          </div>
        </div>

        {/* Category row */}
        <div className="hidden md:block border-t border-[var(--color-ink-100)]">
          <div className="container-x flex items-center gap-1 py-2 overflow-x-auto scroll-x">
            <Link href="/brands" className="chip chip-active scroll-snap">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
              All Brands
            </Link>
            {CATEGORIES.map((c) => (
              <Link key={c.href + c.label} href={c.href} className="chip scroll-snap whitespace-nowrap">{c.label}</Link>
            ))}
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[var(--color-ink-100)] bg-white fade-in">
            <div className="container-x py-3">
              <form className="flex rounded-full border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] overflow-hidden mb-4">
                <input type="text" placeholder="Search products…" className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none" />
                <button className="px-4 bg-[var(--color-brand-500)] text-white"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg></button>
              </form>
              <div className="flex flex-wrap gap-2">
                <Link href="/brands" onClick={() => setMobileOpen(false)} className="chip">All Brands</Link>
                {CATEGORIES.map((c) => (
                  <Link key={c.label} href={c.href} onClick={() => setMobileOpen(false)} className="chip">{c.label}</Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
