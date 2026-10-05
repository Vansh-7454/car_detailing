import React from "react";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ImageWrapper from "@/components/ui/ImageWrapper";
import HeroSection from "@/components/hero/HeroSection";
import EditorialServiceList from "@/components/sections/EditorialServiceList";
import GraphiteFeatureSection from "@/components/sections/GraphiteFeatureSection";
import EditorialVisualBreak from "@/components/sections/EditorialVisualBreak";
import EditorialSelectedWork from "@/components/sections/EditorialSelectedWork";
import PackageCard from "@/components/cards/PackageCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CTASection from "@/components/sections/CTASection";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { SERVICES, PACKAGES, TESTIMONIALS } from "@/data/mockData";
import { BUSINESS_CONFIG } from "@/data/businessConfig";
import { getLocalBusinessSchema } from "@/data/structuredData";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `Premium Car Detailing in India | ${BUSINESS_CONFIG.brandName}`,
  description:
    "Professional car detailing studio in India for hatchbacks, sedans, and SUVs. Safe pH-neutral foam washing, interior dry-steam sanitization, dual-action paint polishing, and ceramic coatings.",
  keywords: [
    "car detailing India",
    "car wash",
    "interior car cleaning",
    "paint polishing",
    "ceramic coating",
    "swirl mark removal",
    "car detailing service Delhi NCR",
    "snow foam wash",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Premium Car Detailing in India | ${BUSINESS_CONFIG.brandName}`,
    description: BUSINESS_CONFIG.subTagline,
    url: BUSINESS_CONFIG.site.baseUrl,
    siteName: BUSINESS_CONFIG.brandName,
    locale: BUSINESS_CONFIG.site.locale,
    type: "website",
    images: [
      {
        url: BUSINESS_CONFIG.site.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_CONFIG.brandName} - Car Detailing Studio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Premium Car Detailing in India | ${BUSINESS_CONFIG.brandName}`,
    description: BUSINESS_CONFIG.subTagline,
    images: [BUSINESS_CONFIG.site.ogImageUrl],
  },
};

