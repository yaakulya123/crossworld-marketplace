export type Product = {
  slug: string;
  brandSlug: string;
  rangeSlug?: string;
  name: string;
  tagline: string;
  description: string;
  usp: string[];
  priceBHD: number;
  compareAtBHD?: number;
  category: string;
  accent: string;
  shade: string;
  specs: Record<string, string>;
};

export type Range = {
  slug: string;
  name: string;
  tagline: string;
  usp: string;
  accent: string;
};

export type Brand = {
  slug: string;
  name: string;
  mark: string;
  /** Real logo asset (PNG/SVG under /images/brands). null → wordmark fallback. */
  logo?: string;
  /** Aspect ratio of the logo (width/height) for correct sizing. */
  logoAspect?: number;
  tagline: string;
  description: string;
  origin: string;
  categoryLabel: string;
  accent: string;
  dark?: boolean;
  ranges?: Range[];
  productSlugs: string[];
};

export const PRODUCTS: Product[] = [
  // JVC
  {
    slug: "jvc-55-4k-led",
    brandSlug: "jvc",
    name: 'JVC 55" 4K UHD Smart LED',
    tagline: "Cinema-grade colour. Living-room size.",
    description:
      'The JVC 55" 4K panel pairs a wide-colour-gamut display with an upscaling engine tuned for streaming content. HDR10 and HLG support out of the box.',
    usp: ["4K UHD (3840×2160)", "HDR10 + HLG", "Smart OS with Arabic UI", "60W Dolby-tuned audio"],
    priceBHD: 179.0,
    compareAtBHD: 219.0,
    category: "LED Television",
    accent: "#0d0d0d",
    shade: "linear-gradient(135deg, #1a1a1a 0%, #050505 100%)",
    specs: { Display: "55\" 4K UHD", Refresh: "60 Hz", HDR: "HDR10, HLG", Audio: "2 × 10W + 40W bass" },
  },
  {
    slug: "jvc-65-qled",
    brandSlug: "jvc",
    name: 'JVC 65" QLED 4K',
    tagline: "Quantum-dot brightness for the Bahrain summer.",
    description:
      "Quantum-dot backlight delivers 1,200-nit peak brightness — bright enough for sun-filled Bahraini living rooms. Full-array local dimming for true blacks.",
    usp: ["QLED panel", "1,200 nit peak", "Dolby Vision IQ", "4 × HDMI 2.1"],
    priceBHD: 269.0,
    category: "LED Television",
    accent: "#1a1a1a",
    shade: "linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 100%)",
    specs: { Display: "65\" QLED", Refresh: "120 Hz", HDR: "Dolby Vision", Ports: "4×HDMI 2.1, 2×USB" },
  },
  {
    slug: "jvc-43-smart",
    brandSlug: "jvc",
    name: 'JVC 43" Full HD Smart LED',
    tagline: "An honest second screen for the bedroom.",
    description: "A tidy 43\" panel with a clean smart OS, sized for the bedroom or majlis. Voice remote in the box.",
    usp: ["Full HD 1080p", "Voice remote", "Screen mirroring", "2 × HDMI"],
    priceBHD: 99.5,
    category: "LED Television",
    accent: "#141414",
    shade: "linear-gradient(135deg, #222 0%, #080808 100%)",
    specs: { Display: "43\" FHD", Refresh: "60 Hz", Smart: "Yes", Audio: "2 × 8W" },
  },

  // AFTRON
  {
    slug: "aftron-50-4k",
    brandSlug: "aftron",
    name: 'Aftron 50" 4K Smart LED',
    tagline: "The sensible upgrade.",
    description:
      "Aftron's 50\" UHD panel is built for the mainstream Bahraini household — clean picture, fast smart OS, a remote that lasts.",
    usp: ["4K UHD", "Built-in Wi-Fi", "Bezel-less design", "2-year local warranty"],
    priceBHD: 129.0,
    category: "LED Television",
    accent: "#101114",
    shade: "linear-gradient(135deg, #1d1f23 0%, #070809 100%)",
    specs: { Display: "50\" 4K", Refresh: "60 Hz", OS: "Aftron Smart", Warranty: "2 years" },
  },
  {
    slug: "aftron-32-hd",
    brandSlug: "aftron",
    name: 'Aftron 32" HD LED',
    tagline: "Simple. Reliable. Local.",
    description: "A slim 32\" panel ideal for a kitchen, an office corner, or a guest room. HDMI and USB standard.",
    usp: ["HD 720p", "Slim profile", "HDMI + USB", "Bahrain service network"],
    priceBHD: 54.5,
    category: "LED Television",
    accent: "#14161a",
    shade: "linear-gradient(135deg, #1f222a 0%, #06070a 100%)",
    specs: { Display: "32\" HD", Ports: "2×HDMI", Audio: "2 × 6W", Mount: "VESA 200×100" },
  },

  // BLUESTAR
  {
    slug: "bluestar-1-5t-inverter",
    brandSlug: "bluestar",
    name: "Blue Star 1.5T Inverter Split AC",
    tagline: "5-star cooling for the 45°C afternoon.",
    description:
      "Blue Star's premium inverter split is built for Gulf climates — copper condenser, anti-corrosive fins, and a compressor rated for 58°C ambient.",
    usp: ["5-star BEE rating", "Cools at 58°C ambient", "Copper condenser", "Turbo mode 12°C in 4 min"],
    priceBHD: 289.0,
    compareAtBHD: 329.0,
    category: "Air Conditioning",
    accent: "#0b2740",
    shade: "linear-gradient(135deg, #1a4470 0%, #071a2e 100%)",
    specs: { Tonnage: "1.5 T", Rating: "5 star", Ambient: "58°C", Refrigerant: "R-32" },
  },
  {
    slug: "bluestar-2t-split",
    brandSlug: "bluestar",
    name: "Blue Star 2T Split AC",
    tagline: "For the family majlis.",
    description: "A 2-ton split built for larger rooms — lounges, dining, majlis. Iron-stabilizer free and whisper-quiet.",
    usp: ["2 T capacity", "Stabilizer-free", "Self-diagnosis", "Dual filtration"],
    priceBHD: 349.0,
    category: "Air Conditioning",
    accent: "#0b2a48",
    shade: "linear-gradient(135deg, #20517f 0%, #0a2038 100%)",
    specs: { Tonnage: "2 T", Rating: "3 star", Noise: "≤ 44 dB", Pipe: "5 m ready" },
  },

  // ZOJIRUSHI
  {
    slug: "zojirushi-stainless-mug-480",
    brandSlug: "zojirushi",
    name: "Zojirushi Stainless Mug 480ml",
    tagline: "The quiet companion of a thousand commutes.",
    description:
      "Triple-layer vacuum insulation, an interior ceramic coating that resists staining, and a one-hand flip-lid that actually closes cleanly.",
    usp: ["CeramiCoat interior", "18h hot / 24h cold", "One-hand flip lid", "Made in Japan"],
    priceBHD: 28.9,
    category: "Premium Drinkware",
    accent: "#2b2a28",
    shade: "linear-gradient(135deg, #3c3b39 0%, #17161a 100%)",
    specs: { Capacity: "480 ml", Material: "SUS304 + Ceramic", Weight: "220 g", Origin: "Japan" },
  },
  {
    slug: "zojirushi-rice-cooker-1l",
    brandSlug: "zojirushi",
    name: "Zojirushi Micom Rice Cooker 1L",
    tagline: "Rice, as it was always meant to be.",
    description: "A fuzzy-logic rice cooker with 6 menu settings, including Bahraini majboos-friendly long-grain.",
    usp: ["Micom fuzzy logic", "6 settings", "Non-stick inner pot", "Keep-warm 12h"],
    priceBHD: 64.5,
    category: "Kitchen Premium",
    accent: "#d9cdb2",
    shade: "linear-gradient(135deg, #efe6d0 0%, #c9b98f 100%)",
    specs: { Capacity: "1 L (5 cups)", Modes: "6", Power: "680 W", Origin: "Japan" },
  },

  // MILTON — Pro Cook (hexa coating)
  {
    slug: "milton-procook-hexa-fry-26",
    brandSlug: "milton",
    rangeSlug: "pro-cook",
    name: "Milton Pro Cook Hexa Fry Pan 26cm",
    tagline: "Honeycomb armour for everyday cooking.",
    description:
      "The signature honeycomb hexa coating creates a raised stainless pattern that protects the non-stick surface from utensil wear — while distributing heat evenly across the base.",
    usp: ["Honeycomb hexa coating", "Induction-ready", "PFOA-free non-stick", "Riveted cool-touch handle"],
    priceBHD: 12.9,
    compareAtBHD: 16.5,
    category: "Pro Cook Range",
    accent: "#1a1714",
    shade: "linear-gradient(135deg, #3a3431 0%, #15110f 100%)",
    specs: { Diameter: "26 cm", Base: "Triply induction", Coating: "Hexa honeycomb", Handle: "Riveted steel" },
  },
  {
    slug: "milton-procook-hexa-kadai",
    brandSlug: "milton",
    rangeSlug: "pro-cook",
    name: "Milton Pro Cook Hexa Kadai 24cm",
    tagline: "Built for the daily curry.",
    description: "A deep kadai with the same hexa honeycomb coating — ideal for biryanis, daals, and slow-simmer curries.",
    usp: ["Honeycomb hexa coating", "Deep 10cm walls", "Induction + gas", "Glass lid included"],
    priceBHD: 15.5,
    category: "Pro Cook Range",
    accent: "#1c1916",
    shade: "linear-gradient(135deg, #453f3b 0%, #18130f 100%)",
    specs: { Diameter: "24 cm", Depth: "10 cm", Lid: "Tempered glass", Base: "Triply" },
  },
  {
    slug: "milton-procook-hexa-tawa",
    brandSlug: "milton",
    rangeSlug: "pro-cook",
    name: "Milton Pro Cook Hexa Tawa 28cm",
    tagline: "For perfect rotis and khubz.",
    description: "A flat 28cm tawa with the hexa coating — minimal oil, even heat, no sticking.",
    usp: ["Flat 28cm surface", "Hexa non-stick", "Quick-heat base", "1.2 kg lightweight"],
    priceBHD: 9.9,
    category: "Pro Cook Range",
    accent: "#18151a",
    shade: "linear-gradient(135deg, #3d3538 0%, #120e14 100%)",
    specs: { Diameter: "28 cm", Profile: "Flat", Weight: "1.2 kg", Coating: "Hexa" },
  },

  // MILTON — Insulated Bottles
  {
    slug: "milton-thermosteel-750",
    brandSlug: "milton",
    rangeSlug: "insulated-bottles",
    name: "Milton Thermosteel Flip-Lid 750ml",
    tagline: "24 hours hot. Truly.",
    description:
      "Double-wall vacuum insulation rated for 24 hours hot and 24 hours cold. The flip lid is one-hand operable and spill-proof for the school bag.",
    usp: ["24h hot / 24h cold", "Double vacuum", "BPA-free", "Narrow-mouth flip"],
    priceBHD: 7.9,
    category: "Insulated Bottles",
    accent: "#3d2a20",
    shade: "linear-gradient(135deg, #5c4030 0%, #22160f 100%)",
    specs: { Capacity: "750 ml", Insulation: "24h", Material: "SUS304", Lid: "Flip" },
  },
  {
    slug: "milton-thermosteel-1l",
    brandSlug: "milton",
    rangeSlug: "insulated-bottles",
    name: "Milton Thermosteel Duo 1L",
    tagline: "The family road-trip bottle.",
    description: "A 1-litre thermosteel flask with a screw-cap serving cup. Ideal for long drives and school runs.",
    usp: ["1L capacity", "Integrated serving cup", "24h thermal", "Stainless 304"],
    priceBHD: 10.9,
    category: "Insulated Bottles",
    accent: "#2a1f18",
    shade: "linear-gradient(135deg, #44322a 0%, #180f0a 100%)",
    specs: { Capacity: "1 L", Lid: "Cup-cap", Insulation: "24h", Origin: "India" },
  },
  {
    slug: "milton-kids-bottle-500",
    brandSlug: "milton",
    rangeSlug: "insulated-bottles",
    name: "Milton Kids Thermo 500ml",
    tagline: "School-day thermal, in kid-grip.",
    description: "A 500ml insulated bottle sized for schoolbags, with a loop strap and a locking push-button lid.",
    usp: ["500ml kid-friendly", "12h thermal", "Locking lid", "Shoulder strap"],
    priceBHD: 5.5,
    category: "Insulated Bottles",
    accent: "#7a1717",
    shade: "linear-gradient(135deg, #a93a30 0%, #5f0f0b 100%)",
    specs: { Capacity: "500 ml", Insulation: "12h", Strap: "Yes", Lid: "Push-lock" },
  },
];

