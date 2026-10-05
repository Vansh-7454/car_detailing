/* ==========================================================================
   VELOCE STUDIO — INDIAN MARKET DATA & SERVICE DEFINITIONS
   Fictional detailing business demonstration tailored for Indian car owners.
   ========================================================================== */

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  duration: string;
  startingPrice: string;
  priceNote?: string;
  category: "Cleaning" | "Interior" | "Paint Care" | "Protection" | "Bodywork";
  image: string;
  imageAlt?: string;
  featured?: boolean;
}

export interface PackageTier {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  price: string;
  priceNote: string;
  duration: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  vehicle: string;
  city: string;
  serviceCompleted: string;
  quote: string;
  rating: number;
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category: "GENERAL" | "SERVICES" | "PRICING" | "CARE" | "BOOKING" | string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  highlights: string[];
}

export interface WhyChooseUsItem {
  title: string;
  desc: string;
  iconType: "team" | "products" | "equipment" | "pricing" | "interior" | "finish";
}

import { BUSINESS_CONFIG } from "./businessConfig";

export const BRAND_CONFIG = {
  name: BUSINESS_CONFIG.brandName,
  legalName: BUSINESS_CONFIG.legalName,
  tagline: BUSINESS_CONFIG.tagline,
  subTagline: BUSINESS_CONFIG.subTagline,
  contact: {
    address: BUSINESS_CONFIG.location.streetAddress,
    cityStateZip: `${BUSINESS_CONFIG.location.city}, ${BUSINESS_CONFIG.location.state} ${BUSINESS_CONFIG.location.postalCode} (Demo Facility)`,
    fullAddress: BUSINESS_CONFIG.location.fullAddress,
    city: BUSINESS_CONFIG.location.city,
    phone: BUSINESS_CONFIG.contact.phoneDisplay,
    displayPhone: BUSINESS_CONFIG.contact.phone,
    email: BUSINESS_CONFIG.contact.email,
    whatsappNumber: BUSINESS_CONFIG.contact.whatsappNumber,
    whatsappDisplay: BUSINESS_CONFIG.contact.whatsappDisplay,
    hours: BUSINESS_CONFIG.hours.displaySummary,
    weekdayHours: BUSINESS_CONFIG.hours.weekday,
    sundayHours: BUSINESS_CONFIG.hours.sunday,
    note: BUSINESS_CONFIG.demoNotice,
  },
  socials: BUSINESS_CONFIG.socials,
  stats: [
    { value: "4-Step", label: "Studio Process", note: "Inspect, decontaminate, polish & protect" },
    { value: "100%", label: "pH-Neutral Wash", note: "Gentle on Indian OEM clear coats" },
    { value: "140°C", label: "Dry Vapor Steam", note: "Deep cabin sanitization without damp smells" },
    { value: "Dual-Action", label: "Orbital Polishing", note: "Swirl reduction without rotary buffer trails" },
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "exterior-detailing",
    slug: "exterior-detailing",
    number: "01",
    title: "Exterior Detailing",
    shortDesc: "Complete exterior decontamination, scratch-safe hand wash, wheel deep cleaning, tyre treatment, and streak-free drying with hydrophobic finishing.",
    fullDesc: "Road grime, tar, brake dust, and industrial fallout bond tenaciously to automotive clear coats on Indian roads. Our exterior detailing eliminates surface contamination safely, revitalizes trim and wheels, and seals the paint with a glossy hydrophobic barrier.",
    deliverables: [
      "foam wash",
      "hand wash",
      "wheel cleaning",
      "tyre treatment",
      "exterior drying",
      "finishing",
    ],
    duration: "2 – 3 Hours",
    startingPrice: "₹999+",
    priceNote: "Starting for compact hatchbacks (Swift / Punch)",
    category: "Cleaning",
    image: "/images/gallery-punch-wash.jpg",
    imageAlt: "Foam wash being applied to a Tata Nexon with thick snow foam pre-soak",
    featured: true,
  },
  {
    id: "interior-deep-cleaning",
    slug: "interior-deep-cleaning",
    number: "02",
    title: "Interior Deep Cleaning",
    shortDesc: "Complete interior sanitization: dashboard cleaning, deep seat cleaning, carpet shampoo, AC vent disinfection, and door panel detailing.",
    fullDesc: "Indian city driving and monsoons trap dust, pollution, and spills deep within cabin fabrics. Our interior treatment utilizes dry vapor steam at 140°C to sanitize and extract grime without soaking fabrics, neutralizing odors and leaving a factory-matte interior.",
    deliverables: [
      "dashboard cleaning",
      "seat cleaning",
      "floor/carpet cleaning",
      "AC vent cleaning",
      "door panel cleaning",
      "vacuuming",
    ],
    duration: "3 – 4 Hours",
    startingPrice: "₹1,499+",
    priceNote: "Starting for hatchbacks & sedans",
    category: "Interior",
    image: "/images/service-interior-cleaning.jpg",
    imageAlt: "Technician cleaning the interior of a Hyundai Creta with 140°C vapor steam extraction",
    featured: true,
  },
  {
    id: "paint-polishing",
    slug: "paint-polishing",
    number: "03",
    title: "Paint Polishing",
    shortDesc: "Dual-action machine polishing: digital paint inspection, surface prep, multi-step compounding, swirl reduction, and mirror gloss finishing.",
    fullDesc: "Daily wiping with dry rag cloths creates dense spiderweb swirl marks on Indian cars. We measure paint thickness before using dual-action orbital polishers and German micro-abrasives to level clear coat defects safely, revealing deep liquid reflections.",
    deliverables: [
      "paint inspection",
      "surface preparation",
      "machine polishing",
      "swirl reduction",
      "finishing",
    ],
    duration: "4 – 6 Hours",
    startingPrice: "₹2,499+",
    priceNote: "Starting for hatchbacks & compact cars",
    category: "Paint Care",
    image: "/images/service-paint-polishing.jpg",
    imageAlt: "Technician polishing the paint of a Hyundai i20 with dual-action orbital machine",
    featured: true,
  },
  {
    id: "ceramic-protection",
    slug: "ceramic-protection",
    number: "04",
    title: "Ceramic Protection",
    shortDesc: "Chemical bonding ceramic shield: surface preparation, paint correction, multi-layer coating application, infrared curing, and final inspection.",
    fullDesc: "Protect your daily car from intense UV radiation, hard borewell water spots, tree sap, and monsoon muck. Our ceramic coating bonds chemically with the clear coat to create a hard, hydrophobic sacrificial layer that keeps maintenance washes effortless for 2 to 3 years.",
    deliverables: [
      "surface preparation",
      "paint correction",
      "coating application",
      "curing",
      "final inspection",
    ],
    duration: "1 – 2 Days",
    startingPrice: "₹6,999+",
    priceNote: "Starting for hatchbacks (2-Year Package)",
    category: "Protection",
    image: "/images/service-ceramic-coating.jpg",
    imageAlt: "Ceramic coating application on a black Mahindra XUV700 bonnet under studio lighting",
    featured: true,
  },
  {
    id: "foam-wash",
    slug: "foam-wash",
    number: "05",
    title: "Foam Wash & Maintenance",
    shortDesc: "Rich snow foam pre-wash, high-pressure washing, thorough wheel cleaning, and touchless air plus microfiber hand drying.",
    fullDesc: "Improper washing is the #1 cause of paint swirls. Our thick snow foam pre-wash lifts and softens abrasive road grit before hand contact, followed by high-pressure rinsing and dedicated wheel cleaning.",
    deliverables: [
      "foam wash",
      "pressure washing",
      "wheel cleaning",
      "hand drying",
    ],
    duration: "45 – 60 Mins",
    startingPrice: "₹499+",
    priceNote: "Starting for hatchbacks & compact cars",
    category: "Cleaning",
    image: "/images/service-foam-wash.jpg",
    imageAlt: "pH-neutral touchless snow foam dwell being applied to a Maruti Suzuki Swift",
    featured: true,
  },
  {
    id: "denting-painting",
    slug: "denting-painting",
    number: "06",
    title: "Denting & Painting",
    shortDesc: "Realistic workshop repair: precision panel dent pulling, computerized color shade match, sealed booth panel spraying, and factory clear coat buff.",
    fullDesc: "Bumper scrapes, parking dings, and panel scratches are part of everyday driving. Our skilled technicians pull dents using spot stud equipment and repaint panels using OEM shade spectrometry and infrared curing lamps.",
    deliverables: [
      "panel dent pulling",
      "computerized shade matching",
      "anti-rust primer application",
      "sealed booth panel painting",
      "infrared clear coat curing",
      "finishing cut and polish",
    ],
    duration: "1 – 3 Days",
    startingPrice: "₹1,499 per panel+",
    priceNote: "Starting per panel onwards",
    category: "Bodywork",
    image: "/images/service-denting-painting.jpg",
    imageAlt: "Technician performing paintless dent repair and panel finishing on a Honda City",
    featured: true,
  },
];

