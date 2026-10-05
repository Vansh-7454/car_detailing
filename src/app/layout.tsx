import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const editorialFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-editorial",
  display: "swap",
});

import { BUSINESS_CONFIG } from "@/data/businessConfig";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_CONFIG.site.baseUrl),
  title: {
    default: `Premium Car Detailing in India | ${BUSINESS_CONFIG.brandName}`,
    template: `%s`,
  },
  description: BUSINESS_CONFIG.shortDescription,
  applicationName: BUSINESS_CONFIG.brandName,
  authors: [{ name: BUSINESS_CONFIG.brandName }],
  generator: "Next.js",
  keywords: [
    "car detailing India",
    "car detailing service New Delhi",
    "car wash",
    "interior car cleaning",
    "exterior car detailing",
    "paint polishing",
    "ceramic coating",
    "foam wash",
    "denting and painting",
    "swirl mark removal Delhi NCR",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Premium Car Detailing in India | ${BUSINESS_CONFIG.brandName}`,
    description: BUSINESS_CONFIG.subTagline,
    url: BUSINESS_CONFIG.site.baseUrl,
    siteName: BUSINESS_CONFIG.brandName,
    locale: BUSINESS_CONFIG.site.locale,
    type: "website",
    images: [
      {
        url: BUSINESS_CONFIG.site.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_CONFIG.brandName} - Car Detailing Studio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Premium Car Detailing in India | ${BUSINESS_CONFIG.brandName}`,
    description: BUSINESS_CONFIG.subTagline,
    images: [BUSINESS_CONFIG.site.ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${editorialFont.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a href="#main-content" className="sr-only-focusable">
          Skip to main content
        </a>
        <Navbar />
        <main
          id="main-content"
          tabIndex={-1}
          style={{ flex: 1, minHeight: "calc(100vh - var(--navbar-height))" }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
