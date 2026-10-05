import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { FAQS } from "@/data/mockData";
import FAQAccordion from "./FAQAccordion";
import { BUSINESS_CONFIG } from "@/data/businessConfig";
import { getBreadcrumbSchema, getFAQSchema } from "@/data/structuredData";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: `Car Detailing FAQs | ${BUSINESS_CONFIG.brandName}`,
  description:
    "Got questions about car detailing in India? Learn about foam washing, interior steam cleaning, paint swirl removal, ceramic coatings, pricing factors, and studio booking.",
  keywords: [
    "car detailing faq India",
    "is ceramic coating worth it",
    "how often detail car",
    "swirl mark removal questions",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: `Car Detailing FAQs | ${BUSINESS_CONFIG.brandName}`,
    description:
      "Everything you need to know before your car detail. Honest answers about processes, curing times, packages, and maintenance.",
    url: `${BUSINESS_CONFIG.site.baseUrl}/faq`,
    siteName: BUSINESS_CONFIG.brandName,
    locale: BUSINESS_CONFIG.site.locale,
    type: "website",
    images: [
      {
        url: BUSINESS_CONFIG.site.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_CONFIG.brandName} - Detailing FAQs`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Car Detailing FAQs | ${BUSINESS_CONFIG.brandName}`,
    description:
      "Frequently asked questions about car detailing, foam washing, and paint protection in India.",
    images: [BUSINESS_CONFIG.site.ogImageUrl],
  },
};

export default function FAQPage() {
  const faqSchema = getFAQSchema(FAQS);

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "" },
    { name: "FAQ", url: "/faq" },
  ]);

  return (
    <>
      {/* Schema.org FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Schema.org Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.heroContent}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              QUESTIONS, ANSWERED
            </span>

            <h1 className={styles.heroTitle}>
              Everything You Need to Know <em>Before Your Detail</em>.
            </h1>

            <p className={styles.heroLede}>
              Straightforward answers about our cleaning techniques, paint correction standards, ceramic curing times, and honest category pricing for everyday Indian cars.
            </p>
          </div>
        </Container>
      </section>

      {/* ---------------- 2. ACCORDION SECTION ---------------- */}
      <section className={styles.faqSection}>
        <Container>
          <SectionHeading
            eyebrow="Detailed Knowledge Base"
            title={
              <>
                Frequently Asked <em>Questions</em>
              </>
            }
            subtitle="Browse by category to learn how we protect your vehicle against harsh road conditions, borewell water spots, and daily wash swirls."
            align="center"
            theme="graphite"
          />

          <div style={{ marginTop: "3rem" }}>
            <FAQAccordion />
          </div>
        </Container>
      </section>

      {/* ---------------- 3. INTERNAL LINKING STRIP ---------------- */}
      <section className={styles.internalNavSection}>
        <Container>
          <div className={styles.internalNavRow}>
            <Link href="/services" className={styles.navLinkItem}>
              <span>Explore All Services</span>
              <ArrowRightIcon size={13} />
            </Link>
            <Link href="/pricing" className={styles.navLinkItem}>
              <span>View Detailing Packages</span>
              <ArrowRightIcon size={13} />
            </Link>
            <Link href="/contact" className={styles.navLinkItem}>
              <span>Request a Studio Booking</span>
              <ArrowRightIcon size={13} />
            </Link>
          </div>
        </Container>
      </section>

      {/* ---------------- 4. GLOBAL BOTTOM CTA ---------------- */}
      <CTASection
        eyebrow="STILL HAVE QUESTIONS?"
        title={
          <>
            Ready to give your car a <em>better finish</em>?
          </>
        }
        lede="Contact our studio concierge directly or visit our facility for an honest, non-destructive walkaround assessment."
        primaryCtaLabel="Book a Detail"
        primaryCtaHref="/contact"
        secondaryCtaLabel="View Packages"
        secondaryCtaHref="/pricing"
      />
    </>
  );
}
