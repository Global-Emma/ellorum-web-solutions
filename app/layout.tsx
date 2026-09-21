import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/global/smooth-scroll";
import Footer from "@/components/global/footer";
import GlowCursor from "@/components/global/glow-cursor";
import { Suspense } from "react";
import MetaPixel from "@/components/analytics/meta-pixel";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import FormillaChat from "@/components/Formilla";


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ellorumwebsolutions.vercel.app";

// 1. Viewport & Theme Configuration (Next.js 14/15 standard)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0c" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// 2. Comprehensive SEO & OpenGraph Metadata
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ellorum Web Solutions | Next-Gen Web, Mobile & Paid Ads Agency",
    template: "%s | Ellorum Web Solutions",
  },
  description:
    "Ellorum Web Solutions is a premier digital agency specializing in high-converting website design, custom mobile app development, SEO performance engineering, and ROI-driven Meta & Google Ads campaigns.",
  keywords: [
    "Ellorum Web Solutions",
    "Web Development Agency Nigeria",
    "Mobile App Development",
    "Next.js Developer Anambra",
    "React Native App Development",
    "Meta Ads Agency",
    "Google Ads Optimization",
    "Website Performance Optimization",
    "SEO Services Nigeria",
    "Digital Marketing Agency Nibo",
    "Custom Software Engineering",
    "E-commerce Website Builder",
  ],
  authors: [{ name: "Emmanuel Glory", url: SITE_URL }],
  creator: "Emmanuel Glory",
  publisher: "Ellorum Web Solutions",
  category: "Technology & Business Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Ellorum Web Solutions",
    title: "Ellorum Web Solutions | High-Performance Web & Mobile App Agency",
    description:
      "Scale your brand with fast modern websites, custom mobile apps, and ROI-focused digital ad campaigns (Meta & Google Ads).",
    images: [
      {
        url: "/og-premium-banner.png",
        width: 1200,
        height: 630,
        alt: "Ellorum Web Solutions - Web & Mobile Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ellorum Web Solutions | Next-Gen Digital Agency",
    description:
      "Modern websites, mobile apps, SEO optimization, and revenue-focused Meta & Google Ads campaigns.",
    creator: "@ellorumwebsolutions",
    site: "@ellorumwebsolutions",
    images: ["/og-premium-banner.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "_T4xytXT5x-pw-kHHahox5JQ2d3FnRFRvvOjbAh745Y",
  },
};

// 3. Schema.org JSON-LD Structured Data for Google Rich Results & Knowledge Graph
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Ellorum Web Solutions",
      url: SITE_URL,
      logo: `${SITE_URL}/og-premium-banner.png`,
      image: `${SITE_URL}/og-premium-banner.png`,
      description:
        "Full-stack web design, mobile app development, performance optimization, and paid advertising agency.",
      founder: {
        "@type": "Person",
        name: "Emmanuel Glory",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nibo",
        addressRegion: "Anambra",
        addressCountry: "NG",
      },
      geo: {
        "@type": "GeoCoordinates",
        addressCountry: "NG",
      },
      areaServed: ["NG", "US", "GB", "Worldwide"],
      sameAs: [
        "https://instagram.com/ellorumwebsolutions",
        "https://facebook.com/ellorumwebsolutions",
        "https://twitter.com/ellorumwebsolutions",
      ],
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Core Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Design & Web Development",
              description: "Custom Next.js, React, and Tailwind CSS responsive websites.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile Application Development",
              description: "Cross-platform mobile apps built with React Native and Expo.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Paid Ads Management (Meta & Google Ads)",
              description: "High-ROI lead generation and traffic campaigns.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO & Website Speed Optimization",
              description: "Lighthouse 100/100 performance audits and search engine ranking.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Ellorum Web Solutions",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-WNB5FCJM";

  return (
    <html lang="en" className="antialiased scroll-smooth">
      <head>
        {/* Inject JSON-LD Schema directly into <head> for crawler instant-discovery */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-bg text-white overflow-x-hidden min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <GlowCursor />
          <main className="min-h-screen relative z-10 flex-grow">
            {children}

           <FormillaChat />
          </main>
          <Footer />
        </SmoothScrollProvider>

        {/* Analytics Infrastructure (Deferred for Performance) */}
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>

        {gaId && <GoogleAnalytics gaId={gaId} />}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
      </body>
    </html>
  );
}