export const PACKAGES: PackageTier[] = [
  {
    id: "essential-care",
    name: "ESSENTIAL CARE",
    subtitle: "Routine Exterior Maintenance",
    tagline: "Suitable for routine exterior maintenance. Keeps clear coat glossy, wheels clean, and tyres dressed.",
    price: "₹999",
    priceNote: "onwards",
    duration: "1.5 – 2 Hours",
    badge: "Routine Care",
    features: [
      "foam wash",
      "exterior hand wash",
      "wheel cleaning",
      "tyre dressing",
      "microfiber drying",
      "exterior finish",
    ],
    ctaLabel: "Book Essential",
  },
  {
    id: "complete-detail",
    name: "COMPLETE DETAIL",
    subtitle: "Full Interior & Exterior Clean",
    tagline: "Suitable for a deeper overall clean. Our recommended everyday package for family cars and daily drivers.",
    price: "₹2,499",
    priceNote: "onwards",
    duration: "Full Day (5–7 Hours)",
    badge: "Recommended Everyday Package",
    isPopular: true,
    features: [
      "exterior detailing",
      "interior vacuum",
      "dashboard cleaning",
      "seat cleaning",
      "wheel cleaning",
      "tyre dressing",
      "final inspection",
    ],
    ctaLabel: "Book Complete Detail",
  },
  {
    id: "premium-protection",
    name: "PREMIUM PROTECTION",
    subtitle: "Paint-Care & Ceramic Shield",
    tagline: "For customers looking for paint-care and protection. Eliminates wash swirls and bonds a multi-year ceramic barrier.",
    price: "₹7,999",
    priceNote: "onwards",
    duration: "1 – 2 Days",
    badge: "Paint-Care & Shield",
    features: [
      "deep exterior cleaning",
      "paint preparation",
      "machine polishing",
      "paint enhancement",
      "ceramic protection",
      "final inspection",
    ],
    ctaLabel: "Book Protection",
  },
];

