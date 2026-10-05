import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import styles from "./EditorialSelectedWork.module.css";

const FEATURED_COMMISSIONS = [
  {
    id: "thar-exterior",
    title: "Dual-Stage Foam Decontamination",
    vehicle: "Mahindra Thar 4x4",
    discipline: "EXTERIOR PRESERVATION",
    image: "/images/gallery-thar-exterior.jpg",
    aspect: "wide",
  },
  {
    id: "bonnet-polish",
    title: "Stage-2 Swirl Eradication",
    vehicle: "Hyundai i20",
    discipline: "PAINT CORRECTION",
    image: "/images/service-paint-polishing.jpg",
    aspect: "standard",
  },
  {
    id: "cabin-steam",
    title: "140°C Vapor Steam Sanitization",
    vehicle: "Honda City",
    discipline: "CABIN CRAFTSMANSHIP",
    image: "/images/gallery-city-interior.jpg",
    aspect: "standard",
  },
];

export default function EditorialSelectedWork() {
  return (
    <div className={styles.portfolioWrapper}>
      {/* Asymmetric Editorial Portfolio Grid */}
      <div className={styles.asymmetricGrid}>
        {/* Dominant Featured Item */}
        <article className={`${styles.workCard} ${styles.cardDominant}`}>
          <div className={styles.imageBox}>
            <Image
              src={FEATURED_COMMISSIONS[0].image}
              alt={`${FEATURED_COMMISSIONS[0].title} on ${FEATURED_COMMISSIONS[0].vehicle}`}
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className={styles.workImg}
            />
            <div className={styles.overlay} />
            <div className={styles.cardMeta}>
              <span className={styles.discipline}>
                {FEATURED_COMMISSIONS[0].discipline}
              </span>
              <h3 className={styles.workTitle}>
                {FEATURED_COMMISSIONS[0].title}
              </h3>
              <span className={styles.vehiclePill}>
                {FEATURED_COMMISSIONS[0].vehicle}
              </span>
            </div>
          </div>
        </article>

        {/* Secondary Column: 2 Stacked Items */}
        <div className={styles.stackedCol}>
          {FEATURED_COMMISSIONS.slice(1).map((item) => (
            <article key={item.id} className={`${styles.workCard} ${styles.cardSecondary}`}>
              <div className={styles.imageBox}>
                <Image
                  src={item.image}
                  alt={`${item.title} on ${item.vehicle}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className={styles.workImg}
                />
                <div className={styles.overlay} />
                <div className={styles.cardMeta}>
                  <span className={styles.discipline}>{item.discipline}</span>
                  <h3 className={styles.workTitle}>{item.title}</h3>
                  <span className={styles.vehiclePill}>{item.vehicle}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.footerLinkRow}>
        <Link href="/gallery" className={styles.viewArchiveLink}>
          <span>Explore All Studio Transformations</span>
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </div>
  );
}
