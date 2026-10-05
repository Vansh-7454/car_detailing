import React from "react";
import Image from "next/image";
import styles from "./ImageWrapper.module.css";

export type AspectRatio = "16-9" | "4-3" | "3-2" | "1-1" | "21-9";

interface ImageWrapperProps {
  src: string;
  alt: string;
  aspectRatio?: AspectRatio;
  badge?: string;
  caption?: string;
  overlay?: "gradient" | "vignette" | "none";
  hoverZoom?: boolean;
  priority?: boolean;
  theme?: "light" | "dark";
  className?: string;
  sizes?: string;
  heightPx?: number;
}

export default function ImageWrapper({
  src,
  alt,
  aspectRatio = "16-9",
  badge,
  caption,
  overlay = "gradient",
  hoverZoom = true,
  priority = false,
  theme = "light",
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  heightPx,
}: ImageWrapperProps) {
  const aspectClass = styles[`aspect-${aspectRatio}`] || styles["aspect-16-9"];
  const themeClass = theme === "dark" ? styles["theme-dark"] : "";
  const hoverClass = hoverZoom ? styles.hoverZoom : "";

  return (
    <div
      className={`${styles.wrapper} ${aspectClass} ${themeClass} ${hoverClass} ${className}`.trim()}
      style={heightPx ? { height: `${heightPx}px`, aspectRatio: "auto" } : undefined}
    >
      <div className={styles.imageContainer}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={styles.image}
        />
      </div>

      {overlay === "gradient" && <div className={styles.overlayGradient} />}
      {overlay === "vignette" && <div className={styles.overlayVignette} />}

      {badge && <span className={styles.badge}>{badge}</span>}
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