export interface AdditionalServiceItem {
  id: string;
  name: string;
  price: string;
  duration: string;
  desc: string;
  category: string;
}

export const ADDITIONAL_SERVICES: AdditionalServiceItem[] = [
  {
    id: "foam-wash-add",
    name: "Foam Wash",
    price: "₹499+",
    duration: "45 Mins",
    desc: "Snow foam pre-soak, two-bucket hand wash, wheel cleaning, and microfiber blow drying.",
    category: "Washing",
  },
  {
    id: "interior-deep-cleaning-add",
    name: "Interior Deep Cleaning",
    price: "₹1,499+",
    duration: "3 – 4 Hours",
    desc: "Dry steam extraction of upholstery, AC vent disinfection, dashboard matte conditioning, and floor carpet vacuuming.",
    category: "Interior",
  },
  {
    id: "paint-polishing-add",
    name: "Paint Polishing",
    price: "₹2,499+",
    duration: "4 – 6 Hours",
    desc: "Dual-action machine compounding and finishing jeweling polish to eliminate wash swirls and restore true optical reflection.",
    category: "Paint Care",
  },
  {
    id: "headlight-restoration-add",
    name: "Headlight Restoration",
    price: "₹999+",
    duration: "1 – 2 Hours",
    desc: "Multi-stage wet sanding of yellowed polycarbonate lenses, machine buffing, and UV-blocking clear coat seal.",
    category: "Specialized",
  },
  {
    id: "ceramic-protection-add",
    name: "Ceramic Protection",
    price: "₹6,999+",
    duration: "1 – 2 Days",
    desc: "Multi-stage paint correction followed by 9H nano-ceramic liquid application, infrared heat curing, and warranty card.",
    category: "Protection",
  },
  {
    id: "denting-painting-add",
    name: "Denting & Painting",
    price: "₹1,499/panel+",
    duration: "1 – 3 Days",
    desc: "Computerized color shade spectrometry, panel dent pulling, anti-corrosion primer, spray booth painting, and clear buff.",
    category: "Bodywork",
  },
];

export interface ComparisonRow {
  feature: string;
  description: string;
  essential: boolean;
  complete: boolean;
  premium: boolean;
  essentialNote?: string;
  completeNote?: string;
  premiumNote?: string;
}

