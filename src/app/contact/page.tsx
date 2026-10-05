import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  WhatsAppIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";
import { BUSINESS_CONFIG } from "@/data/businessConfig";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/data/structuredData";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: `Book a Detail | ${BUSINESS_CONFIG.brandName}`,
  description:
    "Request an appointment or enquire about professional automotive detailing for your hatchback, sedan, or SUV. Studio based in New Delhi.",
  keywords: [
    "book car detailing New Delhi",
    "car detailing contact",
    "enquire car foam wash",
    "car detailing appointment",
    "car wash booking",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Book a Car Detailing Service | ${BUSINESS_CONFIG.brandName}`,
    description:
      "Tell us what you drive, what it needs, and when you'd like to bring it in. Studio based in New Delhi.",
    url: `${BUSINESS_CONFIG.site.baseUrl}/contact`,
    siteName: BUSINESS_CONFIG.brandName,
    locale: BUSINESS_CONFIG.site.locale,
    type: "website",
    images: [
      {
        url: BUSINESS_CONFIG.site.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_CONFIG.brandName} - Contact & Booking`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Book a Car Detailing Service | ${BUSINESS_CONFIG.brandName}`,
    description:
      "Request a booking or enquire about professional car care in New Delhi.",
    images: [BUSINESS_CONFIG.site.ogImageUrl],
  },
};

export default function ContactPage() {
  const localBusinessJsonLd = getLocalBusinessSchema();
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      {/* Schema.org LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* Schema.org Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ---------------- 1. DARK EDITORIAL INTRO ---------------- */}
      <section className={styles.heroSection} aria-labelledby="contact-heading">
        <div className={styles.ambientGlow} aria-hidden="true" />
        <Container>
          <div className={styles.heroContent}>
            {/* Eyebrow */}
            <div className={styles.eyebrowBox}>
              <span className={styles.eyebrowDot} />
              <span className={styles.eyebrowText}>CONTACT // VELOCE STUDIO</span>
            </div>

            {/* Editorial Headline */}
            <h1 id="contact-heading" className={styles.headline}>
              LET&apos;S MAKE<br />
              YOUR CAR <em className={styles.headlineAccent}>BETTER.</em>
            </h1>

            {/* Concise Supporting Copy */}
            <p className={styles.heroLede}>
              Tell us what you drive, what it needs, and when you&apos;d like to bring it in.
            </p>

            {/* Subtle Editorial Index */}
            <div className={styles.editorialIndex} aria-hidden="true">
              <span className={styles.indexItem}>
                01 <span className={styles.indexDash}>—</span> BOOK
              </span>
              <span className={styles.indexItem}>
                02 <span className={styles.indexDash}>—</span> DETAIL
              </span>
              <span className={styles.indexItem}>
                03 <span className={styles.indexDash}>—</span> DRIVE
              </span>
            </div>

            {/* Editorial Contact Information Row (No cards, thin dividers) */}
            <div className={styles.contactInfoRow}>
              {/* Studio */}
              <div className={styles.infoGroup}>
                <span className={styles.infoLabel}>STUDIO</span>
                <span className={styles.infoValue}>New Delhi, India</span>
                <span className={styles.infoSub}>Okhla Industrial Area Ph-III</span>
              </div>

              {/* Phone */}
              <div className={styles.infoGroup}>
                <span className={styles.infoLabel}>PHONE</span>
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneClean}`}
                  className={`${styles.infoValue} ${styles.infoValueLink}`}
                >
                  {BUSINESS_CONFIG.contact.phoneDisplay}
                </a>
                <span className={styles.infoSub}>Direct Studio Line</span>
              </div>

              {/* Email */}
              <div className={styles.infoGroup}>
                <span className={styles.infoLabel}>EMAIL</span>
                <a
                  href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                  className={`${styles.infoValue} ${styles.infoValueLink}`}
                >
                  {BUSINESS_CONFIG.contact.email}
                </a>
                <span className={styles.infoSub}>Enquiries & Estimates</span>
              </div>

              {/* Hours */}
              <div className={styles.infoGroup}>
                <span className={styles.infoLabel}>HOURS</span>
                <span className={styles.infoValue}>
                  Mon–Sat · 9:00 AM – 7:00 PM
                </span>
                <span className={styles.infoSub}>
                  Sun · 10:00 AM – 5:00 PM
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- 2. BOOKING FORM (WARM LIGHT SURFACE) ---------------- */}
      <section id="booking" className={styles.bookingSection} aria-label="Booking Request">
        <Container>
          <ContactForm />
        </Container>
      </section>

      {/* ---------------- 3. WIDE EDITORIAL LOCATION SECTION ---------------- */}
      <section className={styles.locationSection} aria-labelledby="studio-location-heading">
        <Container>
          <div className={styles.locationGrid}>
            {/* Left: Studio Editorial Meta */}
            <div className={styles.locationContentCol}>
              <div className={styles.locationEyebrow}>
                <span className="eyebrow-dot" />
                <span className="eyebrow-text">FACILITY & LOCATION</span>
              </div>

              <h2 id="studio-location-heading" className={styles.locationHeadline}>
                THE STUDIO<br />
                <em>NEW DELHI</em> · INDIA
              </h2>

              <div className={styles.locationAddressBlock}>
                <span className={styles.addressCity}>Demo Studio Facility</span>
                <p className={styles.addressDetail}>
                  Plot 14, Okhla Industrial Area Phase III, New Delhi 110020
                </p>
                <span className={styles.locationNotice}>
                  Dedicated indoor staging bays with filtered air supply & high-CRI inspection lights.
                </span>
              </div>

              {/* Direct WhatsApp Concierge Action */}
              <div className={styles.whatsappActionRow}>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.contact.phoneClean}?text=${encodeURIComponent(BUSINESS_CONFIG.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappDirectBtn}
                >
                  <WhatsAppIcon size={18} />
                  <span>Chat with Concierge</span>
                </a>
              </div>
            </div>

            {/* Right: Architectural Visual & Bay Plaque */}
            <div className={styles.locationVisualCol}>
              <div className={styles.mapVisualPlaque} role="img" aria-label="Stylized map showing New Delhi studio location coordinates">
                <div className={styles.mapGridPattern} />
                <div className={styles.mapCenterMark}>
                  <div className={styles.markerPinCircle}>
                    <MapPinIcon size={24} />
                  </div>
                  <span className={styles.mapCityName}>NEW DELHI / INDIA</span>
                  <span className={styles.mapCoordinates}>28.5355° N, 77.2680° E</span>
                </div>
              </div>

              <div className={styles.bayImageThumb}>
                <Image
                  src="/images/gallery-workshop-bays.jpg"
                  alt="Active indoor detailing bay at Veloce Studio New Delhi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.bayImg}
                />
                <div className={styles.bayBadge}>
                  <span className="eyebrow-dot" />
                  <span>ACTIVE WORKSHOP BAY</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- 4. FINAL MINIMAL CTA ---------------- */}
      <section className={styles.finalCtaSection} aria-label="Final Booking Action">
        <Container>
          <div className={styles.ctaContentWrapper}>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>YOUR APPOINTMENT</span>
            </div>

            <h2 className={styles.ctaHeadline}>
              READY WHEN <em>YOUR CAR IS.</em>
            </h2>

            <p className={styles.ctaLede}>
              Reserve your slot for exterior polish, interior extraction, or ceramic surface protection.
            </p>

            <a href="#booking" className={styles.ctaActionLink}>
              <span>BOOK A DETAIL</span>
              <span>→</span>
            </a>
          </div>
        </Container>
      </section>

      {/* ---------------- 5. INTERNAL LINKING STRIP ---------------- */}
      <nav className={styles.internalLinksStrip} aria-label="Quick links to other studio sections">
        <Container>
          <div className={styles.linksRow}>
            <Link href="/services" className={styles.linkItem}>
              <span>View All Services</span>
              <ArrowRightIcon size={13} />
            </Link>
            <Link href="/pricing" className={styles.linkItem}>
              <span>Compare Pricing Packages</span>
              <ArrowRightIcon size={13} />
            </Link>
            <Link href="/gallery" className={styles.linkItem}>
              <span>Browse Studio Gallery</span>
              <ArrowRightIcon size={13} />
            </Link>
            <Link href="/faq" className={styles.linkItem}>
              <span>Frequently Asked Questions</span>
              <ArrowRightIcon size={13} />
            </Link>
          </div>
        </Container>
      </nav>
    </>
  );
}
