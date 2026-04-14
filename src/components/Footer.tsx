import Link from "next/link";
import { BRANDS } from "@/data/brands";

export function Footer() {
  return (
    <footer id="contact" className="bg-[var(--color-ink-900)] text-[var(--color-cream)]/70 border-t border-[var(--color-cream)]/5">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="font-display text-2xl text-[var(--color-cream)]">Crossworld WLL</div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              A Bahrain-based marketplace of hand-picked in-house brands. We source directly — no
              third parties, no mark-ups — and stand behind every unit we ship across the Kingdom.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs">
              <span className="chip text-[var(--color-cream)]/70 border-[var(--color-cream)]/15 bg-transparent">🇧🇭 Based in Manama</span>
              <span className="chip text-[var(--color-cream)]/70 border-[var(--color-cream)]/15 bg-transparent">CR 00000</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">Brands</div>
            <ul className="mt-4 space-y-2 text-sm">
              {BRANDS.map((b) => (
                <li key={b.slug}>
                  <Link href={`/brands/${b.slug}`} className="hover:text-[var(--color-gold)]">{b.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">Company</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/#why" className="hover:text-[var(--color-gold)]">Why Crossworld</Link></li>
              <li><Link href="/brands" className="hover:text-[var(--color-gold)]">All brands</Link></li>
              <li><Link href="/#contact" className="hover:text-[var(--color-gold)]">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">Reach us</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Manama, Bahrain</li>
              <li><a href="mailto:hello@crossworld.bh" className="hover:text-[var(--color-gold)]">hello@crossworld.bh</a></li>
              <li><span>+973 0000 0000</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-cream)]/10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span>© {new Date().getFullYear()} Crossworld WLL. All rights reserved.</span>
          <span className="text-[var(--color-cream)]/40">Marketplace of curated brands · Kingdom of Bahrain</span>
        </div>
      </div>
    </footer>
  );
}
