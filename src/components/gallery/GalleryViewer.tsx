"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  GalleryItem,
} from "@/data/mockData";
import styles from "./GalleryViewer.module.css";

export default function GalleryViewer() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: GALLERY_ITEMS.length };
    GALLERY_CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = GALLERY_ITEMS.filter(
          (item) => item.category === cat
        ).length;
      }
    });
    return counts;
  }, []);

  return (
    <div>
      {/* ---------------- Category Filter Tabs ---------------- */}
      <nav
        className={styles.filterBar}
        aria-label="Gallery category filters"
      >
        {GALLERY_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          const count = categoryCounts[category] || 0;

          return (
            <button
              key={category}
              type="button"
              className={`${styles.filterBtn} ${isActive ? styles.active : ""}`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
            >
              <span>{category}</span>
              <span className={styles.countBadge}>{count}</span>
            </button>
          );
        })}
      </nav>

      {/* ---------------- Editorial Masonry Composition ---------------- */}
      <div className={styles.masonryGrid}>
        {filteredItems.map((item: GalleryItem) => (
          <article key={item.id} className={styles.galleryCard}>
            {/* Visual Media Container with Aspect Ratio */}
            <div
              className={`${styles.mediaContainer} ${
                styles[`aspect-${item.aspect}`]
              }`}
            >
              <Image
                src={item.image}
                alt={`${item.title} - ${item.vehicle} professional car detailing`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.galleryImage}
              />

              <span className={styles.topBadge}>{item.badge}</span>

              {/* Desktop Hover Overlay */}
              <div className={styles.desktopOverlay}>
                <span className={styles.overlayCategory}>
                  {item.category} // {item.badge}
                </span>
                <h3 className={styles.overlayVehicle}>{item.vehicle}</h3>
                <p className={styles.overlayDesc}>&ldquo;{item.description}&rdquo;</p>
              </div>
            </div>

            {/* Mobile Touch Information (Displayed below media) */}
            <div className={styles.mobileInfo}>
              <span className={styles.mobileCategory}>
                {item.category} &bull; {item.badge}
              </span>
              <h3 className={styles.mobileVehicle}>{item.vehicle}</h3>
              <p className={styles.mobileDesc}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
