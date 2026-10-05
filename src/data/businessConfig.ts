/* ==========================================================================
   VELOCE STUDIO — CENTRAL BUSINESS & GOOGLE BUSINESS PROFILE CONFIGURATION
   Centralized, easily replaceable configuration for real-world client onboarding.
   All values here are structured for immediate migration to a verified Google
   Business Profile and local directory listings once a real facility is launched.
   ========================================================================== */

export const BUSINESS_CONFIG = {
  // Brand Identity
  brandName: "VELOCE STUDIO",
  legalName: "Veloce Auto Care Studio (Demo)",
  tagline: "Professional Car Detailing for Everyday Indian Cars",
  subTagline:
    "Disciplined interior deep cleaning, swirl-free machine polishing, snow foam washes, and ceramic protection tailored for Indian road conditions.",
  shortPhilosophy:
    "More than a clean car. Taking care of surfaces people use every day with intention, honest pricing, and disciplined process.",

  // Google Business Profile Category & Descriptions
  primaryCategory: "Car Detailing Service",
  additionalCategories: [
    "Car Wash",
    "Auto Detailing Service",
    "Car Upholstery Cleaning Service",
    "Paint Protection Film & Coating Service",
  ],
  shortDescription:
    "Professional car detailing studio in New Delhi for hatchbacks, sedans, and SUVs. Safe pH-neutral foam washing, interior dry-steam sanitization, and dual-action paint polishing.",
  longDescription:
    "Veloce Studio is a professional auto detailing concept tailored specifically for everyday Indian car owners. We bridge the gap between harsh roadside rag-washes and ultra-expensive exotic garages. Operating in New Delhi, our studio treats daily drivers—from Swift and Creta to Nexon and City—with 140°C vapor steam extraction, chemical iron fallout removal, dual-action machine correction, and semi-permanent ceramic shields. Every car receives honest vehicle-category pricing, gentle pH-neutral chemistry, and a strict multi-point white-glove inspection.",

  // Geographic & Physical Studio Location (Demo Placeholder)
  location: {
    streetAddress: "Demo Detailing Studio, Okhla Industrial Area Phase III",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
    postalCode: "110020",
    fullAddress: "Demo Detailing Studio, Okhla Phase III, New Delhi 110020, India",
    areaServed: ["New Delhi", "South Delhi", "Noida", "Gurugram", "Faridabad"],
    geoCoordinates: {
      latitude: "28.5355",
      longitude: "77.2725",
    },
    locationDisclaimer:
      "Demo Studio Location. Replace with verified client commercial address before launch.",
  },

  // Contact Channels (Replaceable demo placeholders)
  contact: {
    phone: "+91 98765 00000",
    phoneDisplay: "+91 98765 00000",
    phoneClean: "919876500000",
    email: "hello@velocestudio-placeholder.com",
    whatsappNumber: "+919876500000",
    whatsappDisplay: "+91 98765 00000",
    whatsappMessage:
      "Hello Veloce Studio, I would like to enquire about a detailing appointment for my car.",
  },

  // Operating Hours
  hours: {
    displaySummary: "Mon–Sat: 9:00 AM – 7:00 PM | Sun: 10:00 AM – 5:00 PM",
    weekday: "9:00 AM – 7:00 PM",
    sunday: "10:00 AM – 5:00 PM",
    openingHoursSpecification: [
      {
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
      {
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
  },

  // Web & Domain Configuration
  site: {
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://veloce-studio-demo.vercel.app",
    ogImageUrl: "/images/studio-hero.jpg",
    locale: "en_IN",
    currency: "INR",
    currencySymbol: "₹",
  },

  // Social & Directory Profiles
  socials: [
    {
      platform: "Instagram",
      handle: "@veloce.studio.india",
      url: "https://instagram.com",
    },
    {
      platform: "YouTube",
      handle: "Veloce Car Care India",
      url: "https://youtube.com",
    },
    {
      platform: "WhatsApp",
      handle: "+91 98765 00000 (Demo)",
      url: "https://whatsapp.com",
    },
  ],

  // Core Service Catalog for Local SEO & Business Profile
  servicesCatalog: [
    {
      name: "Exterior Detailing",
      category: "Exterior Cleaning & Decontamination",
      description:
        "Multi-stage chemical iron removal, synthetic clay bar treatment, scratch-safe foam wash, and wheel deep cleaning.",
      priceRange: "₹999 – ₹1,999",
    },
    {
      name: "Interior Deep Cleaning",
      category: "Interior Sanitization",
      description:
        "140°C dry vapor steam extraction for upholstery, carpet stain removal, AC vent anti-bacterial cleaning, and matte UV dressing.",
      priceRange: "₹1,499 – ₹2,999",
    },
    {
      name: "Paint Polishing & Correction",
      category: "Clear Coat Restoration",
      description:
        "Dual-action machine compounding to safely eliminate spiderweb wash swirls, towel hazing, and water spot etching.",
      priceRange: "₹2,499 – ₹4,499",
    },
    {
      name: "Ceramic Coating Protection",
      category: "Paint Protection",
      description:
        "Semi-permanent SiO2 nanopolymer application providing hydrophobic water sheeting, UV sun defense, and deep gloss.",
      priceRange: "₹6,999 – ₹18,999",
    },
    {
      name: "Foam Wash & Maintenance",
      category: "Routine Cleaning",
      description:
        "pH-neutral touchless snow foam dwell, two-bucket grit-guard hand contact wash, underbody rinse, and waffle-weave towel drying.",
      priceRange: "₹499 – ₹1,199",
    },
    {
      name: "Panel Denting & Painting",
      category: "Bodywork & Scratch Repair",
      description:
        "Paintless dent removal for minor dings, computer-matched basecoat spot refinishing, and clear coat blending.",
      priceRange: "₹1,499 – ₹3,999 per panel",
    },
  ],

  // Comprehensive Google Business Profile Ready Configuration Block
  googleBusinessProfile: {
    businessName: "VELOCE STUDIO",
    primaryCategory: "Car Detailing Service",
    additionalCategories: [
      "Car Wash",
      "Auto Detailing Service",
      "Car Upholstery Cleaning Service",
      "Paint Protection Film & Coating Service",
    ],
    shortDescription:
      "Professional car detailing studio in New Delhi for hatchbacks, sedans, and SUVs. Safe pH-neutral foam washing, interior dry-steam sanitization, and dual-action paint polishing.",
    longDescription:
      "Veloce Studio is a professional auto detailing concept tailored specifically for everyday Indian car owners. We bridge the gap between harsh roadside rag-washes and ultra-expensive exotic garages. Operating in New Delhi, our studio treats daily drivers—from Swift and Creta to Nexon and City—with 140°C vapor steam extraction, chemical iron fallout removal, dual-action machine correction, and semi-permanent ceramic shields. Every car receives honest vehicle-category pricing, gentle pH-neutral chemistry, and a strict multi-point white-glove inspection.",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
    postalCode: "110020",
    phonePlaceholder: "+91 98765 00000",
    emailPlaceholder: "hello@velocestudio-placeholder.com",
    website: "https://veloce-studio-demo.vercel.app",
    appointmentLink: "https://veloce-studio-demo.vercel.app/contact",
    businessHoursSummary: "Mon–Sat: 9:00 AM – 7:00 PM | Sun: 10:00 AM – 5:00 PM",
    serviceAreas: ["New Delhi", "South Delhi", "Noida", "Gurugram", "Faridabad"],
    paymentOptions: ["Cash", "UPI", "Credit Card", "Debit Card", "Net Banking"],
    studioAmenities: [
      "Wheelchair accessible entrance & studio bay",
      "Air-conditioned customer waiting lounge with Wi-Fi",
      "Prior appointment recommended; walk-ins accepted for maintenance wash",
    ],
    servicesList: [
      "Exterior Detailing (Decontamination & Foam Wash)",
      "Interior Deep Cleaning (140°C Vapor Steam Extraction)",
      "Paint Polishing & Swirl Correction (Dual-Action Orbital)",
      "Ceramic Coating Protection (9H Hard Shell)",
      "Foam Wash & Maintenance (pH-Neutral Two-Bucket)",
      "Panel Denting & Painting (Precision Color Match)",
    ],
  },

  // Verification & Demo Status
  demoNotice:
    "This is a demonstration auto detailing studio website. Replace all placeholder information with client-verified credentials prior to production deployment.",
};