export const PACKAGE_COMPARISON: ComparisonRow[] = [
  {
    feature: "Exterior Wash",
    description: "Snow foam pre-rinse, two-bucket scratch-safe hand wash, and air blower drying",
    essential: true,
    complete: true,
    premium: true,
    essentialNote: "Foam & hand wash",
    completeNote: "Decontamination wash",
    premiumNote: "Deep multi-stage wash",
  },
  {
    feature: "Interior Cleaning",
    description: "Vacuuming, upholstery steam cleaning, dashboard wipe, and AC vent sanitization",
    essential: false,
    complete: true,
    premium: true,
    essentialNote: "Not included",
    completeNote: "Vacuum, seats & dashboard",
    premiumNote: "Full steam extraction & conditioning",
  },
  {
    feature: "Wheel Care",
    description: "Alloy face cleaning, brake dust flush, and tyre dressing",
    essential: true,
    complete: true,
    premium: true,
    essentialNote: "Wheel cleaning & tyre dressing",
    completeNote: "Deep wheel cleaning & tyre dressing",
    premiumNote: "Wheel de-ironing & ceramic face coat",
  },
  {
    feature: "Paint Polish",
    description: "Dual-action machine polishing to reduce swirls and restore clear coat reflection",
    essential: false,
    complete: true,
    premium: true,
    essentialNote: "Not included",
    completeNote: "Single-stage gloss enhancement",
    premiumNote: "Multi-stage machine compounding & jewel polish",
  },
  {
    feature: "Paint Protection",
    description: "Synthetic polymer sealant or durable 9H nano-ceramic sacrificial barrier",
    essential: false,
    complete: false,
    premium: true,
    essentialNote: "Not included",
    completeNote: "Synthetic spray sealant (3-month)",
    premiumNote: "9H Ceramic Shield (2-Year)",
  },
  {
    feature: "Final Inspection",
    description: "Surface check under high-intensity inspection LED lights with customer walkthrough",
    essential: true,
    complete: true,
    premium: true,
    essentialNote: "Exterior finish inspection",
    completeNote: "Thorough multi-point inspection",
    premiumNote: "Digital paint gauge & LED inspection report",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  vehicle: string;
  category: "Exterior" | "Interior" | "Paint Care" | "Wheels" | "Workshop";
  description: string;
  image: string;
  aspect: "16-9" | "4-3" | "3-4";
  badge: string;
}

export const GALLERY_CATEGORIES = [
  "All",
  "Exterior",
  "Interior",
  "Paint Care",
  "Wheels",
  "Workshop",
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Foam Bath & Underbody Jet Rinse",
    vehicle: "Mahindra Thar 4x4",
    category: "Exterior",
    description: "High-pressure mud decontamination and pH-neutral snow foam bath after highway drive.",
    image: "/images/gallery-thar-exterior.jpg",
    aspect: "16-9",
    badge: "FOAM BATH",
  },
  {
    id: "g2",
    title: "Dual-Tone Alloy Decontamination",
    vehicle: "Hyundai Creta",
    category: "Wheels",
    description: "Chemical iron fallout dissolution and soft wheel woolie agitation on diamond-cut alloys.",
    image: "/images/gallery-creta-wheel.jpg",
    aspect: "4-3",
    badge: "WHEEL DECONTAMINATION",
  },
  {
    id: "g3",
    title: "Dry Steam Upholstery Extraction",
    vehicle: "Honda City",
    category: "Interior",
    description: "140°C dry vapor steam sanitization of beige fabric seats and dashboard conditioning.",
    image: "/images/gallery-city-interior.jpg",
    aspect: "3-4",
    badge: "CABIN STEAM SANITIZE",
  },
  {
    id: "g4",
    title: "Two-Bucket Scratch-Safe Hand Wash",
    vehicle: "Tata Punch",
    category: "Exterior",
    description: "Plush microfiber noodle wash mitt contact wash with dual grit-guard buckets.",
    image: "/images/gallery-punch-wash.jpg",
    aspect: "4-3",
    badge: "SCRATCH-SAFE WASH",
  },
  {
    id: "g5",
    title: "Active Studio Detailing Bays",
    vehicle: "Maruti Brezza & Kia Seltos",
    category: "Workshop",
    description: "Clean dust-evacuated studio bays with hexagon LED ceiling lighting and epoxy flooring.",
    image: "/images/gallery-workshop-bays.jpg",
    aspect: "16-9",
    badge: "STUDIO BAY 01",
  },
  {
    id: "g6",
    title: "Dual-Action Machine Compounding",
    vehicle: "Maruti Suzuki Ciaz",
    category: "Paint Care",
    description: "Rotary cut and dual-action jeweling polish eliminating 90%+ daily society wash swirls.",
    image: "/images/service-paint-polishing.jpg",
    aspect: "16-9",
    badge: "SWIRL REDUCTION",
  },
  {
    id: "g7",
    title: "9H Nano-Ceramic Coating Application",
    vehicle: "Hyundai Creta SX (O)",
    category: "Paint Care",
    description: "Manual block and micro-suede ceramic application for extreme wet gloss and water beading.",
    image: "/images/service-ceramic-coating.jpg",
    aspect: "16-9",
    badge: "CERAMIC APPLICATION",
  },
  {
    id: "g8",
    title: "Cabin Dust Evacuation & Detailing",
    vehicle: "Tata Nexon",
    category: "Interior",
    description: "AC vent disinfection, steering wheel conditioning, and high-suction floor extraction.",
    image: "/images/service-interior-cleaning.jpg",
    aspect: "16-9",
    badge: "INTERIOR DETAIL",
  },
  {
    id: "g9",
    title: "Panel Dent Pulling & Painting Booth",
    vehicle: "Workshop Repair Bay",
    category: "Workshop",
    description: "Precision metal alignment, anti-corrosion primer, and OEM shade spray booth preparation.",
    image: "/images/service-denting-painting.jpg",
    aspect: "16-9",
    badge: "BODYWORK BAY",
  },
  {
    id: "g10",
    title: "High-Lubricity Snow Foam Pre-Wash",
    vehicle: "Maruti Suzuki Swift",
    category: "Exterior",
    description: "Encapsulating surface grit and road dust before two-bucket contact washing.",
    image: "/images/service-foam-wash.jpg",
    aspect: "16-9",
    badge: "PRE-SOAK FOAM",
  },
  {
    id: "g11",
    title: "Micro-Abrasive Clear Coat Correction",
    vehicle: "Hyundai Venue",
    category: "Paint Care",
    description: "Non-destructive clear coat leveling using orbital polisher and German compounds.",
    image: "/images/paint-correction.jpg",
    aspect: "16-9",
    badge: "STAGE-2 CORRECTION",
  },
  {
    id: "g12",
    title: "Hydrophobic Water Contact Angle Test",
    vehicle: "Ceramic Treated Panel",
    category: "Paint Care",
    description: "Extreme surface tension creating >110° tight contact angle water beads that roll off.",
    image: "/images/ceramic-beading.jpg",
    aspect: "16-9",
    badge: "110° WATER BEADING",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Intake & Surface Inspection",
    subtitle: "Computerized Paint & Interior Check",
    desc: "We perform a 360-degree walkaround, assessing swirl severity, stone chips, panel dents, and upholstery stains to recommend only what your car truly needs.",
    highlights: ["Digital paint gauge check", "Swirl & scratch inspection", "Honest job sheet estimation"],
  },
  {
    step: "02",
    title: "Decontamination & Deep Clean",
    subtitle: "Snow Foam & Underbody Flushing",
    desc: "A touchless foam wash loosens Indian highway grime. We decontaminate wheels, flush wheel wells, strip iron fallout, and steam-clean the cabin.",
    highlights: ["High-pressure underbody rinse", "Acid-free wheel de-ironing", "Dry steam interior extraction"],
  },
  {
    step: "03",
    title: "Detail & Surface Correction",
    subtitle: "Dual-Action Machine Polishing",
    desc: "Using calibrated dual-action machines and German compounds, our technicians level microscopic clear coat imperfections without shaving safe clear coat.",
    highlights: ["Microfiber pad leveling", "85–95% swirl elimination", "Zero buffer trail holograms"],
  },
  {
    step: "04",
    title: "Protection & Handover",
    subtitle: "Sealant or Ceramic Shield",
    desc: "We seal the corrected paint with premium polymer sealant or 9H ceramic coating, dress trims with UV blocks, and conduct a white-glove inspection before handover.",
    highlights: ["Hydrophobic water beading", "Deep wet gloss finish", "Quality checklist walkthrough"],
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Trained Detailing Team",
    desc: "Our technicians undergo rigorous hands-on training with rotary polishers, steam extractors, and ceramic applicators. No untrained helpers working on your car.",
    iconType: "team",
  },
  {
    title: "Quality Global Products",
    desc: "We use trusted pH-neutral shampoos, Koch-Chemie compounds, Meguiar's polishes, and CarPro coatings that are gentle on OEM factory paint.",
    iconType: "products",
  },
  {
    title: "Careful Interior Cleaning",
    desc: "We never flood your interior with wet water. Low-moisture dry vapor steam sanitizes fabrics, leather, and AC ducts without causing mildew or damp odors.",
    iconType: "interior",
  },
  {
    title: "Professional Detailing Bay",
    desc: "Equipped with dust-evacuated wash bays, high-output pressure washers, clean epoxy flooring, and multi-angle inspection lights to spot hidden swirls.",
    iconType: "equipment",
  },
  {
    title: "Transparent Package Pricing",
    desc: "No hidden surcharges or surprise billing. You get clear starting estimates based on your vehicle category (Hatchback, Sedan, SUV).",
    iconType: "pricing",
  },
  {
    title: "Attention to Finish & Long Shine",
    desc: "From cleaned fuel lids and dressed pedal covers to spotless glass and water-beading paint, we treat your daily drive with genuine pride.",
    iconType: "finish",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "Rohan Verma",
    vehicle: "Hyundai Creta SX (O) // Phantom Black",
    city: "Gurugram, Sector 54",
    serviceCompleted: "Complete Detail & Swirl Polish",
    quote: "My black Creta had heavy spiderweb swirls from daily society wash cloths. The team at Veloce Studio completely restored the deep mirror gloss. The paint looks even better than when I took showroom delivery!",
    rating: 5,
  },
  {
    id: "2",
    clientName: "Ankit Verma",
    vehicle: "Tata Nexon XZ+ // Daytona Grey",
    city: "Dwarka, New Delhi",
    serviceCompleted: "Interior Deep Clean & Steam Sanitize",
    quote: "With two kids and monsoon mud, my Nexon's fabric seats were heavily stained. Their hot steam extraction took out every single stain, and the AC vents now smell fresh without harsh artificial perfumes.",
    rating: 5,
  },
  {
    id: "3",
    clientName: "Vikram Malhotra",
    vehicle: "Honda City ZX // Platinum White Pearl",
    city: "Noida, Sector 62",
    serviceCompleted: "2-Year Ceramic Coating Package",
    quote: "Driving on the Noida Expressway in rain used to leave heavy water marks. After their ceramic coating, water just sheets off the hood and windshield. Washing the car on weekends takes barely 15 minutes now.",
    rating: 5,
  },
  {
    id: "4",
    clientName: "Pooja Kulkarni",
    vehicle: "Maruti Suzuki Baleno // Nexa Blue",
    city: "Pune, Baner",
    serviceCompleted: "Essential Care & Foam Wash",
    quote: "Super professional setup! The underbody wash and interior vacuuming were done thoroughly. Very fair pricing for the quality of work they put in.",
    rating: 5,
  },
];

