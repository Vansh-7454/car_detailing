import React from "react";
import { WHY_CHOOSE_US, WhyChooseUsItem } from "@/data/mockData";
import { ShieldIcon, SparkleIcon, GaugeIcon, CheckIcon, StarIcon, LayersIcon } from "@/components/ui/Icons";
import styles from "./WhyChooseUsSection.module.css";

interface WhyChooseUsSectionProps {
  theme?: "light" | "dark";
}

function renderIcon(type: WhyChooseUsItem["iconType"]) {
  switch (type) {
    case "team":
      return <ShieldIcon size={24} />;
    case "products":
      return <SparkleIcon size={24} />;
    case "interior":
      return <LayersIcon size={24} />;
    case "equipment":
      return <GaugeIcon size={24} />;
    case "pricing":
      return <CheckIcon size={24} />;
    case "finish":
      return <StarIcon size={24} />;
    default:
      return <CheckIcon size={24} />;
  }
}

export default function WhyChooseUsSection({ theme = "light" }: WhyChooseUsSectionProps) {
  return (
    <div className={`${styles.wrapper} ${theme === "dark" ? styles.darkTheme : ""}`}>
      <div className={styles.grid}>
        {WHY_CHOOSE_US.map((item, idx) => (
          <div key={idx} className={styles.itemCard}>
            <div className={styles.itemHeader}>
              <span className={styles.itemIndex}>
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className={styles.iconBox}>{renderIcon(item.iconType)}</div>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
