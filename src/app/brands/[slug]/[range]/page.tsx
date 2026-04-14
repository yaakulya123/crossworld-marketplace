import Link from "next/link";
import { notFound } from "next/navigation";
import { BRANDS, getBrand, getRange, getProductsByRange } from "@/data/brands";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  const params: { slug: string; range: string }[] = [];
  for (const b of BRANDS) {
    if (b.ranges) {
      for (const r of b.ranges) params.push({ slug: b.slug, range: r.slug });
    }
  }
  return params;
}

export default async function RangePage({
  params,
}: {
  params: Promise<{ slug: string; range: string }>;
}) {
  const { slug, range } = await params;
  const brand = getBrand(slug);
  const rangeObj = getRange(slug, range);
  if (!brand || !rangeObj) notFound();
  const products = getProductsByRange(slug, range);

  return (
    <>
      <section className="relative overflow-hidden text-white" style={{ background: `linear-gradient(135deg, ${rangeObj.accent} 0%, #0a0c11 110%)` }}>
        <div className="absolute inset-0 grid-dots opacity-20" />
        <div className="container-x relative py-10 md:py-14">
          <div className="text-xs uppercase tracking-wider text-white/70 flex items-center gap-2">
            <Link href="/" className="hover:text-[var(--color-brand-300)]">Home</Link>
            <span>/</span>
            <Link href="/brands" className="hover:text-[var(--color-brand-300)]">Brands</Link>
            <span>/</span>
            <Link href={`/brands/${brand.slug}`} className="hover:text-[var(--color-brand-300)]">{brand.name}</Link>
            <span>/</span>
            <span className="text-white">{rangeObj.name}</span>
          </div>
          <div className="mt-6 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-wider text-[var(--color-brand-300)] font-semibold">{brand.name} · Range</div>
              <h1 className="mt-2 font-display text-5xl md:text-6xl font-semibold leading-[1]">{rangeObj.name}</h1>
              <p className="mt-3 text-xl font-display italic text-white/80">{rangeObj.tagline}</p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-[11px] uppercase tracking-wider text-[var(--color-brand-300)] font-semibold">What makes this range</div>
                <p className="mt-2.5 text-sm leading-relaxed text-white/85">{rangeObj.usp}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container-x">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold">{products.length} in the range</h2>
            </div>
            <div className="flex items-center gap-2">
              <select className="chip !bg-white !cursor-pointer">
                <option>Sort: Featured</option>
                <option>Price: Low → High</option>
                <option>Price: High → Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {products.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
