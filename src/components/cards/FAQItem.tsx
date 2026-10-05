"use client";

import React, { useState } from "react";
import { FAQItemData } from "@/data/mockData";
import { ChevronDownIcon } from "@/components/ui/Icons";
import styles from "./FAQItem.module.css";

interface FAQItemProps {
  item: FAQItemData;
  theme?: "light" | "graphite" | "dark";
  defaultOpen?: boolean;
}

export default function FAQItem({
  item,
  theme = "light",
  defaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.item} ${styles[`theme-${theme}`]}`}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className={styles.questionWrapper}>
          <span className={styles.category}>{item.category} // PROTOCOL</span>
          <h3 className={styles.question}>{item.question}</h3>
        </div>

        <div className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
          <ChevronDownIcon size={16} />
        </div>
      </button>

      <div
        className={`${styles.answerWrapper} ${isOpen ? styles.answerOpen : ""}`}
      >
        <div className={styles.answerInner}>
          <p className={styles.answer}>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
