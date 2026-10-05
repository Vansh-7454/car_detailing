import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { SERVICES, PROCESS_STEPS } from "@/data/mockData";
import { BUSINESS_CONFIG } from "@/data/businessConfig";
import { getServicesSchema, getBreadcrumbSchema } from "@/data/structuredData";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: `Car Detailing Services | ${BUSINESS_CONFIG.brandName}`,
  description:
    "Professional car detailing services in India for hatchbacks, sedans, and SUVs. Exterior decontamination, interior deep steam cleaning, dual-action paint polishing, ceramic coating, foam wash, and panel repair.",
  keywords: [
    "car detailing services India",
    "interior deep cleaning car",
    "paint polishing car",
    "ceramic protection India",
    "foam wash car",
    "denting and painting car panel",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Car Detailing Services | ${BUSINESS_CONFIG.brandName}`,
    description:
      "Comprehensive detailing disciplines for everyday Indian cars. Transparent starting prices, trained technicians, and safe pH-neutral treatments.",
    url: `${BUSINESS_CONFIG.site.baseUrl}/services`,
    siteName: BUSINESS_CONFIG.brandName,
    locale: BUSINESS_CONFIG.site.locale,
    type: "website",
    images: [
      {
        url: BUSINESS_CONFIG.site.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_CONFIG.brandName} - Detailing Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Car Detailing Services | ${BUSINESS_CONFIG.brandName}`,
    description:
      "Exterior foam wash, interior dry steam sanitization, machine paint correction, and ceramic protection.",
    images: [BUSINESS_CONFIG.site.ogImageUrl],
  },
};

export default function ServicesPage() {
  const servicesJsonLd = getServicesSchema();
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      {/* Schema.org Services & Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
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
                  WHAT WE DO
                </span>
              </div>

              <h1 className={styles.heroTitle}>
                Detailing That Goes <em>Beyond Clean</em>.
              </h1>

              <p className={styles.heroLede}>
                Our studio handles everyday Indian cars, SUVs, and sedans with professional cleaning, deep interior sanitization, dual-action swirl correction, and long-term surface protection calibrated for Indian dust, humidity, and road grime.
              </p>

              <div className={styles.heroBadges}>
                <div className={styles.heroBadge}>
                  <span className={styles.heroBadgeDot} />
                  <span>Everyday Hatchbacks &amp; Sedans</span>
                </div>
                <div className={styles.heroBadge}>
                  <span className={styles.heroBadgeDot} />
                  <span>Compact &amp; Full-Size SUVs</span>
                </div>
                <div className={styles.heroBadge}>
                  <span className={styles.heroBadgeDot} />
                  <span>pH-Neutral &amp; Clear-Coat Safe</span>
                </div>
              </div>
            </div>

            <div className={styles.heroImageContainer}>
              <Image
                src="/images/hero-indian-car.jpg"
                alt="Professional detailing studio in India with a Mahindra compact SUV under cleanroom inspection lighting"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.heroImage}
              />
              <div className={styles.heroImageOverlay} />
              <div className={styles.heroImageBadge}>
                <span className="eyebrow-dot" />
                <span>STUDIO BAY // GURUGRAM NCR</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- EDITORIAL SERVICES LIST ---------------- */}
      <section className={styles.servicesSection}>
        <Container>
          <div className={styles.servicesIntro}>
            <SectionHeading
              sectionNumber="01"
              eyebrow="SPECIALIZED DISCIPLINES"
              title={
                <>
                  Six Core <em>Detailing Services</em>
                </>
              }
              subtitle="Each discipline is carried out by trained technicians using dedicated microfibers, dual-action orbital machines, and non-destructive surface chemistry."
              align="center"
              theme="graphite"
            />
          </div>

          <div className={styles.editorialList}>
            {SERVICES.map((service, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className={`${styles.editorialRow} ${
                    isReversed ? styles.reversed : ""
                  }`}
                >
                  {/* Visual Image Column */}
                  <div className={styles.editorialImageCol}>
                    <div className={styles.editorialImageWrapper}>
                      <Image
                        src={service.image}
                        alt={service.imageAlt || `${service.title} - Professional Indian car detailing service`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className={styles.editorialImage}
                      />
                      <span className={styles.imageCategoryBadge}>
                        {service.category}
                      </span>
                      <span className={styles.imageDurationBadge}>
                        Turnaround: {service.duration}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Content Column */}
                  <div className={styles.editorialContentCol}>
                    <div className={styles.headerRow}>
                      <span className={styles.serviceNumber}>
                        {service.number}
                      </span>
                      <span className={styles.serviceMetaCategory}>
                        {service.category} CARE
                      </span>
                    </div>

                    <h2 className={styles.serviceTitle}>{service.title}</h2>

                    <div className={styles.accentLine} aria-hidden="true" />

                    <p className={styles.serviceDescription}>
                      {service.fullDesc}
                    </p>

                    {/* Deliverables / Scope of Work */}
                    <div className={styles.deliverablesBox}>
                      <h3 className={styles.deliverablesHeading}>
                        What is Included:
                      </h3>
                      <ul className={styles.deliverablesGrid}>
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className={styles.deliverableItem}>
                            <span className={styles.deliverableIcon}>
                              <CheckIcon size={14} />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer / Starting Price & Direct Link */}
                    <div className={styles.editorialFooter}>
                      <div className={styles.pricingBlock}>
                        <span className={styles.priceLabel}>Starting Price</span>
                        <span className={styles.priceValue}>
                          {service.startingPrice}
                        </span>
                        {service.priceNote && (
                          <span className={styles.priceSub}>
                            {service.priceNote}
                          </span>
                        )}
                      </div>

                      <Link
                        href={`/contact?service=${service.id}`}
                        className={styles.serviceCtaLink}
                      >
                        <span>Book {service.title}</span>
                        <span>
                          <ArrowRightIcon size={14} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Size Note */}
          <div className={styles.sizeNoteWrapper}>
            <div className={styles.sizeNote}>
              <span className={styles.sizeNoteDot} />
              <span>
                Final pricing may vary depending on vehicle size, condition and service requirements.
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- SERVICE PROCESS SECTION ---------------- */}
      <section className={`${styles.processSection} section-dark`}>
        <div className="ambient-glow-top" />
        <Container>
          <div className={styles.processHeader}>
            <SectionHeading
              sectionNumber="02"
              eyebrow="STRUCTURED PROTOCOL"
              title={
                <>
                  FROM CHECK-IN TO <em>FINISH</em>
                </>
              }
              subtitle="Every car follows our orderly 4-step workflow to guarantee clean interior fabrics, spotless underbody, and swirl-free paint."
              align="center"
              theme="dark"
            />
          </div>

          <ProcessSection theme="dark" />
        </Container>
      </section>

      {/* ---------------- BOTTOM GLOBAL CTA ---------------- */}
      <CTASection
        title={
          <>
            Ready to give your car a <em>better finish</em>?
          </>
        }
        lede="From quick routine foam maintenance to complete interior sanitization and multi-year ceramic shields, book your visit today."
        primaryCtaLabel="Book a Detail"
        primaryCtaHref="/contact"
        secondaryCtaLabel="View Packages"
        secondaryCtaHref="/pricing"
      />
    </>
  );
}