export default function Home() {
  const localBusinessJsonLd = getLocalBusinessSchema();

  return (
    <>
      {/* Schema.org LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* ---------------- 1. HERO SECTION (Mode A: Light Editorial) ---------------- */}
      <HeroSection />

      {/* ---------------- 2. 01 PHILOSOPHY (Mode A: Light Editorial) ---------------- */}
      <section className="section-secondary section-padding">
        <Container>
          <div className={styles.philosophyGrid}>
            <div>
              <SectionHeading
                sectionNumber="01"
                eyebrow="OUR PHILOSOPHY"
                title={
                  <>
                    WE DON&apos;T JUST CLEAN CARS. <br />
                    <em>WE RESTORE HOW THEY FEEL.</em>
                  </>
                }
                theme="light"
              />

              <div className={styles.philosophyText}>
                <p>
                  Most Indian cars suffer damage not on the highway, but during daily morning dusting.
                  Wiping dry dust with a rough rag grinds grit into the clear coat, leaving thousands
                  of spiderweb swirl marks that rob your car of its original shine.
                </p>
                <p>
                  At <strong>Veloce Studio</strong>, we replace damaging wash habits with materials science.
                  From scratch-safe two-bucket foam washes to dual-action machine polishing and dry steam
                  sanitization, we restore your car&apos;s true gloss without stripping factory clear coat.
                </p>

                <div className={styles.quoteCallout}>
                  &ldquo;We treat your daily Swift, Creta, or City with the exact same precision care usually reserved for luxury cars.&rdquo;
                </div>

                <div style={{ marginTop: "1rem" }}>
                  <Button href="/about" variant="outline" size="md">
                    Learn About Our Standard
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <ImageWrapper
                src="/images/service-paint-polishing.jpg"
                alt="Technician polishing the paint of a Hyundai i20 with dual-action orbital machine"
                aspectRatio="4-3"
                badge="STAGE-2 CORRECTION"
                caption="Dual-action polishing eliminates wash swirls and restores true paint reflection."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- 3. MODE C: FULL-WIDTH EDITORIAL VISUAL BREAK ---------------- */}
      <EditorialVisualBreak />

      {/* ---------------- 4. 02 SERVICES (Mode A: Light Editorial Service List) ---------------- */}
      <section id="services" className="section-light section-padding">
        <Container>
          <SectionHeading
            sectionNumber="02"
            layoutVariant="editorial-split"
            eyebrow="SERVICES"
            title={
              <>
                Crafted Disciplines. <br />
                <em>Engineered Care</em>.
              </>
            }
            subtitle="Realistic, high-quality care designed for Indian driving conditions. Clean workshop bays, trained technicians, and transparent starting prices."
            theme="light"
          />

          <EditorialServiceList services={SERVICES} />
        </Container>
      </section>

      {/* ---------------- 5. MODE B: THE SINGLE GRAPHITE FEATURE SECTION ---------------- */}
      <GraphiteFeatureSection />

      {/* ---------------- 6. 03 THE PROCESS (Mode A: Horizontal Editorial Progression) ---------------- */}
      <section className="section-secondary section-padding">
        <Container>
          <SectionHeading
            sectionNumber="03"
            eyebrow="THE PROCESS"
            title={
              <>
                A Disciplined <em>Order of Work</em>
              </>
            }
            subtitle="Every vehicle goes through an orderly 4-step workflow to guarantee clean interior fabrics, spotless underbody, and swirl-free paint."
            align="left"
            theme="light"
          />

          <ProcessSection />
        </Container>
      </section>

      {/* ---------------- 7. 04 SELECTED WORK (Mode C: Image / Visual Portfolio) ---------------- */}
      <section className="section-light section-padding">
        <Container>
          <SectionHeading
            sectionNumber="04"
            layoutVariant="editorial-split"
            eyebrow="SELECTED WORK"
            title={
              <>
                Portfolio of <em>Recent Transformations</em>
              </>
            }
            subtitle="Documented outcomes across active studio bays: scratch-safe washes, dual-action swirl correction, and deep interior sanitization."
            theme="light"
          />

          <EditorialSelectedWork />
        </Container>
      </section>

      {/* ---------------- 8. 05 PRICING (Mode A: Dominant Complete Detail Centerpiece) ---------------- */}
      <section className="section-dark section-padding">
        <Container>
          <SectionHeading
            sectionNumber="05"
            eyebrow="PRICING"
            title={
              <>
                Transparent <em>Detailing Packages</em>
              </>
            }
            subtitle="Clear starting estimates for hatchbacks, sedans, and SUVs. No hidden surcharges or surprise billing at handover."
            align="center"
            theme="dark"
          />

          <div className={styles.packagesGrid}>
            {PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.id}
                packageData={pkg}
                theme="dark"
              />
            ))}
          </div>

          <div className={styles.sectionActionRow}>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              iconRight={<ArrowRightIcon size={16} />}
            >
              Compare Deliverables Side-by-Side
            </Button>
          </div>
        </Container>
      </section>

      {/* ---------------- 9. OUR STANDARD (Mode A: Architectural Specification Grid) ---------------- */}
      <section className="section-graphite section-padding">
        <Container>
          <SectionHeading
            eyebrow="STUDIO BENCHMARKS"
            title={
              <>
                Practical Reasons <em>Car Owners Trust Us</em>
              </>
            }
            subtitle="We focus on what actually matters: trained staff, quality products, thorough cleaning, and transparent package pricing."
            align="center"
            theme="dark"
          />

          <WhyChooseUsSection theme="dark" />
        </Container>
      </section>

      {/* ---------------- 10. TESTIMONIALS (Mode A: Light Editorial Feedback) ---------------- */}
      <section className="section-secondary section-padding">
        <Container>
          <SectionHeading
            eyebrow="VERIFIED EXPERIENCES"
            title={
              <>
                Trusted by <em>Everyday Car Owners</em>
              </>
            }
            subtitle="Illustrative vehicle care scenarios and feedback from daily drivers across Delhi-NCR (Demo Studio Presentation)."
            align="center"
            theme="light"
          />

          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t) => (
              <TestimonialCard
                key={t.id}
                testimonial={t}
                theme="light"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- 11. FINAL CTA (Minimal Typographic Statement) ---------------- */}
      <CTASection />
    </>
  );
}
