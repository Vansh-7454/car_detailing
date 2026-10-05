import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import GalleryViewer from "@/components/gallery/GalleryViewer";
import BeforeAfterSlider from "@/components/gallery/BeforeAfterSlider";
import { BUSINESS_CONFIG } from "@/data/businessConfig";
import { getBreadcrumbSchema } from "@/data/structuredData";
import styles from "./gallery.module.css";

export const metadata: Metadata = {
  title: `Car Detailing Gallery | ${BUSINESS_CONFIG.brandName}`,
  description:
    "Explore our portfolio of detailed Indian cars. Real transformations across Maruti Swift, Hyundai Creta, Tata Nexon, Mahindra Thar, and Honda City — showing foam washing, interior steam sanitization, and swirl removal.",
  keywords: [
    "car detailing portfolio",
    "Indian car wash before after",
    "paint correction results Creta Swift Nexon",
    "ceramic coating gallery India",
    "interior steam detailing photos",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: `Car Detailing Gallery | ${BUSINESS_CONFIG.brandName}`,
    description:
      "Documented detailing transformations of everyday hatchbacks, sedans, and SUVs across India.",
    url: `${BUSINESS_CONFIG.site.baseUrl}/gallery`,
    siteName: BUSINESS_CONFIG.brandName,
    locale: BUSINESS_CONFIG.site.locale,
    type: "website",
    images: [
      {
        url: BUSINESS_CONFIG.site.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_CONFIG.brandName} - Car Detailing Gallery`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Car Detailing Gallery | ${BUSINESS_CONFIG.brandName}`,
    description:
      "Documented detailing transformations of everyday Indian vehicles.",
    images: [BUSINESS_CONFIG.site.ogImageUrl],
  },
};

export default function GalleryPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "" },
    { name: "Gallery", url: "/gallery" },
  ]);

  return (
    <>
      {/* Schema.org Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ---------------- HERO SECTION ---------------- */}
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  STUDIO ARCHIVES // REAL WORK
                </span>
              </div>

              <h1 className={styles.heroTitle}>
                THE WORK <em>SPEAKS FOR ITSELF</em>.
              </h1>

              <p className={styles.heroLede}>
                Real transformations of everyday hatchbacks, sedans, and SUVs. Precision detailing, scratch-free foam washing, and dual-action paint correction documented across our active studio bays.
              </p>

              <div className={styles.heroVehiclePills}>
                <span className={styles.vehiclePill}>Maruti Suzuki Swift</span>
                <span className={styles.vehiclePill}>Hyundai Creta</span>
                <span className={styles.vehiclePill}>Tata Nexon</span>
                <span className={styles.vehiclePill}>Mahindra Thar</span>
                <span className={styles.vehiclePill}>Honda City</span>
                <span className={styles.vehiclePill}>Tata Punch</span>
                <span className={styles.vehiclePill}>Maruti Brezza</span>
                <span className={styles.vehiclePill}>Kia Seltos</span>
                <span className={styles.vehiclePill}>Hyundai Venue</span>
                <span className={styles.vehiclePill}>Hyundai i20</span>
              </div>
            </div>

            <div className={styles.heroImageContainer}>
              <Image
                src="/images/gallery-workshop-bays.jpg"
                alt="Active Indian car detailing studio workshop showing Maruti Brezza and Kia Seltos in detailing bays"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.heroImage}
              />
              <div className={styles.heroImageBadge}>
                <span className="eyebrow-dot" />
                <span>STUDIO BAYS // NCR FACILITY</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- FILTERABLE PORTFOLIO SECTION ---------------- */}
      <section className={styles.portfolioSection}>
        <Container>
          <div className={styles.portfolioIntro}>
            <SectionHeading
              sectionNumber="01"
              eyebrow="COMMISSION ARCHIVE"
              title={
                <>
                  Documented <em>Detailing Disciplines</em>
                </>
              }
              subtitle="Filter across wash bays, interior cabin steam sanitization, wheel de-ironing, and dual-action swirl reduction."
              align="center"
              theme="light"
            />
          </div>

          {/* Interactive React State Client Component */}
          <GalleryViewer />
        </Container>
      </section>

      {/* ---------------- BEFORE / AFTER COMPARISON SECTION ---------------- */}
      <section className={styles.beforeAfterSection}>
        <div className="ambient-glow-top" />
        <Container>
          <div className={styles.beforeAfterIntro}>
            <SectionHeading
              sectionNumber="02"
              eyebrow="SURFACE TRANSFORMATION"
              title={
                <>
                  Before &amp; After: <em>Swirl Correction</em>
                </>
              }
              subtitle="Drag the interactive slider to inspect how dual-action machine compounding levels micro-scratches and eliminates spiderweb wash haze on dark clear coats."
              align="center"
              theme="dark"
            />
          </div>

          {/* Draggable Comparison Slider with matching composition bonnet */}
          <BeforeAfterSlider
            beforeSrc="/images/before-bonnet-swirls.jpg"
            afterSrc="/images/after-bonnet-polished.jpg"
            beforeAlt="Dark metallic car bonnet covered in circular spiderweb swirls under detailing inspection lamp"
            afterAlt="Dark metallic car bonnet with deep liquid gloss and zero swirls after machine polish compounding"
            title="Bonnet Inspection Spot: Dual-Action Compounding"
            description="Eliminates spiderweb micro-scratches caused by hard borewell water and dirty society dusting cloths."
          />
        </Container>
      </section>

      {/* ---------------- BOTTOM GLOBAL CTA ---------------- */}
      <CTASection
        title={
          <>
            Ready to give your car a <em>better finish</em>?
          </>
        }
        lede="Schedule your inspection visit or reserve a detailing bay for your hatchback, sedan, or SUV."
        primaryCtaLabel="Book a Detail"
        primaryCtaHref="/contact"
        secondaryCtaLabel="View Packages"
        secondaryCtaHref="/pricing"
      />
    </>
  );
}
