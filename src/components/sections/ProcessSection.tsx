import React from "react";
import { PROCESS_STEPS } from "@/data/mockData";
import styles from "./ProcessSection.module.css";

interface ProcessSectionProps {
  theme?: "light" | "dark";
}

export default function ProcessSection({ theme = "light" }: ProcessSectionProps) {
  return (
    <div
      className={`${styles.progressionWrapper} ${
        theme === "dark" ? styles.darkTheme : styles.lightTheme
      }`}
    >
      <div className={styles.progressionTrack} role="list">
        {PROCESS_STEPS.map((step, index) => {
          const isLast = index === PROCESS_STEPS.length - 1;

          return (
            <div key={step.step} role="listitem" className={styles.stepNode}>
              {/* Connector line & marker */}
              <div className={styles.connectorRow} aria-hidden="true">
                <span className={styles.stepMarker}>
                  <span className={styles.markerCore} />
                </span>
                {!isLast && (
                  <div className={styles.lineTrack}>
                    <div className={styles.lineBody} />
                    <span className={styles.lineArrow}>→</span>
                  </div>
                )}
              </div>

              {/* Step Content */}
              <div className={styles.stepContent}>
                <div className={styles.headerRow}>
                  <span className={styles.stepNumber}>{step.step}</span>
                  <span className={styles.stepSubtitle}>{step.subtitle}</span>
                </div>

                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>

                <ul className={styles.highlightsList}>
                  {step.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className={styles.highlightItem}>
                      <span className={styles.highlightDash} aria-hidden="true">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
