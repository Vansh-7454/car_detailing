import React from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  sectionNumber?: string;
  layoutVariant?: "standard" | "editorial-split" | "oversized-number" | "minimal";
  align?: "left" | "center" | "right";
  theme?: "light" | "graphite" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  sectionNumber,
  layoutVariant = "standard",
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  if (layoutVariant === "editorial-split") {
    return (
      <div
        className={`${styles.editorialSplitWrapper} ${styles[`theme-${theme}`]} ${className}`.trim()}
      >
        <div className={styles.splitLeft}>
          {sectionNumber && (
            <span className={styles.splitSectionNumber} aria-hidden="true">
              {sectionNumber}
            </span>
          )}
          {eyebrow && (
            <div className={styles.eyebrowContainer}>
              <span className={styles.eyebrowDot} />
              <span className={styles.eyebrow}>{eyebrow}</span>
            </div>
          )}
          <h2 className={styles.title}>{title}</h2>
        </div>
        {subtitle && (
          <div className={styles.splitRight}>
            <p className={styles.splitSubtitle}>{subtitle}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${styles.wrapper} ${styles[`align-${align}`]} ${styles[`theme-${theme}`]} ${
        sectionNumber ? styles.hasSectionNumber : ""
      } ${className}`.trim()}
    >
      {sectionNumber && (
        <span className={styles.oversizedNumber} aria-hidden="true">
          {sectionNumber}
        </span>
      )}

      {eyebrow && (
        <div className={styles.eyebrowContainer}>
          <span className={styles.eyebrowDot} />
          <span className={styles.eyebrow}>
            {sectionNumber ? `${sectionNumber} // ${eyebrow}` : eyebrow}
          </span>
        </div>
      )}

      <h2 className={styles.title}>{title}</h2>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
