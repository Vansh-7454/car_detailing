"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./BeforeAfterSection.module.css";

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const stageRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const onMouseDown = () => {
    isDragging.current = true;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPos((prev) => Math.max(10, prev - 4));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPos((prev) => Math.min(90, prev + 4));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPos(10);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPos(90);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        ref={stageRef}
        className={styles.comparisonStage}
        tabIndex={0}
        role="slider"
        aria-label="Before and after paint correction comparison"
        aria-valuemin={10}
        aria-valuemax={90}
        aria-valuenow={Math.round(sliderPos)}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onKeyDown={handleKeyDown}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* Full Image (Right Side: After / Compounded) */}
        <Image
          src="/images/before-after-paint.jpg"
          alt="Restored car paint finish after machine compounding and polishing"
          fill
          sizes="(max-width: 1040px) 100vw, 1040px"
          className={styles.fullImage}
        />

        {/* Badges */}
        <div className={styles.badgeBefore}>Before // Swirled &amp; Dull</div>
        <div className={styles.badgeAfter}>After // Deep Mirror Gloss</div>

        {/* Draggable Divider Line & Button */}
        <div
          className={styles.handleLine}
          style={{ left: `${sliderPos}%` }}
        >
          <div className={styles.handleButton}>
            <span>&harr;</span>
          </div>
        </div>
      </div>

      {/* Info Bar */}
      <div className={styles.infoBar}>
        <div className={styles.infoLeft}>
          <span className={styles.infoTitle}>50/50 Dual-Action Compounding Test Spot</span>
          <span className={styles.infoDesc}>
            Eliminates spiderweb micro-scratches caused by hard borewell water and dirty daily society dusting rags.
          </span>
        </div>

        <div className={styles.hintText}>
          &larr; Drag Slider to Inspect Transformation &rarr;
        </div>
      </div>
    </div>
  );
}
