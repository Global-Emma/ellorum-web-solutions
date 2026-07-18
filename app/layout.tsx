import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/global/smooth-scroll";
import Footer from "@/components/global/footer";
import GlowCursor from "@/components/global/glow-cursor";
import { Suspense } from "react";
import MetaPixel from "@/components/analytics/meta-pixel";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Ellorum Web Solutions | Next-Gen Digital Agency",
  description: "Grow your business with modern websites, custom mobile apps, strategic branding, SEO, and digital solutions designed to attract more customers, strengthen your online presence, and drive long-term success.",
  metadataBase: new URL("https://ellorumwebsolutions.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ellorumwebsolutions.vercel.app",
    siteName: "Ellorum Web Solutions",
    images: [{ url: "/og-premium-banner.png", width: 1200, height: 630, alt: "Ellorum Tech Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ellorumwebsolutions",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-brand-bg text-white overflow-x-hidden">
        <SmoothScrollProvider>
          <GlowCursor />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          
          <Footer />
        </SmoothScrollProvider>

        {/* Tracking & Data Analytics Pipelines */}
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        
        {/* Next.js Optimized Google Tag Manager Container */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-WNB5FCJM"} />
      </body>
    </html>
  );
}