"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { StudioLogoIcon, MapPinIcon, PhoneIcon, ClockIcon } from "@/components/ui/Icons";
import { BRAND_CONFIG, NAV_ITEMS, SERVICES } from "@/data/mockData";
import { BUSINESS_CONFIG } from "@/data/businessConfig";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.ambientGlow} />

      <Container>
        <div className={styles.mainGrid}>
          {/* Col 1: Brand & Philosophy */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLink}>
              <StudioLogoIcon size={34} className={styles.brandLogo} />
              <div>
                <span className={styles.brandName}>{BUSINESS_CONFIG.brandName}</span>
                <span className={styles.brandSubtitle}>STUDIO // AUTO LAB</span>
              </div>
            </Link>

            <p className={styles.brandDesc}>
              {BUSINESS_CONFIG.tagline}. {BUSINESS_CONFIG.subTagline}
            </p>

            <div className={styles.demoPill}>
              <span>Portfolio Demo Website</span>
            </div>
          </div>

          {/* Col 2: Studio Navigation */}
          <div>
            <h4 className={styles.colHeading}>Navigation</h4>
            <ul className={styles.linkList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Disciplines / Services */}
          <div>
            <h4 className={styles.colHeading}>Disciplines</h4>
            <ul className={styles.linkList}>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className={styles.footerLink}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Location & Concierge */}
          <div>
            <h4 className={styles.colHeading}>Studio Bay & Concierge</h4>
            <div className={styles.contactBlock}>
              <div className={styles.contactItem}>
                <MapPinIcon size={16} className={styles.contactIcon} />
                <span>{BRAND_CONFIG.contact.fullAddress}</span>
              </div>

              <div className={styles.contactItem}>
                <PhoneIcon size={16} className={styles.contactIcon} />
                <a href={`tel:${BRAND_CONFIG.contact.phone.replace(/[^0-9]/g, "")}`} className={styles.footerLink}>
                  {BRAND_CONFIG.contact.phone}
                </a>
              </div>

              <div className={styles.contactItem}>
                <ClockIcon size={16} className={styles.contactIcon} />
                <span>{BRAND_CONFIG.contact.hours}</span>
              </div>

              <div className={styles.socialRow}>
                {BRAND_CONFIG.socials.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    {soc.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.disclaimer}>
            &copy; {new Date().getFullYear()} {BRAND_CONFIG.legalName}. Fictional brand created for luxury automotive detailing studio demonstration. All rights reserved.
          </div>

          <button type="button" onClick={scrollToTop} className={styles.backToTop}>
            Back to Top &uarr;
          </button>
        </div>
      </Container>
    </footer>
  );
}
