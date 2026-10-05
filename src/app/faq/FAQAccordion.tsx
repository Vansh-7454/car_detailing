"use client";

import React, { useState, useMemo } from "react";
import { FAQ_CATEGORIES, FAQS, FAQItemData } from "@/data/mockData";
import { ChevronDownIcon } from "@/components/ui/Icons";
import styles from "./faq.module.css";

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [openId, setOpenId] = useState<string | null>("what-is-car-detailing");

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "ALL") {
      return FAQS;
    }
    return FAQS.filter((f) => f.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: FAQS.length };
    FAQ_CATEGORIES.forEach((cat) => {
      if (cat !== "ALL") {
        counts[cat] = FAQS.filter((f) => f.category === cat).length;
      }
    });
    return counts;
  }, []);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.accordionWrapper}>
      {/* Category Filter Pills */}
      <nav
        className={styles.categoryBar}
        aria-label="FAQ Category Filters"
      >
        {FAQ_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          const count = categoryCounts[category] || 0;

          return (
            <button
              key={category}
              type="button"
              className={`${styles.catBtn} ${isActive ? styles.active : ""}`}
              onClick={() => {
                setActiveCategory(category);
                // Keep the first question open in the newly selected category if current isn't in it
                const matches = category === "ALL" ? FAQS : FAQS.filter((f) => f.category === category);
                if (matches.length > 0 && (!openId || !matches.some((m) => m.id === openId))) {
                  setOpenId(matches[0].id);
                }
              }}
              aria-pressed={isActive}
            >
              <span>{category}</span>
              <span className={styles.catCount}>{count}</span>
            </button>
          );
        })}
      </nav>

      {/* Accordion Questions List */}
      <div className={styles.accordionList}>
        {filteredFaqs.map((faq: FAQItemData) => {
          const isOpen = openId === faq.id;
          const buttonId = `faq-btn-${faq.id}`;
          const contentId = `faq-content-${faq.id}`;

          return (
            <div
              key={faq.id}
              className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  className={styles.accordionBtn}
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <div className={styles.questionMeta}>
                    <span className={styles.categoryTag}>
                      {faq.category}
                    </span>
                    <span className={styles.questionText}>
                      {faq.question}
                    </span>
                  </div>

                  <div className={styles.chevronIcon} aria-hidden="true">
                    <ChevronDownIcon size={16} />
                  </div>
                </button>
              </h3>

              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className={styles.accordionBody}
              >
                <div className={styles.accordionBodyInner}>
                  <p className={styles.answerContent}>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
