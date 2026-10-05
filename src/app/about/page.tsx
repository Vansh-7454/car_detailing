import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import { ArrowRightIcon } from "@/components/ui/Icons";
import {
  ABOUT_VALUES,
  ABOUT_APPROACH,
  DETAILING_STANDARDS,
  WHY_CUSTOMERS_CHOOSE_STUDIO,
} from "@/data/mockData";
import { BUSINESS_CONFIG } from "@/data/businessConfig";
import { getBreadcrumbSchema } from "@/data/structuredData";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: `About ${BUSINESS_CONFIG.brandName} | Professional Car Care`,
  description:
    "Learn about Veloce Studio: a professional Indian car-detailing business dedicated to everyday hatchbacks, sedans, and SUVs. Disciplined process, honest pricing, and careful surface care.",
  keywords: [
    "about car detailing studio",
    "Indian car detailing philosophy",
    "professional car care everyday cars",
    "swirl mark removal Delhi NCR",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About ${BUSINESS_CONFIG.brandName} | Professional Car Care`,
    description:
      "Professional car care for everyday Indian vehicles. Taking care of surfaces people use daily with intention and honest pricing.",
    url: `${BUSINESS_CONFIG.site.baseUrl}/about`,
    siteName: BUSINESS_CONFIG.brandName,
    locale: BUSINESS_CONFIG.site.locale,
    type: "website",
    images: [
      {
        url: BUSINESS_CONFIG.site.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `About ${BUSINESS_CONFIG.brandName} - Car Detailing Studio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${BUSINESS_CONFIG.brandName} | Professional Car Care`,
    description:
      "Professional car care for everyday Indian vehicles: hatchbacks, sedans, and SUVs.",
    images: [BUSINESS_CONFIG.site.ogImageUrl],
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      {/* Schema.org Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  ABOUT THE STUDIO
                </span>
              </div>

              <h1 className={styles.heroTitle}>
                WE DON&apos;T JUST CLEAN CARS. <br />
                <em>WE RESTORE HOW THEY FEEL.</em>
              </h1>

              <p className={styles.heroLede}>
                A good detailing job is not simply about making a car look clean. It is about taking care of the surfaces people touch and use every day — restoring the depth, clarity, and tactile feeling of brand-new automotive craftsmanship.
              </p>
            </div>

            <div className={styles.heroImageContainer}>
              <Image
                src="/images/service-interior-cleaning.jpg"
                alt="Detailing technician meticulously cleaning the interior dashboard and controls of an Indian family car"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.heroImage}
              />
              <div className={styles.heroImageBadge}>
                <span className="eyebrow-dot" />
                <span>INTERIOR CRAFTSMANSHIP // TATA NEXON</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- 2. OUR APPROACH (Split Section) ---------------- */}
      <section className={styles.approachSection}>
        <Container>
          <div className={styles.approachGrid}>
            {/* Left: Large Detailing Work Image */}
            <div className={styles.approachImageWrapper}>
              <Image
                src="/images/service-paint-polishing.jpg"
                alt="Detailing technician operating a dual-action machine polisher to eliminate wash swirls on an Indian sedan"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.approachImage}
              />
            </div>

            {/* Right: Approach Steps */}
            <div className={styles.approachContent}>
              <div className={styles.approachHeader}>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  OUR APPROACH
                </span>
                <h2 className={styles.approachTitle}>
                  Detailing, Done With <em>Intention</em>.
                </h2>
                <p className={styles.approachLede}>
                  We replace quick roadside wash habits with disciplined steps designed to preserve your clear coat and cabin fabrics over years of daily Indian driving.
                </p>
              </div>

              <div className={styles.approachStepsList}>
                {ABOUT_APPROACH.map((step) => (
                  <div key={step.step} className={styles.approachStepItem}>
                    <div className={styles.stepNumberPill}>{step.step}</div>
                    <div className={styles.stepMeta}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- 3. BRAND STORY ---------------- */}
      <section className={styles.storySection}>
        <Container>
          <div className={styles.storyContentWrapper}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              THE STUDIO ORIGIN
            </span>

            <h2 className={styles.storyTitle}>
              Professional Car Care for <em>Everyday Indian Vehicles</em>.
            </h2>

            <div className={styles.storyParagraphs}>
              <p>
                In most Indian cities, car care is polarized between two extremes: quick morning roadside wipe-downs that leave clear coats covered in scratches, or ultra-expensive luxury boutiques that cater almost exclusively to rare supercars.
              </p>
              <p>
                <strong>Veloce Studio</strong> was created to bridge that gap. The studio is designed for customers who want their hatchbacks, sedans, SUVs, and daily-use cars to receive proper professional care.
              </p>
              <p>
                We believe that family cars, daily office commuters, and highway workhorses deserve the exact same professional tools, non-destructive chemistry, and trained techniques that keep automotive surfaces protected over years of Indian driving conditions.
              </p>
            </div>

            <div className={styles.vehicleSegmentTags}>
              <div className={styles.segmentTag}>
                <span className={styles.segmentTagDot} />
                <span>Hatchbacks</span>
              </div>
              <div className={styles.segmentTag}>
                <span className={styles.segmentTagDot} />
                <span>Sedans</span>
              </div>
              <div className={styles.segmentTag}>
                <span className={styles.segmentTagDot} />
                <span>SUVs</span>
              </div>
              <div className={styles.segmentTag}>
                <span className={styles.segmentTagDot} />
                <span>Daily-Use Cars</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- 4. VALUES ---------------- */}
      <section className={styles.valuesSection}>
        <Container>
          <div className={styles.valuesIntro}>
            <SectionHeading
              eyebrow="Guiding Principles"
              title={
                <>
                  Four Values That <em>Guide Our Work</em>
                </>
              }
              subtitle="Clear principles built around craftsmanship, transparency, and repeatable quality across every vehicle that enters our bays."
              align="center"
              theme="graphite"
            />
          </div>

          <div className={styles.valuesGrid}>
            {ABOUT_VALUES.map((val) => (
              <div key={val.number} className={styles.valueCard}>
                <span className={styles.valueNumber}>{val.number}</span>
                <h3 className={styles.valueTitle}>{val.title}</h3>
                <p className={styles.valueDesc}>{val.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- 5. THE DETAILING STANDARD ---------------- */}
      <section className={styles.standardsSection}>
        <div className="ambient-glow-top" />
        <Container>
          <div className={styles.standardsGrid}>
            <div className={styles.standardsContent}>
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  SURFACE DISCIPLINES
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2rem, 3.5vw, 2.85rem)",
                    fontWeight: 500,
                    lineHeight: 1.15,
                    color: "var(--text-inverse-primary)",
                    marginTop: "0.5rem",
                  }}
                >
                  Every Surface Gets Its <em>Attention</em>.
                </h2>
              </div>

              <div className={styles.standardsList}>
                {DETAILING_STANDARDS.map((std) => (
                  <div
                    key={std.category}
                    className={styles.standardCategoryBlock}
                  >
                    <div className={styles.standardCategoryHeader}>
                      <span className={styles.standardCategoryName}>
                        {std.category}
                      </span>
                      <span className={styles.standardItemsRow}>
                        {std.items.join(" • ")}
                      </span>
                    </div>
                    <p className={styles.standardDesc}>{std.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.standardsImageWrapper}>
              <Image
                src="/images/hero-indian-car.jpg"
                alt="Indian compact SUV parked under professional studio lighting after complete surface detailing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.standardsImage}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- 6. WHY CUSTOMERS CHOOSE THE STUDIO ---------------- */}
      <section className={styles.whyChooseSection}>
        <Container>
          <div className={styles.whyIntro}>
            <SectionHeading
              eyebrow="Practical Reassurance"
              title={
                <>
                  Why Customers <em>Choose The Studio</em>
                </>
              }
              subtitle="Practical, realistic reasons car owners bring their daily vehicles to our studio bays."
              align="center"
              theme="light"
            />
          </div>

          <div className={styles.whyGrid}>
            {WHY_CUSTOMERS_CHOOSE_STUDIO.map((item, idx) => (
              <div key={idx} className={styles.whyCard}>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Internal Linking Quick Navigation Strip */}
          <div className={styles.internalLinkStrip}>
            <Link href="/services" className={styles.internalLink}>
              <span>Explore All Detailing Services</span>
              <ArrowRightIcon size={13} />
            </Link>
            <Link href="/gallery" className={styles.internalLink}>
              <span>View Transformation Gallery</span>
              <ArrowRightIcon size={13} />
            </Link>
            <Link href="/contact" className={styles.internalLink}>
              <span>Schedule Bay Intake</span>
              <ArrowRightIcon size={13} />
            </Link>
          </div>
        </Container>
      </section>

      {/* ---------------- 7. ABOUT CTA ---------------- */}
      <CTASection
        eyebrow="PROFESSIONAL AUTO CARE"
        title={
          <>
            Your everyday car deserves <em>professional care</em>.
          </>
        }
        lede="Bring your vehicle in for a non-destructive walkaround inspection, paint depth evaluation, and honest recommendation."
        primaryCtaLabel="View Services"
        primaryCtaHref="/services"
        secondaryCtaLabel="Book a Detail"
        secondaryCtaHref="/contact"
      />
    </>
  );
}
