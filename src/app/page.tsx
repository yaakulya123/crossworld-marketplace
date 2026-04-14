import Link from "next/link";
import { BRANDS, PRODUCTS, getBrand, getProductsByRange } from "@/data/brands";
import { ProductCard } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { BHD } from "@/lib/format";

export default function Home() {
  const milton = getBrand("milton")!;
  const proCookProducts = getProductsByRange("milton", "pro-cook");
  const bottleProducts = getProductsByRange("milton", "insulated-bottles");
  const featured = PRODUCTS.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--color-ink-900)] text-[var(--color-cream)] pt-36 pb-28 md:pt-48 md:pb-40">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute -top-40 -right-40 h-[620px] w-[620px] rounded-full bg-[var(--color-ox-500)]/25 blur-[160px]" />
        <div className="absolute -bottom-20 -left-40 h-[520px] w-[520px] rounded-full bg-[var(--color-ox-700)]/35 blur-[140px]" />

        <div className="container-x relative">
          <div className="grid gap-14 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8" data-reveal>
              <div className="eyebrow text-[var(--color-gold)]">
                <span className="hairline" />
                <span>Bahrain · Curated Brands · Est. Crossworld WLL</span>
              </div>
              <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-[112px] leading-[0.92] tracking-[-0.02em]">
                Five brands.<br />
                <span className="italic text-[var(--color-ox-300)]">Zero middlemen</span>.
              </h1>
              <p className="mt-10 max-w-xl text-lg md:text-xl leading-relaxed text-[var(--color-cream)]/75">
                Crossworld is a Bahrain-based marketplace of hand-picked in-house brands —
                sourced direct from JVC, Aftron, Blue Star, Zojirushi, and Milton. Shelf prices
                without the third-party spread.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/brands" className="btn-accent">
                  Browse our brands
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/brands/milton/pro-cook" className="btn-ghost text-[var(--color-cream)] border-[var(--color-cream)]/30">
                  Milton Pro Cook
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4" data-reveal>
              <div className="border-l border-[var(--color-gold)]/40 pl-6 space-y-6">
                <div>
                  <div className="font-display text-5xl text-[var(--color-gold)]">5</div>
                  <div className="mt-1 text-sm text-[var(--color-cream)]/60">Curated brands. No spill-over catalog.</div>
                </div>
                <div>
                  <div className="font-display text-5xl text-[var(--color-gold)]">BHD</div>
                  <div className="mt-1 text-sm text-[var(--color-cream)]/60">Priced in Bahraini Dinar. Paid here, delivered here.</div>
                </div>
                <div>
                  <div className="font-display text-5xl text-[var(--color-gold)]">48h</div>
                  <div className="mt-1 text-sm text-[var(--color-cream)]/60">Typical Bahrain-wide delivery window.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-24 border-y border-[var(--color-cream)]/10 bg-[var(--color-ink-900)] overflow-hidden">
          <div className="flex whitespace-nowrap marquee-track py-4 text-xs tracking-[0.3em] uppercase text-[var(--color-cream)]/45">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-10 pr-10">
                <span>JVC</span><span className="text-[var(--color-ox-400)]">◆</span>
                <span>Aftron</span><span className="text-[var(--color-ox-400)]">◆</span>
                <span>Blue Star</span><span className="text-[var(--color-ox-400)]">◆</span>
                <span>Zojirushi</span><span className="text-[var(--color-ox-400)]">◆</span>
                <span>Milton Pro Cook</span><span className="text-[var(--color-ox-400)]">◆</span>
                <span>Milton Thermosteel</span><span className="text-[var(--color-ox-400)]">◆</span>
                <span>Delivered Across Bahrain</span><span className="text-[var(--color-ox-400)]">◆</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands" className="bg-[var(--color-cream)] py-28 md:py-36">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-7" data-reveal>
              <div className="eyebrow text-[var(--color-ink-500)]"><span className="hairline"/><span>Our brands</span></div>
              <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.98] tracking-[-0.01em]">
                Five houses.<br /><span className="italic text-[var(--color-ox-500)]">One counter</span>.
              </h2>
            </div>
            <div className="md:col-span-5" data-reveal>
              <p className="text-lg text-[var(--color-ink-500)] leading-relaxed">
                We don't carry a thousand SKUs. We carry five brands we actually stand behind —
                and we negotiate them direct so the Bahraini customer gets the shelf price, not
                the distributor's.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {BRANDS.map((b, i) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-ink-900)]/8 aspect-[5/6]"
                data-reveal
                style={{ transitionDelay: `${i * 80}ms`, background: `linear-gradient(145deg, ${b.accent}18, ${b.accent}04)` }}
              >
                <div className="absolute inset-0 grid-dots opacity-60" />
                <div className="absolute top-0 right-0 p-6 font-display text-[140px] leading-none opacity-10 group-hover:opacity-25 transition-opacity duration-700" style={{ color: b.accent }}>
                  {b.mark}
                </div>
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="eyebrow" style={{ color: b.accent }}>
                      <span className="hairline" />
                      <span>{b.categoryLabel}</span>
                    </div>
                    <h3 className="mt-5 font-display text-4xl text-[var(--color-ink-900)]">{b.name}</h3>
                    <p className="mt-3 text-sm text-[var(--color-ink-500)] max-w-xs leading-relaxed">{b.tagline}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--color-ink-500)] uppercase tracking-[0.2em]">{b.origin}</span>
                    <span className="flex items-center gap-1 text-[var(--color-ink-900)] group-hover:text-[var(--color-ox-500)] transition">
                      Explore
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED RANGE — MILTON PRO COOK */}
      <section id="ranges" className="bg-[var(--color-ink-900)] text-[var(--color-cream)] py-28 md:py-36">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-7" data-reveal>
              <div className="eyebrow text-[var(--color-gold)]"><span className="hairline"/><span>Featured · Milton × Pro Cook</span></div>
              <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.98]">
                Honeycomb hexa.<br /><span className="italic text-[var(--color-ox-300)]">Armour for daily cooking</span>.
              </h2>
            </div>
            <div className="md:col-span-5" data-reveal>
              <p className="text-[var(--color-cream)]/75 leading-relaxed">
                The Pro Cook range is built around a raised honeycomb stainless lattice fused into
                the non-stick surface — it protects the coating against ladles, spatulas, and
                scouring, while spreading heat more evenly than a flat base.
              </p>
              <Link href="/brands/milton/pro-cook" className="btn-accent mt-6 inline-flex">
                See the Pro Cook range
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {proCookProducts.map((p) => (
              <article key={p.slug} data-reveal className="group">
                <Link href={`/product/${p.slug}`} className="block">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-cream)]/10">
                    <ProductVisual shade={p.shade} category={p.category} mark={milton.mark} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl">{p.name}</h3>
                  <p className="text-sm text-[var(--color-cream)]/60">{p.tagline}</p>
                  <div className="mt-3 text-sm">{BHD(p.priceBHD)}</div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND RANGE — INSULATED BOTTLES */}
      <section className="bg-[var(--color-cream-dark)] py-28 md:py-36 relative overflow-hidden">
        <div className="absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-[var(--color-ox-200)]/30 blur-[140px]" />
        <div className="container-x relative">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-7" data-reveal>
              <div className="eyebrow text-[var(--color-ox-500)]"><span className="hairline"/><span>Milton · Thermosteel</span></div>
              <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.98] text-[var(--color-ink-900)]">
                24 hours hot.<br /><span className="italic text-[var(--color-ox-500)]">Actually verified</span>.
              </h2>
            </div>
            <div className="md:col-span-5" data-reveal>
              <p className="text-[var(--color-ink-500)] leading-relaxed">
                Double-wall vacuum between two walls of SUS304 stainless steel — rated for a true
                24-hour hot-retention benchmark, verified at 6am the next morning with a
                thermometer, not on a spec sheet.
              </p>
              <Link href="/brands/milton/insulated-bottles" className="btn-primary mt-6 inline-flex">See the Thermosteel range →</Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {bottleProducts.map((p) => (
              <ProductCard key={p.slug} product={p} brandMark={milton.mark} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CROSSWORLD */}
      <section id="why" className="bg-[var(--color-cream)] py-28 md:py-36">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-5" data-reveal>
              <div className="eyebrow text-[var(--color-ink-500)]"><span className="hairline"/><span>Why Crossworld</span></div>
              <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1]">
                No third party<br />between us<br />and the shelf.
              </h2>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-8" data-reveal>
              {[
                { h: "Curated, not crowded", b: "Five brands we actually stand behind — so you don't wade through a thousand near-duplicates." },
                { h: "Direct brand relationships", b: "We hold the account ourselves. Shelf pricing passed on, not marked up twice." },
                { h: "Bahrain-first service", b: "Priced in BHD. Delivered across the Kingdom. After-sales handled locally, not routed abroad." },
                { h: "Honest specs", b: "Where a brand markets 24 hours of thermal retention, we test at 6am the next day. And we publish what we find." },
              ].map((i) => (
                <div key={i.h} className="border-t border-[var(--color-ink-900)]/15 pt-4">
                  <h3 className="font-display text-xl">{i.h}</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-500)] leading-relaxed">{i.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-[var(--color-ink-900)] text-[var(--color-cream)] py-28 md:py-36">
        <div className="container-x">
          <div className="flex items-end justify-between mb-12" data-reveal>
            <div>
              <div className="eyebrow text-[var(--color-gold)]"><span className="hairline"/><span>Most shopped</span></div>
              <h2 className="mt-6 font-display text-5xl md:text-6xl">This week in Bahrain.</h2>
            </div>
            <Link href="/brands" className="hidden md:inline-flex btn-ghost text-[var(--color-cream)] border-[var(--color-cream)]/30">All products →</Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => {
              const brand = getBrand(p.brandSlug)!;
              return <ProductCard key={p.slug} product={p} brandMark={brand.mark} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
