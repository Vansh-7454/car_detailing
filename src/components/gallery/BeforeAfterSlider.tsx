"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./BeforeAfterSlider.module.css";

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  description?: string;
}

export default function BeforeAfterSlider({
  beforeSrc = "/images/before-bonnet-swirls.jpg",
  afterSrc = "/images/after-bonnet-polished.jpg",
  beforeAlt = "Dark car bonnet covered in circular wash swirls and haze before paint correction",
  afterAlt = "Dark car bonnet with liquid mirror gloss and zero swirls after machine polish compounding",
  title = "Bonnet Test Spot: Dual-Action Machine Compounding",
  description = "Eliminates spiderweb micro-marring caused by hard borewell water and dirty society dusting cloths.",
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const stageRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPos((prev) => Math.max(5, prev - 4));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPos((prev) => Math.min(95, prev + 4));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPos(5);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPos(95);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        ref={stageRef}
        className={styles.sliderStage}
        tabIndex={0}
        role="slider"
        aria-label="Before and after paint correction comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPos)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        {/* Layer 1: AFTER Image (Clean, polished, full base) */}
        <div className={styles.imageLayerAfter}>
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(max-width: 1040px) 100vw, 1040px"
            className={styles.image}
          />
        </div>

        {/* Layer 2: BEFORE Image (Swirled, clipped by percentage from left) */}
        <div
          className={styles.imageLayerBefore}
          style={{
            clipPath: `inset(0 calc(100% - ${sliderPos}%) 0 0)`,
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width: 1040px) 100vw, 1040px"
            className={styles.image}
          />
        </div>

        {/* Badges */}
        <div className={styles.badgeBefore}>Before // Swirled &amp; Dull</div>
        <div className={styles.badgeAfter}>After // Flawless Mirror Gloss</div>

        {/* Draggable Divider Line & Button */}
        <div className={styles.handleLine} style={{ left: `${sliderPos}%` }}>
          <div
            className={styles.handleButton}
            title="Drag slider or use Arrow keys to compare"
          >
            <span>&harr;</span>
          </div>
        </div>
      </div>

      {/* Info Bar */}
      <div className={styles.infoBar}>
        <div className={styles.infoLeft}>
          <span className={styles.infoTitle}>{title}</span>
          <span className={styles.infoDesc}>{description}</span>
        </div>

        <div className={styles.hintText}>
          &larr; Drag Slider or Use Arrow Keys &rarr;
        </div>
      </div>
    </div>
  );
}