export const FAQ_CATEGORIES = [
  "ALL",
  "GENERAL",
  "SERVICES",
  "PRICING",
  "CARE",
  "BOOKING",
] as const;

export const FAQS: FAQItemData[] = [
  {
    id: "what-is-car-detailing",
    category: "GENERAL",
    question: "What is car detailing?",
    answer: "Car detailing is a meticulous, systematic rejuvenation and surface protection discipline that goes far beyond a standard car wash. While a regular wash merely rinses topical road dirt off exterior panels (often grinding grit into the clear coat with dirty rags), detailing methodically cleans, decontaminates, mechanically polishes, and protects every exterior and interior surface—including paint clear coat, alloy barrels, tyre rubber, seat fabrics, and AC air ducts—to restore a factory-sharp, hygienic, and well-maintained vehicle.",
  },
  {
    id: "how-often-detailing",
    category: "GENERAL",
    question: "How often should I get my car detailed?",
    answer: "Given typical Indian road conditions with airborne dust, monsoon humidity, and intense summer sun, we recommend an Essential Foam Wash every 2 to 3 weeks, a Complete Interior & Exterior Detail every 4 to 6 months, and Paint Polishing or Ceramic protection refresh every 12 to 24 months. If your vehicle is parked under trees or driven frequently on industrial highways, more regular washing keeps corrosive bird lime and tree sap from etching clear coat.",
  },
  {
    id: "do-you-detail-everyday-cars",
    category: "GENERAL",
    question: "Do you detail everyday cars?",
    answer: "Yes, absolutely. Our studio was founded specifically for everyday hatchbacks, sedans, and SUVs. Whether you drive a Maruti Swift, Hyundai Creta, Tata Nexon, Honda City, Mahindra Thar, or a luxury vehicle, we treat every daily driver with the exact same precision care, dedicated dual-action polishers, and gentle pH-neutral products typically reserved for exotic sports cars.",
  },
  {
    id: "what-is-included-interior-cleaning",
    category: "SERVICES",
    question: "What is included in interior deep cleaning?",
    answer: "Our interior deep cleaning includes complete dry vacuuming of seats, carpets, floor mats, and boot space; dry vapor steam extraction at 140°C to sanitize fabrics and lift deep-set coffee and food stains; anti-bacterial disinfection of AC louvers and ducts; precision detailing and UV matte conditioning of the dashboard, steering wheel, and door cards; and cleaning of pedal boxes, sun visors, and seat tracks without soaking cabin upholstery.",
  },
  {
    id: "difference-foam-wash-detailing",
    category: "SERVICES",
    question: "What is the difference between a foam wash and detailing?",
    answer: "A foam wash is a maintenance cleaning process designed to safely lift and encapsulate surface road dust with touchless pH-neutral snow foam before a scratch-safe two-bucket hand wash. Detailing is a comprehensive restorative service that adds chemical iron decontamination, clay bar treatment, dual-action machine compounding to remove spiderweb wash swirls, deep interior steam sanitization, and protective sealants or ceramic coatings.",
  },
  {
    id: "does-paint-polishing-remove-scratches",
    category: "SERVICES",
    question: "Does paint polishing remove scratches?",
    answer: "Machine polishing and compounding can significantly reduce or eliminate surface-level clear coat imperfections such as spiderweb wash swirls, towel hazing, water spot etching, and minor fingernail scratches around door handles. However, deep scratches that have penetrated through the clear coat into the base paint or bare metal cannot be safely removed through polishing alone and require our panel denting and painting repair service.",
  },
  {
    id: "what-is-ceramic-coating",
    category: "SERVICES",
    question: "What is ceramic coating?",
    answer: "Ceramic coating is a high-grade liquid nanopolymer formulated with silicon dioxide (SiO2) that forms a semi-permanent chemical bond with your car's factory clear coat. It cures into a hard, glass-like sacrificial barrier that provides extreme hydrophobic water beading, chemical resistance against acidic bird droppings and tree sap, and durable UV sun protection. While it keeps routine washing effortless, it is not an invincible scratch-proof armor against stone chips or heavy abrasions.",
  },
  {
    id: "why-final-price-varies",
    category: "PRICING",
    question: "Why does the final price vary?",
    answer: "Detailing pricing varies based on vehicle size category (hatchback, sedan/compact SUV, or full-size SUV), current exterior paint condition (depth of swirl marks and clear coat oxidation), interior cleanliness level, the specific package selected, and total technician labor hours required. Larger vehicles have substantially greater surface and carpet volume, requiring additional compounds, pads, and workshop time.",
  },
  {
    id: "are-prices-fixed",
    category: "PRICING",
    question: "Are the prices fixed?",
    answer: "All prices shown on this demonstration website are starting prices for transparent expectation setting. Upon vehicle drop-off at our studio bay, a technician conducts a thorough walkaround and paint inspection with you, agreeing on a clear job sheet with exact vehicle-specific pricing before any work commences, so there are never surprise fees at delivery.",
  },
  {
    id: "how-long-detailing-takes",
    category: "CARE",
    question: "How long does a detailing service take?",
    answer: "Turnaround times vary by service scope. An Essential Foam Wash takes roughly 45 to 90 minutes; an Interior Deep Cleaning takes 3 to 4 hours; a Complete Detail typically requires a full working day (5 to 7 hours); and Paint Polishing or Ceramic Protection packages require 1 to 2 days to ensure proper multi-stage correction and adequate infrared curing.",
  },
  {
    id: "can-i-drive-immediately",
    category: "CARE",
    question: "Can I drive the car immediately after detailing?",
    answer: "For foam washes, interior deep cleaning, and standard detailing packages, your car is dry, sanitized, and drive-away ready immediately upon collection. For ceramic coating packages, we recommend keeping the vehicle dry and avoiding high-pressure water or chemical shampoos for the first 5 to 7 days to allow the nanostructured coating to fully cure and reach peak hardness.",
  },
  {
    id: "how-to-maintain-after-detailing",
    category: "CARE",
    question: "How should I maintain the car after detailing?",
    answer: "Avoid dry dusting with rough dry cloths or daily society rag cleaning, which creates 90% of swirl marks in India. Instead, use a touchless pre-rinse or pH-neutral snow foam wash with plush microfiber mitts and dual grit-guard buckets. Always wash panels in the shade and dry with soft microfiber waffle-weave towels using gentle patting motions.",
  },
  {
    id: "do-i-need-an-appointment",
    category: "BOOKING",
    question: "Do I need an appointment?",
    answer: "While we gladly accept walk-ins for quick maintenance foam washes whenever a bay is open, we strongly recommend booking in advance for interior deep cleaning, paint polishing, and ceramic packages. An advance booking ensures that a dedicated detailing bay, specialized equipment, and trained technicians are reserved exclusively for your vehicle.",
  },
  {
    id: "can-i-request-multiple-services",
    category: "BOOKING",
    question: "Can I request multiple services together?",
    answer: "Yes, you can easily combine services. Popular combinations include pairing an Interior Deep Cleaning with a single-panel dent repair, or adding headlight restoration and alloy ceramic coating to a Complete Detail package. You can specify multiple requirements on our booking enquiry form.",
  },
  {
    id: "can-i-choose-date-and-time",
    category: "BOOKING",
    question: "Can I choose a preferred date and time?",
    answer: "Yes. Our booking enquiry form allows you to select your preferred date and time slot (Morning: 9:00 AM – 1:00 PM, Afternoon: 1:00 PM – 5:00 PM, or Evening: 5:00 PM – 7:00 PM). Our studio concierge will confirm bay availability and lock in your reservation.",
  },
];

