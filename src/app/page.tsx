import Link from "next/link";
import { BRANDS, PRODUCTS, getBrand, getProductsByRange, getProductsByBrand } from "@/data/brands";
import { ProductCard } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { BHD } from "@/lib/format";
import { CountdownStrip } from "@/components/CountdownStrip";
import { NewsletterForm } from "@/components/NewsletterForm";
import { IconTruck, IconReturn, IconShield, IconCard, IconCheck } from "@/components/Icon";
import { BrandLogo } from "@/components/BrandLogo";

const CATEGORY_TILES = [
  { label: "Televisions", count: 5, href: "/brands/jvc", accent: "#0a0c11", icon: "tv" },
  { label: "Air Conditioning", count: 2, href: "/brands/bluestar", accent: "#0b2740", icon: "ac" },
  { label: "Cookware", count: 3, href: "/brands/milton/pro-cook", accent: "#3b0a06", icon: "pan" },
  { label: "Insulated Bottles", count: 3, href: "/brands/milton/insulated-bottles", accent: "#5a140d", icon: "bottle" },
  { label: "Drinkware", count: 1, href: "/brands/zojirushi", accent: "#151921", icon: "mug" },
  { label: "Kitchen", count: 1, href: "/brands/zojirushi", accent: "#7d1d14", icon: "rice" },
];

const CategoryIcon = ({ icon }: { icon: string }) => {
  const c = "w-10 h-10 text-white";
  switch (icon) {
    case "tv":     return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 22h8M12 18v4"/></svg>;
    case "ac":     return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="6" width="20" height="10" rx="2"/><path d="M6 16v3M12 16v4M18 16v3"/></svg>;
    case "pan":    return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="10" cy="14" rx="8" ry="4"/><path d="M18 14h4"/></svg>;
    case "bottle": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 2h6v4a3 3 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8a3 3 0 0 1 2-2V2z"/></svg>;
    case "mug":    return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h14v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8zM17 10h2a3 3 0 0 1 0 6h-2"/></svg>;
    case "rice":   return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="8" width="18" height="12" rx="3"/><path d="M7 8V5h10v3"/></svg>;
    default: return null;
  }
};

