type Props = {
  letter: string;
  accent: string;
  size?: number;
  dark?: boolean;
  className?: string;
};

export function BrandMark({ letter, accent, size = 64, dark, className = "" }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: dark
          ? `radial-gradient(circle at 30% 25%, ${accent}44, ${accent}11)`
          : `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.9), ${accent}22)`,
        border: `1px solid ${accent}55`,
      }}
    >
      <span
        className="font-display"
        style={{ fontSize: size * 0.45, color: accent, letterSpacing: "-0.04em", fontWeight: 500 }}
      >
        {letter}
      </span>
    </div>
  );
}
