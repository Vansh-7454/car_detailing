"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import styles from "./HeroSection.module.css";

interface HeroStoryState {
  id: string;
  eyebrow: string;
  headlineFirst: string;
  headlineAccent: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const HERO_STATES: HeroStoryState[] = [
  {
    id: "exterior",
    eyebrow: "PRECISION CAR CARE",
    headlineFirst: "DETAIL WITH",
    headlineAccent: "PURPOSE.",
    description: "Professional detailing for the cars you drive every day.",
    imageSrc: "/images/hero-indian-car.jpg",
    imageAlt: "Mahindra compact SUV detailed to a mirror gloss inside Veloce Studio workshop bay",
  },
  {
    id: "paint",
    eyebrow: "PAINT PERFECTION",
    headlineFirst: "BRING BACK",
    headlineAccent: "THE FINISH.",
    description: "Restore depth, clarity and gloss with precision paint care.",
    imageSrc: "/images/paint-correction.jpg",
    imageAlt: "Technician performing dual-action machine paint polishing to level swirls on Indian car paint",
  },
  {
    id: "interior",
    eyebrow: "INSIDE MATTERS",
    headlineFirst: "FRESH FROM",
    headlineAccent: "EVERY ANGLE.",
    description: "Deep interior cleaning for a cleaner, fresher drive.",
    imageSrc: "/images/service-interior-cleaning.jpg",
    imageAlt: "Deep steam sanitization and leather detailing of an Indian car cabin",
  },
  {
    id: "protection",
    eyebrow: "LONG-LASTING FINISH",
    headlineFirst: "PROTECT",
    headlineAccent: "THE WORK.",
    description: "Advanced protection that keeps your finish looking its best.",
    imageSrc: "/images/service-ceramic-coating.jpg",
    imageAlt: "Hand-application of 9H ceramic coating layer for long-term paint protection",
  },
];

const TICKER_SERVICES = [
  "PAINT CARE",
  "INTERIOR DETAILING",
  "WHEEL CARE",
  "CERAMIC PROTECTION",
  "PAINT CORRECTION",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic coordinated 4-state cycling every ~2.7 seconds display + ~0.7s transition
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const scheduleNext = () => {
      timerRef.current = setTimeout(() => {
        // Start text exit animation (fades out & moves slightly up)
        setIsExiting(true);

        // After 350ms exit, switch to next state and trigger text entrance (total transition ~700ms)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % HERO_STATES.length);
          setIsExiting(false);
        }, 350);
      }, 2700);
    };

    scheduleNext();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex]);

  const current = HERO_STATES[currentIndex];

  return (
    <section className={styles.heroSection} aria-label="Hero Experience">
      <div className={styles.ambientAtmosphere} aria-hidden="true" />

      <Container className={styles.heroContainer}>
        {/* Asymmetrical Editorial Composition */}
        <div className={styles.heroGrid}>
          {/* Left Column: Coordinated Typography & Narrative */}
          <div className={styles.heroLeft}>
            {/* Rock-solid Eyebrow Container: Fixed position, never jumps vertically */}
            <div className={styles.eyebrowWrapper}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                <span
                  className={`${styles.eyebrowText} ${isExiting ? styles.eyebrowExiting : styles.eyebrowEntering}`}
                >
                  {current.eyebrow}
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className={styles.heroTitleWrapper}>
              <h1
                className={`${styles.heroTitle} ${isExiting ? styles.textExiting : styles.textEntering}`}
              >
                <span className={styles.titleDominant}>{current.headlineFirst}</span>
                <span className={styles.titleAccent}>{current.headlineAccent}</span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <div className={styles.heroSubtitleWrapper}>
              <p
                className={`${styles.heroSubtitle} ${isExiting ? styles.textExiting : styles.textEntering}`}
              >
                {current.description}
              </p>
            </div>

            {/* Stable CTAs (completely anchored, no jumping) */}
            <div className={styles.heroActions}>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                iconRight={<ArrowRightIcon size={16} />}
              >
                BOOK A DETAIL
              </Button>

              <Button
                href="/services"
                variant="outline"
                size="lg"
              >
                EXPLORE SERVICES
              </Button>
            </div>
          </div>

          {/* Right Column: Layered Crossfading Images (NO CARDS) */}
          <div className={styles.heroVisual}>
            <div className={styles.vehicleStage}>
              {HERO_STATES.map((state, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={state.id}
                    className={`${styles.imageSlide} ${isActive ? styles.imageActive : ""}`}
                    aria-hidden={!isActive}
                  >
                    <Image
                      src={state.imageSrc}
                      alt={state.imageAlt}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 840px"
                      className={styles.carImage}
                    />
                  </div>
                );
              })}

              {/* Natural ambient feathering */}
              <div className={styles.seamlessBlend} aria-hidden="true" />

              {/* Subtle Continuous Light Pass Reflection */}
              <div className={styles.lightPassLayer} aria-hidden="true">
                <div className={styles.lightPassBeam} />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* AUTOMATIC SERVICE TICKER (MARQUEE) */}
      <div className={styles.tickerSection} aria-label="Services Overview Marquee">
        <div className={styles.tickerTrack}>
          {/* Group 1 */}
          <div className={styles.tickerGroup}>
            {TICKER_SERVICES.map((service, idx) => (
              <React.Fragment key={`t1-${idx}`}>
                <span className={styles.tickerItem}>{service}</span>
                <span className={styles.tickerSlash} aria-hidden="true">/</span>
              </React.Fragment>
            ))}
          </div>

          {/* Group 2 (Duplicate for seamless continuous loop) */}
          <div className={styles.tickerGroup} aria-hidden="true">
            {TICKER_SERVICES.map((service, idx) => (
              <React.Fragment key={`t2-${idx}`}>
                <span className={styles.tickerItem}>{service}</span>
                <span className={styles.tickerSlash} aria-hidden="true">/</span>
              </React.Fragment>
            ))}
          </div>

          {/* Group 3 (Extra buffer for ultra-wide displays) */}
          <div className={styles.tickerGroup} aria-hidden="true">
            {TICKER_SERVICES.map((service, idx) => (
              <React.Fragment key={`t3-${idx}`}>
                <span className={styles.tickerItem}>{service}</span>
                <span className={styles.tickerSlash} aria-hidden="true">/</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
