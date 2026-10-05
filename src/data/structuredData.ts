/* ==========================================================================
   VELOCE STUDIO — JSON-LD STRUCTURED DATA GENERATORS
   Pure schema.org structures representing visible content honestly.
   Strictly NO fake reviews, NO fake ratings, and NO exaggerated awards.
   ========================================================================== */

import { BUSINESS_CONFIG } from "./businessConfig";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair"],
    name: BUSINESS_CONFIG.brandName,
    alternateName: BUSINESS_CONFIG.legalName,
    description: BUSINESS_CONFIG.shortDescription,
    url: BUSINESS_CONFIG.site.baseUrl,
    telephone: BUSINESS_CONFIG.contact.phone,
    email: BUSINESS_CONFIG.contact.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_CONFIG.location.streetAddress,
      addressLocality: BUSINESS_CONFIG.location.city,
      addressRegion: BUSINESS_CONFIG.location.state,
      postalCode: BUSINESS_CONFIG.location.postalCode,
      addressCountry: BUSINESS_CONFIG.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_CONFIG.location.geoCoordinates.latitude,
      longitude: BUSINESS_CONFIG.location.geoCoordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
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
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    areaServed: BUSINESS_CONFIG.location.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Car Detailing Services",
      itemListElement: BUSINESS_CONFIG.servicesCatalog.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  };
}

export function getServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Automotive Detailing Services",
    description:
      "Professional car detailing disciplines for Indian hatchbacks, sedans, and SUVs.",
    itemListElement: BUSINESS_CONFIG.servicesCatalog.map((srv, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: srv.name,
        serviceType: srv.category,
        description: srv.description,
        provider: {
          "@type": "AutoRepair",
          name: BUSINESS_CONFIG.brandName,
          telephone: BUSINESS_CONFIG.contact.phone,
        },
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BUSINESS_CONFIG.site.baseUrl}${item.url}`,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

