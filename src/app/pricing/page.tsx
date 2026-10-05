import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/Icons";
import {
  PACKAGES,
  ADDITIONAL_SERVICES,
  PACKAGE_COMPARISON,
} from "@/data/mockData";
import { BUSINESS_CONFIG } from "@/data/businessConfig";
import { getBreadcrumbSchema } from "@/data/structuredData";
import styles from "./pricing.module.css";

export const metadata: Metadata = {
  title: `Car Detailing Packages & Prices | ${BUSINESS_CONFIG.brandName}`,
  description:
    "Clear starting prices and detailing packages for everyday Indian cars. Compare Essential Care, Complete Detail, and Premium Protection packages with honest vehicle category pricing.",
  keywords: [
    "car detailing prices India",
    "car wash cost Delhi NCR",
    "interior cleaning price car",
    "ceramic coating price India",
    "car detailing packages",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: `Car Detailing Packages & Prices | ${BUSINESS_CONFIG.brandName}`,
    description:
      "Simple, honest packages for hatchbacks, sedans, and SUVs. Starting from ₹999 for routine care to complete ceramic shields.",
    url: `${BUSINESS_CONFIG.site.baseUrl}/pricing`,
    siteName: BUSINESS_CONFIG.brandName,
    locale: BUSINESS_CONFIG.site.locale,
    type: "website",
    images: [
      {
        url: BUSINESS_CONFIG.site.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_CONFIG.brandName} - Detailing Packages & Prices`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Car Detailing Packages & Prices | ${BUSINESS_CONFIG.brandName}`,
    description:
      "Transparent vehicle category pricing for everyday hatchbacks, sedans, and SUVs.",
    images: [BUSINESS_CONFIG.site.ogImageUrl],
  },
};

export default function PricingPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "" },
    { name: "Pricing", url: "/pricing" },
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
          <div className={styles.heroContent}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              TRANSPARENT AUTO CARE
            </span>

            <h1 className={styles.heroTitle}>
              Simple Packages. <em>Better Car Care</em>.
            </h1>

            <p className={styles.heroLede}>
              Clear starting prices for everyday detailing needs. Calibrated specifically for Indian hatchbacks, sedans, and SUVs with no hidden surcharges or surprise billing at vehicle delivery.
            </p>

            <div className={styles.segmentGuide}>
              <div className={styles.segmentPill}>
                <span className={styles.segmentDot} />
                <span>Hatchbacks (Swift, i20, Punch)</span>
              </div>
              <div className={styles.segmentPill}>
                <span className={styles.segmentDot} />
                <span>Sedans &amp; Compact SUVs (City, Creta, Brezza, Nexon)</span>
              </div>
              <div className={styles.segmentPill}>
                <span className={styles.segmentDot} />
                <span>Full SUVs (Thar, Scorpio, XUV700, Safari)</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- 3 AUTOMOTIVE PACKAGES ---------------- */}
      <section className={styles.packagesSection}>
        <div className="ambient-glow-top" />
        <Container>
          <div className={styles.packagesIntro}>
            <SectionHeading
              sectionNumber="01"
              eyebrow="CURATED PROGRAMS"
              title={
                <>
                  Three Detailing <em>Package Tiers</em>
                </>
              }
              subtitle="Structured specifically for real driving conditions: from routine post-monsoon foam maintenance to complete swirl eradication and ceramic protection."
              align="center"
              theme="dark"
            />
          </div>

          <div className={styles.packagesGrid}>
            {PACKAGES.map((pkg) => {
              const isRecommended = pkg.isPopular;

              return (
                <article
                  key={pkg.id}
                  className={`${styles.packageCard} ${
                    isRecommended ? styles.recommended : ""
                  }`}
                >
                  {isRecommended && (
                    <span className={styles.recommendedBadge}>
                      Recommended Everyday Package
                    </span>
                  )}

                  <div className={styles.cardHeader}>
                    <span className={styles.cardBadge}>{pkg.badge}</span>
                    <h2 className={styles.cardTitle}>{pkg.name}</h2>
                    <p className={styles.cardSubtitle}>{pkg.tagline}</p>
                  </div>

                  <div className={styles.priceBlock}>
                    <div className={styles.priceMain}>
                      <span className={styles.priceValue}>{pkg.price}</span>
                      <span className={styles.pricePeriod}>{pkg.priceNote}</span>
                    </div>
                    <div className={styles.turnaroundMeta}>
                      Turnaround: {pkg.duration}
                    </div>
                  </div>

                  <span className={styles.featureListHeading}>
                    What is Included:
                  </span>

                  <ul className={styles.featuresList}>
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <span className={styles.featureIcon}>
                          <CheckIcon size={14} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.cardAction}>
                    <Button
                      href={`/contact?package=${pkg.id}`}
                      variant={isRecommended ? "primary" : "outline-accent"}
                      fullWidth
                      size="md"
                    >
                      {pkg.ctaLabel}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------------- ADDITIONAL SERVICES (Refined List) ---------------- */}
      <section className={styles.additionalSection}>
        <Container>
          <div className={styles.additionalIntro}>
            <SectionHeading
              sectionNumber="02"
              eyebrow="A LA CARTE ADDITIONS"
              title={
                <>
                  Additional <em>Detailing Services</em>
                </>
              }
              subtitle="Select standalone services or bundle them with any maintenance package for custom auto care."
              align="center"
              theme="graphite"
            />
          </div>

          <div className={styles.servicesListWrapper}>
            {ADDITIONAL_SERVICES.map((item) => (
              <div key={item.id} className={styles.serviceRowItem}>
                <div className={styles.rowMain}>
                  <div className={styles.rowTitleGroup}>
                    <h3 className={styles.rowName}>{item.name}</h3>
                    <span className={styles.rowCategory}>{item.category}</span>
                  </div>
                  <p className={styles.rowDesc}>{item.desc}</p>
                </div>

                <div className={styles.rowPricing}>
                  <span className={styles.rowPriceValue}>{item.price}</span>
                  <span className={styles.rowDuration}>{item.duration}</span>
                </div>

                <Link
                  href={`/contact?service=${item.id}`}
                  className={styles.rowActionLink}
                >
                  <span>Book Service</span>
                  <ArrowRightIcon size={13} />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- PACKAGE COMPARISON SECTION ---------------- */}
      <section className={styles.comparisonSection}>
        <Container>
          <div className={styles.comparisonIntro}>
            <SectionHeading
              sectionNumber="03"
              eyebrow="SIDE-BY-SIDE BREAKDOWN"
              title={
                <>
                  Package <em>Comparison</em>
                </>
              }
              subtitle="Compare deliverables across all three packages to select the exact level of surface refinement your vehicle needs."
              align="center"
              theme="dark"
            />
          </div>

          {/* Desktop Comparison Matrix */}
          <div className={styles.desktopMatrix}>
            <div className={styles.matrixHeader}>
              <div className={styles.matrixHeaderCol}>
                <span className={styles.matrixColTitle}>Service Feature</span>
                <span className={styles.cellNote}>Included Deliverables</span>
              </div>

              <div className={`${styles.matrixHeaderCol} ${styles.center}`}>
                <span className={styles.matrixColTitle}>ESSENTIAL CARE</span>
                <span className={styles.matrixColPrice}>₹999 onwards</span>
              </div>

              <div className={`${styles.matrixHeaderCol} ${styles.center}`}>
                <span className={styles.matrixColTitle}>COMPLETE DETAIL</span>
                <span className={styles.matrixColPrice}>₹2,499 onwards</span>
              </div>

              <div className={`${styles.matrixHeaderCol} ${styles.center}`}>
                <span className={styles.matrixColTitle}>PREMIUM PROTECTION</span>
                <span className={styles.matrixColPrice}>₹7,999 onwards</span>
              </div>
            </div>

            {PACKAGE_COMPARISON.map((row, index) => (
              <div key={index} className={styles.matrixRow}>
                <div className={styles.featureMeta}>
                  <span className={styles.featureName}>{row.feature}</span>
                  <span className={styles.featureDesc}>{row.description}</span>
                </div>

                {/* Essential Column */}
                <div className={styles.matrixStatusCell}>
                  {row.essential ? (
                    <span className={styles.includedBadge}>
                      <CheckIcon size={14} />
                      <span>Included</span>
                    </span>
                  ) : (
                    <span className={styles.notIncluded}>— Not included</span>
                  )}
                  {row.essentialNote && (
                    <span className={styles.cellNote}>{row.essentialNote}</span>
                  )}
                </div>

                {/* Complete Column */}
                <div className={styles.matrixStatusCell}>
                  {row.complete ? (
                    <span className={styles.includedBadge}>
                      <CheckIcon size={14} />
                      <span>Included</span>
                    </span>
                  ) : (
                    <span className={styles.notIncluded}>— Not included</span>
                  )}
                  {row.completeNote && (
                    <span className={styles.cellNote}>{row.completeNote}</span>
                  )}
                </div>

                {/* Premium Column */}
                <div className={styles.matrixStatusCell}>
                  {row.premium ? (
                    <span className={styles.includedBadge}>
                      <CheckIcon size={14} />
                      <span>Included</span>
                    </span>
                  ) : (
                    <span className={styles.notIncluded}>— Not included</span>
                  )}
                  {row.premiumNote && (
                    <span className={styles.cellNote}>{row.premiumNote}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Stacked Comparison (No horizontal overflow) */}
          <div className={styles.mobileStackedComparison}>
            {/* Essential Mobile */}
            <div className={styles.mobilePackageCard}>
              <div className={styles.mobileCardHeader}>
                <h3 className={styles.mobileCardTitle}>ESSENTIAL CARE</h3>
                <span className={styles.mobileCardPrice}>₹999 onwards</span>
              </div>
              <div className={styles.mobileFeaturesList}>
                {PACKAGE_COMPARISON.map((row, idx) => (
                  <div key={idx} className={styles.mobileFeatureRow}>
                    <span className={styles.mobileFeatureName}>
                      {row.feature}
                    </span>
                    {row.essential ? (
                      <span className={styles.includedBadge}>
                        <CheckIcon size={13} />
                        <span>Included</span>
                      </span>
                    ) : (
                      <span className={styles.notIncluded}>— Not included</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Mobile */}
            <div
              className={`${styles.mobilePackageCard} ${styles.recommended}`}
            >
              <div className={styles.mobileCardHeader}>
                <div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--accent)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Recommended Everyday
                  </span>
                  <h3 className={styles.mobileCardTitle}>COMPLETE DETAIL</h3>
                </div>
                <span className={styles.mobileCardPrice}>₹2,499 onwards</span>
              </div>
              <div className={styles.mobileFeaturesList}>
                {PACKAGE_COMPARISON.map((row, idx) => (
                  <div key={idx} className={styles.mobileFeatureRow}>
                    <span className={styles.mobileFeatureName}>
                      {row.feature}
                    </span>
                    {row.complete ? (
                      <span className={styles.includedBadge}>
                        <CheckIcon size={13} />
                        <span>Included</span>
                      </span>
                    ) : (
                      <span className={styles.notIncluded}>— Not included</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Mobile */}
            <div className={styles.mobilePackageCard}>
              <div className={styles.mobileCardHeader}>
                <h3 className={styles.mobileCardTitle}>PREMIUM PROTECTION</h3>
                <span className={styles.mobileCardPrice}>₹7,999 onwards</span>
              </div>
              <div className={styles.mobileFeaturesList}>
                {PACKAGE_COMPARISON.map((row, idx) => (
                  <div key={idx} className={styles.mobileFeatureRow}>
                    <span className={styles.mobileFeatureName}>
                      {row.feature}
                    </span>
                    {row.premium ? (
                      <span className={styles.includedBadge}>
                        <CheckIcon size={13} />
                        <span>Included</span>
                      </span>
                    ) : (
                      <span className={styles.notIncluded}>— Not included</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transparent Pricing Disclaimer Box */}
          <div className={styles.disclaimerWrapper}>
            <div className={styles.disclaimerBox}>
              <span className={styles.disclaimerHeading}>
                Honest Estimation Policy
              </span>
              <p className={styles.disclaimerText}>
                All prices shown are starting prices for demonstration purposes. Final pricing depends on vehicle size, condition and selected service.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- BOTTOM GLOBAL CTA ---------------- */}
      <CTASection
        title={
          <>
            Ready to give your car a <em>better finish</em>?
          </>
        }
        lede="Book your slot online or consult with our studio master detailers to determine the ideal preservation package for your vehicle."
        primaryCtaLabel="Book a Detail"
        primaryCtaHref="/contact"
        secondaryCtaLabel="View Packages"
        secondaryCtaHref="/pricing"
      />
    </>
  );
}
