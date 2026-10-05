import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import styles from "./GraphiteFeatureSection.module.css";

export default function GraphiteFeatureSection() {
  return (
    <section className={styles.section} aria-label="Studio Brand Philosophy">
      <div className={styles.ambientGlow} aria-hidden="true" />

      <Container>
        <div className={styles.editorialGrid}>
          {/* Left / Top Editorial Statement */}
          <div className={styles.statementCol}>
            <div className={styles.eyebrowBox}>
              <span className={styles.eyebrowDot} />
              <span className={styles.eyebrowText}>THE STUDIO PHILOSOPHY</span>
            </div>

            <h2 className={styles.headline}>
              EVERY SURFACE <br />
              <span className={styles.headlineAccent}>TELLS A STORY.</span>
            </h2>
          </div>

          {/* Right / Bottom Editorial Supporting Copy & Action */}
          <div className={styles.contentCol}>
            <p className={styles.bodyText}>
              From daily office commutes under urban dust to monsoon highway grit,
              Indian road conditions leave their mark on every clear coat and cabin fabric.
              We replace quick roadside wipe-downs with materials science, non-destructive
              chemistry, and meticulous craft.
            </p>

            <div className={styles.specList}>
              <div className={styles.specItem}>
                <span className={styles.specNumber}>01</span>
                <div className={styles.specMeta}>
                  <span className={styles.specTitle}>Measured Paint Care</span>
                  <span className={styles.specDesc}>Preserving OEM clear coat thickness</span>
                </div>
              </div>

              <div className={styles.specItem}>
                <span className={styles.specNumber}>02</span>
                <div className={styles.specMeta}>
                  <span className={styles.specTitle}>Dry Vapor Sanitization</span>
                  <span className={styles.specDesc}>140°C thermal extraction without moisture</span>
                </div>
              </div>
            </div>

            <div className={styles.actionsRow}>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                iconRight={<ArrowRightIcon size={16} />}
              >
                BOOK A DETAIL
              </Button>

              <Link href="/about" className={styles.secondaryLink}>
                <span>Our Standard</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
