import React from "react";
import { Testimonial } from "@/data/mockData";
import { StarIcon } from "@/components/ui/Icons";
import styles from "./TestimonialCard.module.css";

interface TestimonialCardProps {
  testimonial: Testimonial;
  theme?: "light" | "dark";
}

export default function TestimonialCard({
  testimonial,
  theme = "light",
}: TestimonialCardProps) {
  const initials = testimonial.clientName
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={`${styles.card} ${styles[`theme-${theme}`]}`}
      role="article"
      aria-label={`Demo customer experience for ${testimonial.vehicle}`}
    >
      <div>
        <div className={styles.topRow}>
          <div className={styles.rating} aria-label={`${testimonial.rating} star illustrative rating`}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <StarIcon key={i} size={15} />
            ))}
          </div>
          <span className={styles.serviceBadge}>{testimonial.serviceCompleted}</span>
        </div>

        <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.avatarMonogram}>{initials}</div>
        <div className={styles.clientDetails}>
          <span className={styles.clientName}>{testimonial.clientName}</span>
          <span className={styles.vehicleModel}>{testimonial.vehicle}</span>
          <span className={styles.specDetail}>{testimonial.city}</span>
        </div>
      </div>
    </div>
  );
}
