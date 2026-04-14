import { Brand } from "@/data/brands";

type Variant = "dark" | "light";

// Hand-tuned wordmarks for brands where we don't have a real logo file.
const WORDMARK: Record<string, { label: string; letterSpacing?: string; style?: React.CSSProperties }> = {
  milton: {
    label: "milton",
    letterSpacing: "-0.035em",
    style: { fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700 },
  },
  aftron: {
    label: "AFTRON",
    letterSpacing: "0.02em",
    style: { fontFamily: "var(--font-sans)", fontWeight: 800 },
  },
};

export function BrandLogo({
  brand,
  height = 32,
  variant = "dark",
  className = "",
}: {
  brand: Brand;
  height?: number;
  variant?: Variant;
  className?: string;
}) {
  if (brand.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        loading="lazy"
        decoding="async"
        className={`object-contain select-none ${variant === "light" ? "brightness-0 invert" : ""} ${className}`}
        style={{ height, width: "auto" }}
      />
    );
  }
  // Wordmark fallback
  const wm = WORDMARK[brand.slug];
  const label = wm?.label ?? brand.name;
  const color = variant === "light" ? "#ffffff" : brand.accent;
  return (
    <span
      className={`inline-block leading-none ${className}`}
      style={{
        color,
        fontSize: height * 0.82,
        letterSpacing: wm?.letterSpacing ?? "-0.02em",
        fontFamily: wm?.style?.fontFamily ?? "var(--font-display)",
        fontWeight: wm?.style?.fontWeight ?? 700,
        fontStyle: wm?.style?.fontStyle,
      }}
    >
      {label}
    </span>
  );
}