export const BRANDS: Brand[] = [
  {
    slug: "jvc",
    name: "JVC",
    mark: "J",
    logo: "/images/brands/jvc.svg",
    logoAspect: 311 / 124,
    tagline: "Japanese AV heritage, at Bahrain prices.",
    description:
      "JVC has been engineering display and audio products since 1927. Our Bahrain range focuses on living-room LED and QLED televisions tuned for Gulf broadcast standards.",
    origin: "Japan · Since 1927",
    categoryLabel: "Televisions",
    accent: "#c8102e",
    dark: true,
    productSlugs: ["jvc-55-4k-led", "jvc-65-qled", "jvc-43-smart"],
  },
  {
    slug: "aftron",
    name: "Aftron",
    mark: "A",
    tagline: "The honest UAE-engineered television.",
    description:
      "Aftron is a regional favourite — straightforward televisions with Arabic-first interfaces, local service, and prices that make a second TV a simple decision.",
    origin: "UAE · Local service",
    categoryLabel: "Televisions",
    accent: "#0b2a48",
    dark: true,
    productSlugs: ["aftron-50-4k", "aftron-32-hd"],
  },
  {
    slug: "bluestar",
    name: "Blue Star",
    mark: "B",
    logo: "/images/brands/bluestar.png",
    logoAspect: 146 / 30,
    tagline: "Engineered for the Gulf heat.",
    description:
      "Blue Star is India's climate engineering company. Their Gulf-tuned inverter ACs hold their cooling at 58°C ambient — rated for real Bahrain summers, not a lab.",
    origin: "India · Since 1943",
    categoryLabel: "Air Conditioning",
    accent: "#0b2740",
    dark: true,
    productSlugs: ["bluestar-1-5t-inverter", "bluestar-2t-split"],
  },
  {
    slug: "zojirushi",
    name: "Zojirushi",
    mark: "Z",
    logo: "/images/brands/zojirushi.svg",
    logoAspect: 512 / 115,
    tagline: "Small objects, generations of refinement.",
    description:
      "Zojirushi is the Japanese master of thermal drinkware and kitchen appliances. Every product is engineered on a generational timescale.",
    origin: "Japan · Since 1918",
    categoryLabel: "Drinkware & Kitchen",
    accent: "#2b2a28",
    dark: true,
    productSlugs: ["zojirushi-stainless-mug-480", "zojirushi-rice-cooker-1l"],
  },
  {
    slug: "milton",
    name: "Milton",
    mark: "M",
    tagline: "Everyday kitchen, refined.",
    description:
      "Milton's Pro Cook cookware — engineered around the signature honeycomb hexa coating — and the thermal bottle range that keeps contents hot for a full 24 hours, anchor our most-shopped brand.",
    origin: "India · Since 1972",
    categoryLabel: "Cookware & Thermal",
    accent: "#8f1f17",
    ranges: [
      {
        slug: "pro-cook",
        name: "Pro Cook",
        tagline: "Honeycomb Hexa coated cookware.",
        usp: "The raised honeycomb pattern is a stainless lattice fused into the non-stick surface — it protects against utensil wear while spreading heat more evenly than flat coatings.",
        accent: "#1a1714",
      },
      {
        slug: "insulated-bottles",
        name: "Insulated Bottles",
        tagline: "24 hours hot. A full day cold.",
        usp: "Milton's Thermosteel range uses a twin-wall vacuum between two layers of SUS304 stainless steel — rated for a true 24-hour hot-retention benchmark verified at 6am the next morning.",
        accent: "#3d2a20",
      },
    ],
    productSlugs: [
      "milton-procook-hexa-fry-26",
      "milton-procook-hexa-kadai",
      "milton-procook-hexa-tawa",
      "milton-thermosteel-750",
      "milton-thermosteel-1l",
      "milton-kids-bottle-500",
    ],
  },
];

export const getBrand = (slug: string) => BRANDS.find((b) => b.slug === slug);
export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const getProductsByBrand = (brandSlug: string) => PRODUCTS.filter((p) => p.brandSlug === brandSlug);
export const getProductsByRange = (brandSlug: string, rangeSlug: string) =>
  PRODUCTS.filter((p) => p.brandSlug === brandSlug && p.rangeSlug === rangeSlug);
export const getRange = (brandSlug: string, rangeSlug: string) =>
  getBrand(brandSlug)?.ranges?.find((r) => r.slug === rangeSlug);
