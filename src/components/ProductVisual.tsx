type Props = {
  shade: string;
  category: string;
  mark?: string;
  className?: string;
};

// Stylized SVG visual per category — no external images needed
export function ProductVisual({ shade, category, mark = "CW", className = "" }: Props) {
  const isTV = category.toLowerCase().includes("televis");
  const isAC = category.toLowerCase().includes("air");
  const isBottle = category.toLowerCase().includes("bottle") || category.toLowerCase().includes("drinkware");
  const isPan = category.toLowerCase().includes("cook");
  const isRice = category.toLowerCase().includes("kitchen premium");

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: shade }}>
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 28% 18%, rgba(255,255,255,0.25) 0%, transparent 50%)" }}
      />
      <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full p-8" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
          <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
          </linearGradient>
        </defs>

        {isTV && (
          <g>
            <rect x="30" y="60" width="240" height="150" rx="6" fill="rgba(0,0,0,0.55)" stroke="rgba(255,255,255,0.18)" />
            <rect x="40" y="70" width="220" height="130" rx="3" fill="url(#glass)" opacity="0.7" />
            <rect x="130" y="215" width="40" height="6" rx="2" fill="rgba(0,0,0,0.5)" />
            <rect x="100" y="221" width="100" height="5" rx="2" fill="rgba(0,0,0,0.5)" />
            <text x="150" y="145" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="22" fill="rgba(255,255,255,0.85)" letterSpacing="6">{mark}</text>
          </g>
        )}

        {isAC && (
          <g>
            <rect x="40" y="90" width="220" height="75" rx="10" fill="rgba(255,255,255,0.92)" stroke="rgba(0,0,0,0.15)" />
            <rect x="50" y="150" width="200" height="8" rx="2" fill="rgba(0,0,0,0.25)" />
            {[0,1,2,3,4,5,6].map((i) => (
              <rect key={i} x={55 + i*28} y="100" width="20" height="40" rx="2" fill="rgba(0,0,0,0.12)" />
            ))}
            <circle cx="235" cy="128" r="4" fill="rgba(201,169,97,0.9)" />
          </g>
        )}

        {isBottle && (
          <g>
            <rect x="115" y="30" width="70" height="18" rx="4" fill="rgba(0,0,0,0.4)" />
            <path d="M100 60 Q100 52 110 52 H190 Q200 52 200 60 L200 258 Q200 278 180 278 H120 Q100 278 100 258 Z"
                  fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.2)" />
            <path d="M115 72 Q115 66 120 66 H180 Q185 66 185 72 L185 252 Q185 268 173 268 H127 Q115 268 115 252 Z"
                  fill="url(#glass)" opacity="0.6" />
            <circle cx="150" cy="165" r="26" fill="rgba(0,0,0,0.2)" />
            <text x="150" y="170" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="11" fill="rgba(255,255,255,0.75)" letterSpacing="3">{mark}</text>
          </g>
        )}

        {isPan && (
          <g>
            <ellipse cx="150" cy="170" rx="108" ry="28" fill="rgba(0,0,0,0.35)" />
            <ellipse cx="150" cy="150" rx="110" ry="30" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
            <ellipse cx="150" cy="150" rx="95" ry="24" fill="rgba(0,0,0,0.55)" />
            {/* honeycomb */}
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 9 }).map((_, col) => {
                const x = 85 + col * 17 + (row % 2) * 8.5;
                const y = 135 + row * 10;
                if ((x - 150) ** 2 / (88 ** 2) + (y - 150) ** 2 / (22 ** 2) > 1) return null;
                return <circle key={`${row}-${col}`} cx={x} cy={y} r="4.5" fill="rgba(201,169,97,0.35)" stroke="rgba(201,169,97,0.55)" strokeWidth="0.6" />;
              })
            )}
            <rect x="255" y="143" width="60" height="10" rx="5" fill="rgba(0,0,0,0.6)" />
          </g>
        )}

        {isRice && (
          <g>
            <ellipse cx="150" cy="230" rx="100" ry="14" fill="rgba(0,0,0,0.35)" />
            <rect x="60" y="110" width="180" height="120" rx="22" fill="rgba(255,255,255,0.85)" stroke="rgba(0,0,0,0.15)" />
            <rect x="70" y="120" width="160" height="30" rx="6" fill="rgba(0,0,0,0.15)" />
            <circle cx="230" cy="160" r="7" fill="rgba(201,169,97,0.95)" />
            <text x="150" y="200" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="14" fill="rgba(0,0,0,0.6)" letterSpacing="3">{mark}</text>
          </g>
        )}

        {!isTV && !isAC && !isBottle && !isPan && !isRice && (
          <g>
            <rect x="70" y="70" width="160" height="160" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
            <text x="150" y="160" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="28" fill="rgba(255,255,255,0.85)">{mark}</text>
          </g>
        )}
      </svg>
    </div>
  );
}
