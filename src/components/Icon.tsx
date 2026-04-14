type IconProps = { className?: string; size?: number };

const S = ({ size = 20, children, className = "" }: IconProps & { children: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

export const IconTruck = (p: IconProps) => (
  <S {...p}><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></S>
);
export const IconReturn = (p: IconProps) => (
  <S {...p}><path d="M3 12a9 9 0 0 1 15.3-6.3L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.3 6.3L3 16"/><path d="M3 21v-5h5"/></S>
);
export const IconShield = (p: IconProps) => (
  <S {...p}><path d="M12 3l8 3v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></S>
);
export const IconCard = (p: IconProps) => (
  <S {...p}><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20M6 15h3"/></S>
);
export const IconCheck = (p: IconProps) => (
  <S {...p}><path d="M5 13l4 4L19 7"/></S>
);
export const IconBag = (p: IconProps) => (
  <S {...p}><path d="M6 7h12l-1 13H7zM9 7a3 3 0 0 1 6 0"/></S>
);
export const IconHeart = (p: IconProps) => (
  <S {...p}><path d="M20 8.5A5.5 5.5 0 0 0 12 5a5.5 5.5 0 0 0-8 3.5C4 15 12 20 12 20s8-5 8-11.5z"/></S>
);
export const IconUser = (p: IconProps) => (
  <S {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></S>
);
export const IconSearch = (p: IconProps) => (
  <S {...p}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></S>
);
export const IconArrow = (p: IconProps) => (
  <S {...p}><path d="M5 12h14M13 5l7 7-7 7"/></S>
);
export const IconClock = (p: IconProps) => (
  <S {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></S>
);
export const IconPin = (p: IconProps) => (
  <S {...p}><path d="M12 22s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></S>
);
export const IconBolt = (p: IconProps) => (
  <S {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></S>
);
export const IconMenu = (p: IconProps) => (
  <S {...p}><path d="M4 7h16M4 12h16M4 17h16"/></S>
);
export const IconX = (p: IconProps) => (
  <S {...p}><path d="M6 6l12 12M6 18L18 6"/></S>
);

/* Crisp Bahrain flag rendered in SVG */
export const FlagBH = ({ className = "", size = 14 }: IconProps) => (
  <svg width={size * 1.5} height={size} viewBox="0 0 18 12" className={`inline-block rounded-[2px] overflow-hidden ring-1 ring-black/10 ${className}`} preserveAspectRatio="none">
    <rect x="0" y="0" width="5" height="12" fill="#fff" />
    <path d="M5,0 L18,0 L18,12 L5,12 L3,10.5 L5,9 L3,7.5 L5,6 L3,4.5 L5,3 L3,1.5 Z" fill="#CE1126" />
  </svg>
);
