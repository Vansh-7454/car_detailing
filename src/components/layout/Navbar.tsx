"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { StudioLogoIcon, MenuIcon, CloseIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { BRAND_CONFIG, NAV_ITEMS } from "@/data/mockData";
import { BUSINESS_CONFIG } from "@/data/businessConfig";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <Container>
        <div className={styles.inner}>
          {/* Brand Logo & Name */}
          <Link href="/" className={styles.brand} aria-label={`${BUSINESS_CONFIG.brandName} Home`}>
            <StudioLogoIcon size={34} className={styles.brandLogo} />
            <div className={styles.brandText}>
              <span className={styles.brandName}>{BUSINESS_CONFIG.brandName}</span>
              <span className={styles.brandSubtitle}>STUDIO // AUTO LAB</span>
            </div>
          </Link>

          {/* Center/Right Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className={styles.navActions}>
            <Button href="/contact" variant="primary" size="sm" className={styles.desktopBookBtn}>
              Book a Detail
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={styles.hamburger}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className={styles.mobileNavLinks}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowRightIcon size={18} />
              </Link>
            );
          })}
        </div>

        <div className={styles.mobileMenuFooter}>
          <div className={styles.mobileContactInfo}>
            <div><strong>Studio:</strong> {BRAND_CONFIG.contact.fullAddress}</div>
            <div><strong>Inquiries:</strong> {BRAND_CONFIG.contact.email}</div>
            <div><strong>Concierge:</strong> {BRAND_CONFIG.contact.phone}</div>
          </div>

          <Button
            href="/contact"
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reserve Your Bay
          </Button>
        </div>
      </div>
    </header>
  );
}
