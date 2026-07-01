import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/global/smooth-scroll";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";
import GlowCursor from "@/components/global/glow-cursor";

export const metadata: Metadata = {
  title: "Ellorum Web Solutions | Next-Gen Digital Transformation Agency",
  description: "Accelerate your market capture through futuristic web development, high-tier branding strategies, tailored apps, and premium user experience designs.",
  metadataBase: new URL("https://ellorum.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ellorum.com",
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
          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}