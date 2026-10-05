import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import styles from "./CTASection.module.css";

interface CTASectionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  lede?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTASection({
  eyebrow = "STUDIO RESERVATIONS",
  title = (
    <>
      YOUR CAR <br />
      <em>DESERVES</em> BETTER.
    </>
  ),
  lede = "From deep interior steam sanitization to swirl-free machine polishing and durable ceramic shields, bring back that unforgettable showroom feeling.",
  primaryCtaLabel = "BOOK A DETAIL",
  primaryCtaHref = "/contact",
  secondaryCtaLabel = "EXPLORE PACKAGES",
  secondaryCtaHref = "/pricing",
}: CTASectionProps) {
  return (
    <section className={`${styles.section} section-padding`}>
      <div className={styles.ambientGlow} />

      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.eyebrowBox}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>{eyebrow}</span>
          </div>

          <h2 className={styles.headline}>{title}</h2>

          <p className={styles.lede}>{lede}</p>

          <div className={styles.buttonRow}>
            <Button
              href={primaryCtaHref}
              variant="primary"
              size="lg"
              iconRight={<ArrowRightIcon size={16} />}
            >
              {primaryCtaLabel}
            </Button>

            <Button
              href={secondaryCtaHref}
              variant="outline-accent"
              size="lg"
            >
              {secondaryCtaLabel}
            </Button>
          </div>

          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <span className={styles.trustLabel}>Trained Detailing Specialists</span>
              <span className={styles.trustDesc}>
                Trained technicians using dual-action orbital polishers and steam extraction.
              </span>
            </div>

            <div className={styles.trustItem}>
              <span className={styles.trustLabel}>Safe pH-Neutral Products</span>
              <span className={styles.trustDesc}>
                Gentle on factory clear coats, rubber beadings, and interior leather.
              </span>
            </div>

            <div className={styles.trustItem}>
              <span className={styles.trustLabel}>Transparent Pricing</span>
              <span className={styles.trustDesc}>
                Clear starting estimates with no hidden surcharges or surprise billing.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