export interface ValueItem {
  number: string;
  title: string;
  desc: string;
}

export const ABOUT_VALUES: ValueItem[] = [
  {
    number: "01",
    title: "ATTENTION TO DETAIL",
    desc: "Every panel contour, window rubber beading, door jamb, and upholstery seam receives focused, patient craftsmanship without cutting corners.",
  },
  {
    number: "02",
    title: "HONEST PRICING",
    desc: "Clear starting rates structured by vehicle size and actual paint condition. Transparent estimations with no forced upsells or surprise invoices.",
  },
  {
    number: "03",
    title: "PROPER PROCESS",
    desc: "We prioritize paint preservation over aggressive cutting: two-bucket grit-guard washing, low-moisture dry steam, and orbital dual-action machines.",
  },
  {
    number: "04",
    title: "CONSISTENT FINISH",
    desc: "Standardized multi-point quality inspection conducted under high-intensity inspection LED lights ensures a clean, sharp finish every single visit.",
  },
];

export interface ApproachStep {
  step: string;
  title: string;
  desc: string;
}

export const ABOUT_APPROACH: ApproachStep[] = [
  {
    step: "01",
    title: "Inspect Before Cleaning",
    desc: "We perform a thorough 360-degree walkaround, checking clear coat thickness, swirl depth, stone chips, and interior fabrics before applying any product.",
  },
  {
    step: "02",
    title: "Use the Right Product for Each Surface",
    desc: "Acid-free wheel decontaminants, pH-neutral wash soaps, German micro-abrasives, and dedicated leather cleaners matched precisely to each material.",
  },
  {
    step: "03",
    title: "Work Carefully Around Interiors",
    desc: "Low-moisture dry vapor steam sanitizes fabrics, floor mats, and AC ducts at 140°C without soaking cushions or creating damp mildew smells.",
  },
  {
    step: "04",
    title: "Prepare Paint Before Polishing",
    desc: "Chemical iron fallout removal and synthetic clay bar decontamination strip embedded industrial pollutants so machine pads level clear coat smoothly.",
  },
  {
    step: "05",
    title: "Finish With a Detailed Inspection",
    desc: "A white-glove inspection check under 5000K daylight-balanced LED lighting verifies swirl eradication, glass streak-free clarity, and dressed trims.",
  },
];

