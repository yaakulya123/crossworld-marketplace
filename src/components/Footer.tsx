import Link from "next/link";
import Image from "next/image";
import { BRANDS } from "@/data/brands";

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink-900)] text-white/80 mt-auto">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <Image src="/images/crossworld-logo.png" alt="Crossworld" width={40} height={40} className="rounded-full ring-1 ring-white/20" />
              <div className="leading-none">
                <div className="font-display text-xl font-semibold text-white">Crossworld</div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-white/50 mt-0.5">Bahrain · WLL</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              A Bahrain-based marketplace of hand-picked in-house brands. We source direct — no
              third parties between us and the shelf.
            </p>
            <div className="mt-5 flex gap-2 flex-wrap">
              <span className="text-[11px] bg-white/5 border border-white/10 rounded-md px-2.5 py-1 inline-flex items-center gap-1.5"><span className="inline-block w-3.5 h-2.5 rounded-[1px] overflow-hidden" style={{background: "linear-gradient(to right, #fff 28%, #CE1126 28%)"}} /> Manama</span>
              <span className="text-[11px] bg-white/5 border border-white/10 rounded-md px-2.5 py-1">CR 00000</span>
              <span className="text-[11px] bg-white/5 border border-white/10 rounded-md px-2.5 py-1">BHD pricing</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white">Shop</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {BRANDS.map((b) => (
                <li key={b.slug}>
                  <Link href={`/brands/${b.slug}`} className="text-white/60 hover:text-white">{b.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white">Support</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="#" className="text-white/60 hover:text-white">Track order</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white">Returns</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white">Warranty</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white">Help center</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white">Company</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="#" className="text-white/60 hover:text-white">About</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white">Contact</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white">Terms</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white">Privacy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white">Reach us</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>Manama, Bahrain</li>
              <li><a href="mailto:hello@crossworld.bh" className="hover:text-white">hello@crossworld.bh</a></li>
              <li>+973 0000 0000</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Crossworld WLL · Kingdom of Bahrain</span>
          <div className="flex items-center gap-2">
            <span className="text-white/70 mr-2">We accept:</span>
            {["BENEFIT", "VISA", "Mastercard", "Apple Pay", "COD"].map((p) => (
              <span key={p} className="bg-white/5 border border-white/10 rounded px-2 py-1 text-[10.5px]">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
