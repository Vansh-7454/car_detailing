"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/data/mockData";
import { ArrowRightIcon } from "@/components/ui/Icons";
import styles from "./EditorialServiceList.module.css";

interface EditorialServiceListProps {
  services: ServiceItem[];
}

const EDITORIAL_TAGLINES: Record<string, string> = {
  "exterior-detailing": "Restore clarity, depth and finish",
  "interior-deep-cleaning": "Reset the cabin from every angle",
  "paint-polishing": "Refine gloss and remove imperfections",
  "ceramic-protection": "Protect the finish for longer",
  "foam-wash": "Scratch-safe maintenance pre-soak & rinse",
  "panel-repair": "Localized dent removal & surface leveling",
};

export default function EditorialServiceList({
  services,
}: EditorialServiceListProps) {
  // Use the core primary 4 services for the editorial list
  const displayServices = services.slice(0, 4);
  const [activeIdx, setActiveIdx] = useState(0);

  const activeService = displayServices[activeIdx] || displayServices[0];

  return (
    <div className={styles.container}>
      {/* Left Column: Editorial Numbered Rows */}
      <div className={styles.listCol} role="list">
        {displayServices.map((service, idx) => {
          const isActive = idx === activeIdx;
          const editorialLine =
            EDITORIAL_TAGLINES[service.id] || service.shortDesc;

          return (
            <div
              key={service.id}
              role="listitem"
              className={`${styles.serviceRow} ${isActive ? styles.rowActive : ""}`}
              onMouseEnter={() => setActiveIdx(idx)}
              onFocus={() => setActiveIdx(idx)}
              tabIndex={0}
            >
              <div className={styles.rowLeft}>
                <span className={styles.serviceNum}>{service.number}</span>
                <div className={styles.rowText}>
                  <div className={styles.titleLine}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <span className={styles.serviceCategory}>
                      {service.category}
                    </span>
                  </div>
                  <p className={styles.serviceTagline}>{editorialLine}</p>
                </div>
              </div>

              <div className={styles.rowRight}>
                <div className={styles.priceMeta}>
                  <span className={styles.pricePrefix}>From</span>
                  <span className={styles.priceValue}>
                    {service.startingPrice}
                  </span>
                </div>

                <Link
                  href={`/services#${service.id}`}
                  className={styles.rowArrowLink}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          );
        })}

        <div className={styles.listFooter}>
          <Link href="/services" className={styles.allServicesLink}>
            <span>View All Studio Disciplines</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>

      {/* Right Column: Dynamic Editorial Preview Display */}
      <div className={styles.visualCol} aria-hidden="true">
        <div className={styles.imageFrame}>
          {displayServices.map((service, idx) => {
            const isCurrent = idx === activeIdx;
            return (
              <div
                key={service.id}
                className={`${styles.imageLayer} ${
                  isCurrent ? styles.imageLayerActive : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt || service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className={styles.serviceImage}
                  priority={idx === 0}
                />
              </div>
            );
          })}

          <div className={styles.imageOverlay} />

          {/* Clean Editorial Metadata Plaque */}
          <div className={styles.metaPlaque}>
            <div className={styles.plaqueCategory}>
              <span className={styles.plaqueDot} />
              <span>{activeService.category} CARE</span>
            </div>
            <div className={styles.plaqueTitle}>{activeService.title}</div>
            <div className={styles.plaqueDuration}>
              Turnaround: {activeService.duration}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