export const DETAILING_STANDARDS = [
  {
    category: "INTERIOR",
    items: ["Dashboard", "Seats", "Carpets", "Panels"],
    desc: "Dry vapor steam sanitization, stain extraction, and non-greasy UV matte trim conditioning.",
  },
  {
    category: "EXTERIOR",
    items: ["Paint", "Glass", "Wheels", "Tyres"],
    desc: "Scratch-safe two-bucket foam washing, chemical decontamination, and hydrophobic surface sealing.",
  },
  {
    category: "FINISH",
    items: ["Polish", "Protection", "Final Inspection"],
    desc: "Swirl-free optical reflection, multi-month paint protection, and a thorough inspection with the car owner.",
  },
];

export const WHY_CUSTOMERS_CHOOSE_STUDIO = [
  {
    title: "Professional Detailing Equipment",
    desc: "Equipped with dual-action orbital polishers, high-temperature vapor steam machines, and grit-guard two-bucket wash stations.",
  },
  {
    title: "Careful Surface Preparation",
    desc: "Thorough chemical iron decontamination and clay bar treatment before any machine touches your clear coat.",
  },
  {
    title: "Vehicle-Size Based Pricing",
    desc: "Transparent rates structured fairly across hatchbacks, sedans, compact SUVs, and full-size vehicles.",
  },
  {
    title: "Interior & Exterior Expertise",
    desc: "Trained technicians skilled in fabric steam extraction, leather conditioning, and paint defect leveling.",
  },
  {
    title: "Clear Service Packages",
    desc: "Straightforward packages from routine Essential Care to deep swirl correction and multi-year ceramic shields.",
  },
  {
    title: "Final Quality Inspection",
    desc: "Every completed vehicle undergoes an orderly multi-point inspection under studio LED lights before handover.",
  },
];
