import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./EditorialVisualBreak.module.css";

interface EditorialVisualBreakProps {
  imageSrc?: string;
  imageAlt?: string;
  tagline?: string;
  headline?: React.ReactNode;
  location?: string;
}

export default function EditorialVisualBreak({
  imageSrc = "/images/gallery-workshop-bays.jpg",
  imageAlt = "Active detailing studio workshop bays under high-CRI inspection illumination",
  tagline = "SURFACE PRESERVATION // DISCIPLINED CARE",
  headline = (
    <>
      ENGINEERED FOR THE ROAD. <br />
      <em>RESTORED FOR THE SENSES.</em>
    </>
  ),
  location = "STUDIO BAYS // NEW DELHI NCR",
}: EditorialVisualBreakProps) {
  return (
    <div className={styles.visualSection} aria-hidden="true">
      <div className={styles.imageBackdrop}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlayGradient} />
      </div>

      <Container className={styles.textContainer}>
        <div className={styles.contentBox}>
          <span className={styles.metaTagline}>{tagline}</span>
          <h2 className={styles.editorialHeadline}>{headline}</h2>
          <span className={styles.locationPlaque}>{location}</span>
        </div>
      </Container>
    </div>
  );
}