export default function Home() {
  const milton = getBrand("milton")!;
  const proCook = getProductsByRange("milton", "pro-cook");
  const bottles = getProductsByRange("milton", "insulated-bottles");
  const jvc = getProductsByBrand("jvc");
  const bluestar = getProductsByBrand("bluestar");
  const zojirushi = getProductsByBrand("zojirushi");
  const deals = PRODUCTS.filter((p) => p.compareAtBHD);
  const dealHero = deals[0];
  const newArrivals = PRODUCTS.slice(2, 8);
  const bestSellers = [PRODUCTS[0], PRODUCTS[4], PRODUCTS[6], PRODUCTS[9], PRODUCTS[12], PRODUCTS[13]];

  return (
    <>
      {/* ============ HERO BANNER ROW ============ */}
      <section className="bg-[var(--color-ink-50)] py-6">
        <div className="container-x grid gap-4 lg:grid-cols-3">
          {/* main hero */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl min-h-[340px] md:min-h-[440px]" style={{ background: "linear-gradient(135deg, #0a0c11 0%, #3b0a06 65%, #7d1d14 100%)" }}>
            <div className="absolute inset-0 grid-dots opacity-30" />
            <div className="absolute top-0 right-0 h-full w-1/2 opacity-40 pointer-events-none">
              <ProductVisual shade="linear-gradient(135deg, #3b0a06 0%, #0a0c11 100%)" category="Pro Cook Range" mark="M" className="h-full w-full" />
            </div>
            <div className="relative p-8 md:p-12 lg:p-16 text-white h-full flex flex-col justify-between">
              <div>
                <span className="badge badge-deal">Crossworld Exclusive</span>
                <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] max-w-xl">
                  Milton Pro Cook —<br /><span className="text-[var(--color-brand-300)]">up to 22% off</span>
                </h1>
                <p className="mt-4 text-white/70 max-w-md text-[15px] leading-relaxed">
                  Honeycomb hexa-coated cookware, now with bundle savings across the range. Direct pricing — no distributor mark-up.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/brands/milton/pro-cook" className="btn btn-brand">
                  Shop the deal
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
                <Link href="/brands/milton" className="btn btn-outline !bg-white/10 !text-white !border-white/30">
                  All Milton
                </Link>
              </div>
            </div>
          </div>

          {/* secondary banners */}
          <div className="grid grid-rows-2 gap-4">
            <Link href="/brands/bluestar" className="relative overflow-hidden rounded-2xl group" style={{ background: "linear-gradient(135deg, #0b2740 0%, #1a4470 100%)" }}>
              <div className="absolute inset-0 opacity-40">
                <ProductVisual shade="linear-gradient(135deg, #1a4470 0%, #071a2e 100%)" category="Air Conditioning" className="h-full w-full" />
              </div>
              <div className="relative p-6 text-white h-full flex flex-col justify-between min-h-[170px]">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/70">Gulf-tuned</span>
                  <div className="mt-2 font-display text-2xl font-semibold">Blue Star AC</div>
                  <div className="text-sm text-white/70">Cools at 58°C ambient</div>
                </div>
                <div className="text-sm font-semibold group-hover:text-[var(--color-brand-300)] transition">Shop ACs →</div>
              </div>
            </Link>

            <Link href="/brands/zojirushi" className="relative overflow-hidden rounded-2xl group" style={{ background: "linear-gradient(135deg, #151921 0%, #3b424d 100%)" }}>
              <div className="absolute inset-0 opacity-45">
                <ProductVisual shade="linear-gradient(135deg, #3c3b39 0%, #17161a 100%)" category="Premium Drinkware" className="h-full w-full" />
              </div>
              <div className="relative p-6 text-white h-full flex flex-col justify-between min-h-[170px]">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/70">Made in Japan</span>
                  <div className="mt-2 font-display text-2xl font-semibold">Zojirushi</div>
                  <div className="text-sm text-white/70">Thermal craft, generations deep</div>
                </div>
                <div className="text-sm font-semibold group-hover:text-[var(--color-brand-300)] transition">Explore →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TRUST ROW ============ */}
      <section className="border-y border-[var(--color-ink-100)] bg-white">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[var(--color-ink-100)]">
          {[
            { Icon: IconTruck,  t: "Free BH delivery",  s: "On orders above BHD 20" },
            { Icon: IconReturn, t: "14-day returns",    s: "Simple, Bahrain-wide" },
            { Icon: IconShield, t: "Authentic brands",  s: "Direct-sourced, zero fakes" },
            { Icon: IconCard,   t: "Pay on delivery",   s: "Or BENEFIT / card / bank" },
          ].map(({ Icon, t, s }, i) => (
            <div key={i} className="flex items-center gap-3.5 px-5 md:px-7 py-6">
              <div className="h-11 w-11 shrink-0 grid place-items-center rounded-full bg-[var(--color-ink-50)] text-[var(--color-ink-900)]">
                <Icon size={20} />
              </div>
              <div>
                <div className="text-[13.5px] font-semibold tracking-tight">{t}</div>
                <div className="text-[11.5px] text-[var(--color-ink-500)] mt-0.5">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SHOP BY BRAND ============ */}
      <section className="py-12 md:py-16">
        <div className="container-x">
          <SectionHeader
            eyebrow="Curated houses"
            title="Shop by brand"
            subtitle="Five brands we source direct. No distributor layer."
            ctaHref="/brands"
            ctaLabel="View all"
          />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {BRANDS.map((b, i) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="card group relative overflow-hidden p-6 flex flex-col items-center justify-center aspect-square"
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex-1 flex items-center justify-center w-full px-4 transition-transform duration-500 group-hover:scale-[1.06]">
                  <BrandLogo brand={b} height={40} />
                </div>
                <div className="text-[11.5px] text-[var(--color-ink-500)] mt-3 uppercase tracking-wider">{b.categoryLabel}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DEAL OF THE DAY ============ */}
      <section id="deals" className="py-12 md:py-16 bg-[var(--color-ink-50)]">
        <div className="container-x">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="eyebrow text-[var(--color-brand-500)]"><span className="hairline"/>Flash deals</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">Deal of the day</h2>
            </div>
            <CountdownStrip />
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            {/* hero deal */}
            {dealHero && (
              <Link href={`/product/${dealHero.slug}`} className="card group overflow-hidden grid md:grid-cols-2 !p-0">
                <div className="aspect-square md:aspect-auto bg-[var(--color-ink-50)] relative overflow-hidden">
                  <ProductVisual shade={dealHero.shade} category={dealHero.category} mark={getBrand(dealHero.brandSlug)!.mark} className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 badge badge-deal">
                    -{Math.round((1 - dealHero.priceBHD / dealHero.compareAtBHD!) * 100)}%
                  </span>
                </div>
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-ink-500)]">{getBrand(dealHero.brandSlug)!.name}</div>
                  <div className="mt-2 font-display text-2xl md:text-3xl font-semibold leading-tight">{dealHero.name}</div>
                  <p className="mt-3 text-sm text-[var(--color-ink-500)] line-clamp-3">{dealHero.description}</p>
                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="font-display text-3xl font-semibold text-[var(--color-brand-600)]">{BHD(dealHero.priceBHD)}</span>
                    <span className="text-sm text-[var(--color-ink-400)] line-through">{BHD(dealHero.compareAtBHD!)}</span>
                  </div>
                  <div className="mt-3 text-xs text-[var(--color-accent-green)] font-semibold">You save BHD {(dealHero.compareAtBHD! - dealHero.priceBHD).toFixed(3)}</div>
                  <div className="mt-6">
                    <span className="btn btn-brand">Grab the deal →</span>
                  </div>
                  <div className="mt-auto pt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[var(--color-ink-500)]">
                    {["In stock", "Ships tomorrow", "2-year warranty"].map((t) => (
                      <span key={t} className="inline-flex items-center gap-1.5">
                        <IconCheck size={13} className="text-[var(--color-accent-green)]" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )}

            <div className="grid grid-cols-2 gap-3">
              {deals.slice(1, 3).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SHOP BY CATEGORY ============ */}
      <section className="py-12 md:py-16">
        <div className="container-x">
          <SectionHeader eyebrow="Browse" title="Shop by category" subtitle="Everything our Bahraini customers buy most." />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {CATEGORY_TILES.map((c) => (
              <Link key={c.label} href={c.href} className="relative overflow-hidden rounded-xl aspect-[4/5] group" style={{ background: `linear-gradient(160deg, ${c.accent} 0%, #000 120%)` }} data-reveal>
                <div className="absolute inset-0 grid-dots opacity-30" />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <CategoryIcon icon={c.icon} />
                  <div>
                    <div className="text-white font-semibold text-[15px] leading-tight">{c.label}</div>
                    <div className="text-white/60 text-[11.5px] mt-1">{c.count} products →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BESTSELLERS ============ */}
      <section className="py-12 md:py-16 bg-[var(--color-ink-50)]">
        <div className="container-x">
          <SectionHeader
            eyebrow="Popular in Bahrain"
            title="Bestsellers this week"
            ctaHref="/brands"
            ctaLabel="All products"
          />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {bestSellers.map((p) => p && <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* ============ MILTON PRO COOK SPOTLIGHT ============ */}
      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl mb-8 p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0a0c11 0%, #3b0a06 100%)" }}>
            <div className="absolute inset-0 grid-dots opacity-30" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="badge badge-new">Featured Range</span>
                <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-white leading-[1.05]">
                  Milton <span className="text-[var(--color-brand-300)]">Pro Cook</span>
                </h2>
                <p className="mt-3 text-lg font-display italic text-white/80">Honeycomb hexa coated cookware.</p>
                <p className="mt-4 text-white/70 max-w-md text-[14.5px] leading-relaxed">
                  A raised stainless honeycomb lattice fused into the non-stick surface — protects the coating against utensil wear, spreads heat more evenly than a flat base.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/brands/milton/pro-cook" className="btn btn-brand">Explore Pro Cook →</Link>
                  <Link href="/brands/milton" className="btn btn-outline !bg-white/10 !text-white !border-white/30">All Milton ranges</Link>
                </div>
              </div>
              <div className="hidden md:grid grid-cols-2 gap-3">
                {proCook.slice(0, 2).map((p) => (
                  <Link key={p.slug} href={`/product/${p.slug}`} className="bg-white rounded-xl overflow-hidden group">
                    <div className="aspect-square overflow-hidden">
                      <ProductVisual shade={p.shade} category={p.category} mark="M" className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-3">
                      <div className="text-[13px] font-medium line-clamp-2 leading-tight">{p.name}</div>
                      <div className="mt-1 text-[var(--color-brand-600)] font-bold text-[14px]">{BHD(p.priceBHD)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {proCook.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* ============ JVC TV ROW ============ */}
      <section className="py-12 md:py-16 bg-[var(--color-ink-50)]">
        <div className="container-x">
          <SectionHeader
            eyebrow="JVC · Televisions"
            title="Living-room ready"
            subtitle="Japanese AV heritage, tuned for Gulf broadcast."
            ctaHref="/brands/jvc"
            ctaLabel="See all JVC"
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {jvc.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* ============ MILTON THERMOSTEEL ============ */}
      <section className="py-12 md:py-16">
        <div className="container-x">
          <SectionHeader
            eyebrow="Milton · Thermosteel"
            title="24 hours hot. Verified."
            subtitle="Double-wall SUS304 vacuum — measured at 6am, not on a spec sheet."
            ctaHref="/brands/milton/insulated-bottles"
            ctaLabel="Shop the range"
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bottles.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* ============ PROMO SPLIT ============ */}
      <section className="py-12 md:py-16 bg-[var(--color-ink-50)]">
        <div className="container-x grid md:grid-cols-2 gap-4">
          <Link href="/brands/aftron" className="relative overflow-hidden rounded-2xl p-8 md:p-10 group min-h-[260px]" style={{ background: "linear-gradient(135deg, #101114 0%, #0b2a48 100%)" }}>
            <div className="absolute -right-10 -bottom-10 opacity-30">
              <div className="text-white font-display text-[240px] leading-none">A</div>
            </div>
            <div className="relative text-white">
              <span className="badge badge-new">Local</span>
              <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold max-w-xs leading-tight">Aftron TVs from <span className="text-[var(--color-brand-300)]">BHD 54</span></h3>
              <p className="mt-3 text-white/70 max-w-xs text-[14px]">UAE-engineered, local service, Arabic-first UI.</p>
              <span className="btn btn-brand mt-5 inline-flex">Shop Aftron →</span>
            </div>
          </Link>
          <Link href="/brands/zojirushi" className="relative overflow-hidden rounded-2xl p-8 md:p-10 group min-h-[260px]" style={{ background: "linear-gradient(135deg, #efe6d0 0%, #c9b98f 100%)" }}>
            <div className="absolute -right-10 -bottom-10 opacity-20">
              <div className="font-display text-[240px] leading-none" style={{ color: "#2b2a28" }}>Z</div>
            </div>
            <div className="relative">
              <span className="badge badge-hot">Premium</span>
              <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold max-w-xs leading-tight text-[var(--color-ink-900)]">Zojirushi — small objects, refined.</h3>
              <p className="mt-3 max-w-xs text-[14px] text-[var(--color-ink-700)]">Japanese thermal craft. Lifetime-object quality.</p>
              <span className="btn btn-dark mt-5 inline-flex">Explore Zojirushi →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ============ NEW ARRIVALS ============ */}
      <section className="py-12 md:py-16">
        <div className="container-x">
          <SectionHeader
            eyebrow="Just landed"
            title="New arrivals"
            subtitle="Fresh stock on the Crossworld shelves."
            ctaHref="/brands"
            ctaLabel="All products"
          />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {newArrivals.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="py-14 bg-[var(--color-ink-900)] text-white">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow text-[var(--color-brand-300)]"><span className="hairline" style={{ background: "var(--color-brand-300)" }}/>Stay close</div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold leading-tight">Get Bahrain-only<br/>deals in your inbox.</h3>
            <p className="mt-3 text-white/60 max-w-md text-[14.5px]">Weekly flash deals, new arrivals, and the occasional free-delivery voucher. Unsubscribe in one click.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  ctaHref,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="flex items-end justify-between flex-wrap gap-4" data-reveal>
      <div>
        <div className="eyebrow"><span className="hairline" />{eyebrow}</div>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">{title}</h2>
        {subtitle && <p className="mt-2 text-[var(--color-ink-500)] max-w-xl text-[14.5px]">{subtitle}</p>}
      </div>
      {ctaHref && (
        <Link href={ctaHref} className="text-sm font-semibold text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)] inline-flex items-center gap-1.5">
          {ctaLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </Link>
      )}
    </div>
  );
}
