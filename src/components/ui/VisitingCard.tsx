"use client";

import React, { useState } from "react";
import { StudioLogoIcon } from "@/components/ui/Icons";
import { BUSINESS_CONFIG } from "@/data/businessConfig";
import styles from "./VisitingCard.module.css";

export default function VisitingCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.perspectiveWrapper}
        onClick={toggleFlip}
        role="region"
        aria-label="Interactive Digital Visiting Card"
      >
        <div
          className={`${styles.flipper} ${isFlipped ? styles.isFlipped : ""}`}
          title="Click to flip card"
        >
          {/* ---------------- FRONT FACE ---------------- */}
          <div className={`${styles.cardFace} ${styles.cardFront}`}>
            <div className={styles.frontTexture} />

            <div className={styles.frontTop}>
              <span className={styles.goldFoilBadge}>STUDIO PASS // AUTO CARE</span>
              <span style={{ fontSize: "0.7rem", color: "var(--accent-light)", opacity: 0.8 }}>
                EST. 2024
              </span>
            </div>

            <div className={styles.frontCenter}>
              <div className={styles.brandIdentityRow}>
                <StudioLogoIcon size={38} className={styles.cardLogo} />
                <span className={styles.cardBrandName}>
                  {BUSINESS_CONFIG.brandName}
                </span>
              </div>
              <p className={styles.cardTagline}>
                {BUSINESS_CONFIG.tagline}
              </p>
            </div>

            <div className={styles.frontBottom}>
              <span className={styles.cardEdition}>Official Demo Identity</span>
              <span className={styles.cardHint}>
                <span>Tap to view reverse</span>
                <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </div>

          {/* ---------------- BACK FACE ---------------- */}
          <div className={`${styles.cardFace} ${styles.cardBack}`}>
            <div className={styles.backHeader}>
              <div>
                <span className={styles.studioName}>Demo Detailing Studio</span>
                <div className={styles.servicePill}>
                  Car Detailing | Car Wash | Paint Care
                </div>
              </div>
              <StudioLogoIcon size={26} style={{ color: "var(--accent)" }} />
            </div>

            <div className={styles.backGrid}>
              <div className={styles.contactItem}>
                <span className={styles.itemLabel}>Phone</span>
                <span className={styles.itemValue}>Demo / Replace Before Launch</span>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.itemLabel}>Email</span>
                <span className={styles.itemValue}>Demo / Replace Before Launch</span>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.itemLabel}>Location</span>
                <span className={styles.itemValue}>New Delhi, India</span>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.itemLabel}>Website</span>
                <span className={styles.itemValue}>Replace Before Launch</span>
              </div>
            </div>

            <div className={styles.backFooter}>
              <span className={styles.disclaimerText}>
                Replace details before commercial launch
              </span>
              <span className={styles.cardHint}>
                <span>Tap to flip back</span>
                <span aria-hidden="true">&larr;</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Button */}
      <div className={styles.controlsRow}>
        <button
          type="button"
          onClick={toggleFlip}
          className={styles.flipButton}
          aria-label={isFlipped ? "Flip to front side of visiting card" : "Flip to back side of visiting card"}
        >
          <span>{isFlipped ? "View Front Side" : "View Back Side (Contact Details)"}</span>
          <span aria-hidden="true">&harr;</span>
        </button>
      </div>
    </div>
  );
}
