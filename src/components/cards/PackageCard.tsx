import React from "react";
import { PackageTier } from "@/data/mockData";
import { CheckIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import styles from "./PackageCard.module.css";

interface PackageCardProps {
  packageData: PackageTier;
  theme?: "light" | "dark" | "graphite";
}

export default function PackageCard({
  packageData,
  theme = "light",
}: PackageCardProps) {
  const isPopular = packageData.isPopular;

  return (
    <div
      className={`${styles.card} ${styles[`theme-${theme}`]} ${
        isPopular ? styles.dominantCard : styles.quietCard
      }`}
    >
      {isPopular && (
        <div className={styles.dominantIndicator}>
          <span className={styles.dominantDot} />
          <span className={styles.dominantText}>RECOMMENDED STUDIO PACKAGE</span>
        </div>
      )}

      <div>
        <div className={styles.header}>
          {packageData.badge && (
            <span className={styles.tierBadge}>{packageData.badge}</span>
          )}
          <h3 className={styles.name}>{packageData.name}</h3>
          <p className={styles.tagline}>{packageData.tagline}</p>
        </div>

        <div className={styles.priceSection}>
          <div className={styles.price}>{packageData.price}</div>
          <div className={styles.priceNote}>{packageData.priceNote}</div>
          <div className={styles.metaBar}>
            <span>Turnaround: {packageData.duration}</span>
          </div>
        </div>

        <ul className={styles.featuresList}>
          {packageData.features.map((feature, idx) => (
            <li key={idx} className={styles.featureItem}>
              <span className={styles.featureIcon}>
                <CheckIcon size={15} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.actionArea}>
        <Button
          href={`/contact?package=${packageData.id}`}
          variant={isPopular ? "primary" : "outline-accent"}
          fullWidth
          size="md"
        >
          {packageData.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
