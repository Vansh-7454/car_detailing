import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/data/mockData";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/Icons";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  service: ServiceItem;
  theme?: "light" | "graphite" | "dark";
  showFeatures?: boolean;
}

export default function ServiceCard({
  service,
  theme = "light",
  showFeatures = true,
}: ServiceCardProps) {
  return (
    <article className={`${styles.card} ${styles[`theme-${theme}`]}`}>
      {/* Service Action Photography */}
      <div className={styles.imageWrapper}>
        <Image
          src={service.image}
          alt={service.imageAlt || `${service.title} - Car detailing service for everyday Indian cars`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.cardImage}
        />
        <div className={styles.imageOverlay} />
        <span className={styles.categoryBadge}>{service.category}</span>
        <span className={styles.durationBadge}>{service.duration}</span>
      </div>

      <div className={styles.body}>
        <div>
          <h3 className={styles.title}>{service.title}</h3>
          <p className={styles.description}>{service.shortDesc}</p>

          {showFeatures && service.deliverables && (
            <ul className={styles.featuresList}>
              {service.deliverables.slice(0, 3).map((item, index) => (
                <li key={index} className={styles.featureItem}>
                  <span className={styles.featureIcon}>
                    <CheckIcon size={14} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.priceBlock}>
            <span className={styles.priceLabel}>Starting From</span>
            <span className={styles.priceValue}>{service.startingPrice}</span>
          </div>

          <Link href={`/contact?service=${service.id}`} className={styles.bookBtn}>
            <span>Book Now</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
