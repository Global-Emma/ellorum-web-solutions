"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Package,
  ShieldCheck,
  Globe,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle2,
  ArrowRight,
  Search,
  ChevronDown,
  Menu,
  X,
  Truck,
  Building2,
  FileText,
  Boxes,
  Headphones,
  DollarSign,
  MessageSquare,
  Send,
  ArrowUpRight,
  ChevronUp,
} from "lucide-react";

// Brand Color Definitions (Tailwind v4 compatible arbitrary values used in template)
// Deep Navy: #081B33
// Royal Blue: #0066FF
// Gold Accent: #D4AF37

export default function KingpapiloAircargo() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Tracking Simulator State
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<null | {
    id: string;
    origin: string;
    destination: string;
    status: string;
    progress: number;
    eta: string;
    steps: { title: string; date: string; completed: boolean }[];
  }>(null);
  const [isTrackingLoading, setIsTrackingLoading] = useState(false);

  // Quote Modal & Form State
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tracking Handler
  const handleTrackShipment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsTrackingLoading(true);
    setTimeout(() => {
      setIsTrackingLoading(false);
      setTrackingResult({
        id: trackingNumber.toUpperCase(),
        origin: "Guangzhou, China (CAN)",
        destination: "Ikeja, Lagos, Nigeria (LOS)",
        status: "In Transit - Air Freight",
        progress: 65,
        eta: "Oct 28, 2026 (2 Days)",
        steps: [
          {
            title: "Package Picked Up & Consolidated",
            date: "Oct 24, 09:30 AM",
            completed: true,
          },
          {
            title: "Cargo Processing & Customs Export Cleared",
            date: "Oct 25, 02:15 PM",
            completed: true,
          },
          {
            title: "Departed Transit Hub (Air Flight KPS-409)",
            date: "Oct 26, 08:00 AM",
            completed: true,
          },
          {
            title: "Arrived NAHCO Shed - Import Customs Processing",
            date: "Oct 27 (Expected)",
            completed: false,
          },
          {
            title: "Ready for Pickup / Door-to-Door Delivery",
            date: "Oct 28 (Expected)",
            completed: false,
          },
        ],
      });
    }, 750);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Structured JSON-LD Schema for SEO
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kingpapilosuperstar Aircargo",
    image: "https://kingpapilosuperstar.com/logo.png",
    telephone: "+2348148948368",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Kosher Fair, NAHCO Export Shed, International Airport Road",
      addressLocality: "Ikeja",
      addressRegion: "Lagos",
      addressCountry: "Nigeria",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.5774",
      longitude: "3.3223",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "80",
    },
    url: "https://kingpapilosuperstar.com",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#0066FF] selection:text-white antialiased">
      {/* JSON-LD SEO Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#081B33] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-[#D4AF37]">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37] mr-1" />
              4.3/5 Rated (80+ Client Reviews)
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#0066FF]" />
              NAHCO Export Shed, Ikeja, Lagos, Nigeria
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-[#0066FF]" />
              Mon–Fri: 9AM–6PM | Sat: 9AM–2PM
            </span>
            <a
              href="tel:+2348148948368"
              className="font-medium text-white hover:text-[#D4AF37] transition-colors flex items-center"
            >
              <Phone className="w-3 h-3 mr-1 text-[#D4AF37]" />
              +234 814 894 8368
            </a>
          </div>
        </div>
      </div>

      {/* STICKY NAVIGATION */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#081B33]/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3"
            : "bg-[#081B33] py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BRAND LOGO */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0066FF] to-[#D4AF37] p-0.5 shadow-md group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#081B33] rounded-[10px] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#0066FF] transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white leading-none">
                  KINGPAPILO<span className="text-[#0066FF]">SUPERSTAR</span>
                </span>
                <span className="text-[10px] font-semibold text-[#D4AF37] tracking-widest uppercase">
                  AIRCARGO & LOGISTICS
                </span>
              </div>
            </a>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-200">
              {[
                "Home",
                "About Us",
                "Services",
                "Track Shipment",
                "Why Choose Us",
                "Reviews",
                "FAQ",
                "Contact",
              ].map((item) => {
                const targetId = item.toLowerCase().replace(/\s+/g, "-");
                return (
                  <a
                    key={item}
                    href={`#${targetId}`}
                    className="hover:text-[#0066FF] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0066FF] hover:after:w-full after:transition-all"
                  >
                    {item}
                  </a>
                );
              })}
            </nav>

            {/* DESKTOP CTA BUTTON */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-[#0066FF] hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center space-x-2"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#081B33] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3"
            >
              {[
                "Home",
                "About Us",
                "Services",
                "Track Shipment",
                "Why Choose Us",
                "Reviews",
                "FAQ",
                "Contact",
              ].map((item) => {
                const targetId = item.toLowerCase().replace(/\s+/g, "-");
                return (
                  <a
                    key={item}
                    href={`#${targetId}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-[#0066FF]"
                  >
                    {item}
                  </a>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsQuoteOpen(true);
                  }}
                  className="w-full bg-[#0066FF] text-white font-semibold py-3 rounded-lg shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative bg-[#081B33] text-white pt-12 pb-24 overflow-hidden"
      >
        {/* Subtle Map Grid Overlay Background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0066FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#0066FF]/20 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-[#12] lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#D4AF37]">
                <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
                <span>Premier Lagos Airport NAHCO Cargo Hub</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Fast, Reliable <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#0066FF] to-[#D4AF37]">
                  International Shipping
                </span>{" "}
                You Can Trust
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                We help individuals and businesses ship goods safely across the
                world through reliable air cargo, procurement, freight
                forwarding, customs clearance, and global door-to-door
                logistics.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto bg-[#0066FF] hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 text-base"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="tel:+2348148948368"
                  className="w-full sm:w-auto bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center space-x-3 text-base"
                >
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  <span>Call Now (+234 814 894 8368)</span>
                </a>
              </div>

              {/* Live Metric Badges */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    10,000+
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Deliveries Handled
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0066FF]">
                    20+
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Global Routes
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">
                    99%
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    On-Time Clearance
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive/Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Animated Floating Graphic Card */}
              <div className="relative mx-auto max-w-md bg-slate-900/90 border border-slate-700/60 rounded-2xl shadow-2xl p-6 backdrop-blur-xl">
                {/* Floating Cargo Jet Micro Animation */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-[#0066FF] to-blue-700 text-white p-4 rounded-2xl shadow-xl flex items-center space-x-3"
                >
                  <Plane className="w-8 h-8 transform -rotate-45" />
                  <div>
                    <div className="text-xs font-semibold text-blue-200">
                      Express Air Freight
                    </div>
                    <div className="text-sm font-bold">
                      Priority Global Express
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Live Manifest Status
                    </span>
                    <span className="inline-flex items-center text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/50">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1.5" />
                      Active Operations
                    </span>
                  </div>

                  <div className="bg-slate-800/70 rounded-xl p-4 border border-slate-700/50 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Route:</span>
                      <span className="font-semibold text-white">
                        China / UK / USA ✈ Lagos (NAHCO)
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Processing Time:</span>
                      <span className="font-semibold text-[#D4AF37]">
                        3 – 5 Business Days
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#0066FF] to-[#D4AF37] h-full w-[85%] rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Quick Tracker Inside Hero */}
                  <form
                    onSubmit={handleTrackShipment}
                    className="mt-4 space-y-2"
                  >
                    <label className="text-xs text-slate-300 font-medium block">
                      Track Your Parcel Fast
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. KPS-8923-NG"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0066FF]"
                      />
                      <button
                        type="submit"
                        className="bg-[#0066FF] hover:bg-blue-600 px-4 py-2.5 rounded-lg text-white font-semibold text-sm flex items-center shrink-0"
                      >
                        <Search className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES BAR */}
      <section className="bg-slate-900 border-y border-slate-800 py-6 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
            <div className="flex flex-col items-center p-2">
              <Star className="w-6 h-6 text-[#D4AF37] mb-1.5" />
              <span className="text-xs font-bold text-white">80+ Reviews</span>
              <span className="text-[11px] text-slate-400">
                Verified Ratings
              </span>
            </div>
            <div className="flex flex-col items-center p-2">
              <Plane className="w-6 h-6 text-[#0066FF] mb-1.5" />
              <span className="text-xs font-bold text-white">
                Reliable Air Freight
              </span>
              <span className="text-[11px] text-slate-400">
                Direct Flight Schedules
              </span>
            </div>
            <div className="flex flex-col items-center p-2">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] mb-1.5" />
              <span className="text-xs font-bold text-white">
                Secure Handling
              </span>
              <span className="text-[11px] text-slate-400">
                100% Cargo Safety
              </span>
            </div>
            <div className="flex flex-col items-center p-2">
              <Globe className="w-6 h-6 text-[#0066FF] mb-1.5" />
              <span className="text-xs font-bold text-white">
                Global Network
              </span>
              <span className="text-[11px] text-slate-400">
                Asia, Europe, Americas
              </span>
            </div>
            <div className="flex flex-col items-center p-2">
              <Building2 className="w-6 h-6 text-[#D4AF37] mb-1.5" />
              <span className="text-xs font-bold text-white">
                NAHCO Export Hub
              </span>
              <span className="text-[11px] text-slate-400">
                Lagos Airport Station
              </span>
            </div>
            <div className="flex flex-col items-center p-2">
              <DollarSign className="w-6 h-6 text-[#0066FF] mb-1.5" />
              <span className="text-xs font-bold text-white">
                Affordable Rates
              </span>
              <span className="text-[11px] text-slate-400">
                Transparent Pricing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK SHIPMENT SECTION */}
      <section id="track-shipment" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold tracking-widest text-[#0066FF] uppercase bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Real-time Cargo Tracking
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081B33]">
              Track Your International Shipment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Enter your tracking code below for immediate real-time flight,
              customs, and delivery updates.
            </p>
          </div>

          <form
            onSubmit={handleTrackShipment}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter Tracking Number (e.g., KPS-8923-NG)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-12 pr-4 py-3.5 text-slate-800 font-medium focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <button
                type="submit"
                disabled={isTrackingLoading}
                className="bg-[#081B33] hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 shrink-0"
              >
                {isTrackingLoading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Track Shipment</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* SIMULATED TRACKING RESULT DISPLAY */}
          {trackingResult && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#081B33] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800"
            >
              <div className="flex flex-col md:flex-row justify-between border-b border-slate-700 pb-6 gap-4">
                <div>
                  <span className="text-xs font-medium text-slate-400">
                    Tracking Code
                  </span>
                  <h3 className="text-xl font-bold text-[#D4AF37]">
                    {trackingResult.id}
                  </h3>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400">
                    Origin / Destination
                  </span>
                  <p className="text-sm font-semibold">
                    {trackingResult.origin} ➔ {trackingResult.destination}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400">
                    Estimated Delivery
                  </span>
                  <p className="text-sm font-semibold text-emerald-400">
                    {trackingResult.eta}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="my-6">
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300">
                    Status: {trackingResult.status}
                  </span>
                  <span className="text-[#0066FF]">
                    {trackingResult.progress}% Completed
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#0066FF] to-[#D4AF37] h-full transition-all duration-700 rounded-full"
                    style={{ width: `${trackingResult.progress}%` }}
                  />
                </div>
              </div>

              {/* Timeline Steps */}
              <div className="space-y-4 pt-2">
                {trackingResult.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="mt-0.5">
                      {step.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-slate-600 bg-slate-800" />
                      )}
                    </div>
                    <div className="flex-grow pb-3 border-b border-slate-800/60 last:border-0">
                      <div className="text-sm font-semibold text-white">
                        {step.title}
                      </div>
                      <div className="text-xs text-slate-400">{step.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section
        id="about-us"
        className="py-20 bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs font-bold tracking-widest text-[#0066FF] uppercase bg-blue-100/70 border border-blue-200 px-3.5 py-1.5 rounded-full">
                About Kingpapilosuperstar Aircargo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081B33] leading-tight">
                Connecting Nigeria to Global Markets with Speed & Integrity
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Operating directly out of the strategic **NAHCO Export Shed at
                the International Airport Road in Ikeja, Lagos**,
                Kingpapilosuperstar Aircargo stands as a trusted leader in
                international logistics.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                We specialize in seamless air cargo, global procurement, custom
                clearing documentation, and freight forwarding. Whether you are
                an e-commerce seller purchasing stock from China, Turkey, or the
                US, or a business moving urgent commercial cargo, we guarantee
                safe, transparent, and prompt delivery.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <Building2 className="w-6 h-6 text-[#0066FF] mb-2" />
                  <h4 className="font-bold text-[#081B33] text-sm">
                    On-Site Airport Hub
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Directly positioned inside NAHCO Complex, Ikeja.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <Boxes className="w-6 h-6 text-[#D4AF37] mb-2" />
                  <h4 className="font-bold text-[#081B33] text-sm">
                    Cargo Security
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    End-to-end tracking & safe handling.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#081B33] border border-slate-800 p-8 text-white space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/20 border border-[#0066FF] flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h3 className="text-2xl font-bold">
                  Why Importers & Exporters Trust Us
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0 mt-0.5" />
                    <span>
                      <strong>No Hidden Customs Fees:</strong> Clear upfront
                      pricing with zero unexpected tariffs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0 mt-0.5" />
                    <span>
                      <strong>Assisted Procurement:</strong> We help buy goods
                      from overseas suppliers securely on your behalf.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0 mt-0.5" />
                    <span>
                      <strong>Consolidation Benefits:</strong> Combine smaller
                      packages into one shipment to save up to 40% on shipping
                      costs.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-[#0066FF] uppercase bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081B33]">
              End-to-End International Logistics Solutions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Tailored logistics services engineered for reliability, security,
              and maximum cost-efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Plane className="w-7 h-7 text-[#0066FF]" />,
                title: "Air Cargo",
                desc: "Fast international air freight options designed for urgent deliveries worldwide.",
              },
              {
                icon: <Truck className="w-7 h-7 text-[#0066FF]" />,
                title: "Freight Forwarding",
                desc: "Reliable cargo forwarding from top suppliers across China, USA, UK, and Europe.",
              },
              {
                icon: <Globe className="w-7 h-7 text-[#0066FF]" />,
                title: "Import & Export",
                desc: "Professional management of cross-border shipments with absolute compliance.",
              },
              {
                icon: <Boxes className="w-7 h-7 text-[#0066FF]" />,
                title: "Procurement Services",
                desc: "We purchase quality items directly from overseas suppliers on behalf of clients.",
              },
              {
                icon: <FileText className="w-7 h-7 text-[#0066FF]" />,
                title: "Customs Clearance",
                desc: "Hassle-free, rapid documentation and customs processing at Lagos airport terminals.",
              },
              {
                icon: <Package className="w-7 h-7 text-[#0066FF]" />,
                title: "Door-to-Door Delivery",
                desc: "Receive your cargo delivered safely directly to your office, store, or residence.",
              },
              {
                icon: <Boxes className="w-7 h-7 text-[#0066FF]" />,
                title: "Cargo Consolidation",
                desc: "Group multiple small packages into single shipments to dramatically cut freight costs.",
              },
              {
                icon: <Building2 className="w-7 h-7 text-[#0066FF]" />,
                title: "Warehousing",
                desc: "Secure, temperature-controlled temporary storage and inventory staging prior to transit.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-500/40 rounded-2xl p-6 transition-all hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#0066FF]/10 flex items-center justify-center mb-5 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#081B33] mb-2 group-hover:text-[#0066FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose-us" className="py-20 bg-[#081B33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
              Our Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Why Choose Kingpapilosuperstar Aircargo?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              Built around speed, transparency, and a relentless commitment to
              safe arrival.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fast Delivery",
                desc: "Direct air freight routes ensuring minimum transit turnaround.",
              },
              {
                title: "Competitive Pricing",
                desc: "Highly affordable rates per kg with no hidden fees.",
              },
              {
                title: "Safe Cargo Handling",
                desc: "Strict inspection and protective packaging standards.",
              },
              {
                title: "Experienced Team",
                desc: "Seasoned customs brokers and logistics specialists.",
              },
              {
                title: "Global Shipping Network",
                desc: "Coverage across major international trading centers.",
              },
              {
                title: "Customer Support",
                desc: "Dedicated account managers available to answer questions.",
              },
              {
                title: "Reliable Tracking",
                desc: "Real-time visibility into your cargo’s live status.",
              },
              {
                title: "Transparent Communication",
                desc: "Clear updates from pickup straight to arrival.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-3 text-[#D4AF37] font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-base mb-1 text-white">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHIPPING PROCESS SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-[#0066FF] uppercase bg-blue-100/70 border border-blue-200 px-3 py-1 rounded-full">
              Simple Step-by-Step
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081B33]">
              Our 6-Step Shipping Journey
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              How we take your cargo seamlessly from origin to destination.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {[
              {
                step: "01",
                title: "Request Quote",
                desc: "Submit shipment weight & country details.",
              },
              {
                step: "02",
                title: "Package Pickup",
                desc: "Items collected or received at overseas hub.",
              },
              {
                step: "03",
                title: "Cargo Processing",
                desc: "Weighing, packing & export clearance.",
              },
              {
                step: "04",
                title: "Intl Shipping",
                desc: "Air transit to Lagos NAHCO Hub.",
              },
              {
                step: "05",
                title: "Customs Clearance",
                desc: "Prompt official documentation clearance.",
              },
              {
                step: "06",
                title: "Successful Delivery",
                desc: "Door delivery or client pickup in Ikeja.",
              },
            ].map((proc, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm text-center relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-[#0066FF] block mb-2">
                    {proc.step}
                  </span>
                  <h4 className="font-bold text-[#081B33] text-sm mb-1">
                    {proc.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-16 bg-[#081B33] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0066FF]">
                10,000+
              </div>
              <div className="text-sm font-medium text-slate-300">
                Successful Shipments
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#D4AF37]">
                80+
              </div>
              <div className="text-sm font-medium text-slate-300">
                Customer Reviews (4.3/5)
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0066FF]">
                20+
              </div>
              <div className="text-sm font-medium text-slate-300">
                Countries Served
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400">
                99%
              </div>
              <div className="text-sm font-medium text-slate-300">
                Delivery Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-[#0066FF] uppercase bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081B33]">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Rated ⭐ 4.3/5 across over 80+ customer reviews.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Excellent service. My shipment arrived safely and earlier than expected. The NAHCO office staff made pick up super straightforward.",
                author: "Emeka O.",
                location: "Lagos, Nigeria",
              },
              {
                text: "Reliable logistics company. Great communication from pickup to delivery. They handled all my China procurement smoothly.",
                author: "Aisha M.",
                location: "Abuja, Nigeria",
              },
              {
                text: "Highly recommended for international cargo shipping. Transparent pricing with zero hidden clearance charges.",
                author: "David K.",
                location: "Ikeja, Lagos",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-[#D4AF37] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic leading-relaxed mb-4">
                    "{review.text}"
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-3 flex justify-between items-center text-xs">
                  <span className="font-bold text-[#081B33]">
                    {review.author}
                  </span>
                  <span className="text-slate-400">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-[#0066FF] uppercase bg-blue-100/70 border border-blue-200 px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081B33]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does international air shipping take?",
                a: "Standard air cargo shipments typically take 3 to 5 business days depending on the country of departure (e.g., China, UK, USA) and customs processing timelines.",
              },
              {
                q: "Can I track my shipment?",
                a: "Yes! We issue a tracking number for every shipment. You can enter your tracking code directly on our website or contact our support desk for real-time updates.",
              },
              {
                q: "Do you offer procurement services?",
                a: "Absolutely. We assist clients with purchasing items from overseas suppliers, ensuring supplier validation and secure payment handling.",
              },
              {
                q: "Do you handle customs documentation?",
                a: "Yes, our on-site team at NAHCO Export Shed in Ikeja handles complete import/export documentation and customs clearing.",
              },
              {
                q: "What countries do you ship to and from?",
                a: "We clear and ship cargo across China, USA, UK, Turkey, Dubai (UAE), European nations, and destinations across Africa.",
              },
              {
                q: "How can I request a quotation?",
                a: 'You can click the "Get Quote" button on our site, fill out our quick online contact form, or call us directly at +234 814 894 8368.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-[#081B33] flex justify-between items-center hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0066FF] transition-transform ${
                      openFaq === idx ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#081B33] via-[#0066FF] to-[#081B33] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Ship Worldwide?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-base sm:text-lg">
            Speak with our logistics experts today and receive a competitive
            shipping quote tailored to your cargo needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-[#D4AF37] hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105"
            >
              Request Quote
            </button>
            <a
              href="tel:+2348148948368"
              className="bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5 text-[#D4AF37]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#0066FF] uppercase bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                  Get In Touch
                </span>
                <h2 className="text-3xl font-extrabold text-[#081B33] mt-3">
                  Contact Information
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Visit our office at NAHCO Export Shed or reach out to our
                  customer service desk.
                </p>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#081B33]">
                      Business Address
                    </h5>
                    <p className="text-slate-600 mt-0.5">
                      Kosher Fair, NAHCO Export Shed,
                      <br />
                      International Airport Road, Ikeja, Lagos, Nigeria.
                      <br />
                      <span className="text-xs font-semibold text-[#0066FF]">
                        (Located in NAHCO Complex)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#081B33]">
                      Phone & WhatsApp
                    </h5>
                    <a
                      href="tel:+2348148948368"
                      className="text-slate-700 hover:text-[#0066FF] block mt-0.5"
                    >
                      +234 814 894 8368
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#081B33]">Business Hours</h5>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Monday – Friday: 9:00 AM – 6:00 PM
                      <br />
                      Saturday: 9:00 AM – 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map Box */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-64 bg-slate-100">
                <iframe
                  title="Kingpapilosuperstar Aircargo NAHCO Ikeja Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912261623!2d3.32011!3d6.5774!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92395d3e0b57%3A0x6a0c5c64c5d5f00!2sNAHCO%20Export%20Shed!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#081B33] mb-6">
                Send Us a Direct Message
              </h3>

              {contactFormSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="font-bold text-lg">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm">
                    Thank you. Our NAHCO logistics team will contact you
                    shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactFormSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+234..."
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Service Needed
                      </label>
                      <select className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0066FF]">
                        <option>Air Cargo</option>
                        <option>Freight Forwarding</option>
                        <option>Procurement Services</option>
                        <option>Customs Clearance</option>
                        <option>Door-to-Door Delivery</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Destination Country
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nigeria, United Kingdom, USA"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Message Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your cargo, estimated weight, or specific questions..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0066FF] hover:bg-blue-600 text-white font-semibold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Submit Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#081B33] text-slate-400 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center">
                  <Plane className="w-4 h-4 text-white transform -rotate-45" />
                </div>
                <span className="font-extrabold text-white text-lg tracking-tight">
                  KINGPAPILO<span className="text-[#0066FF]">SUPERSTAR</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Kingpapilosuperstar Aircargo is a trusted international shipping
                and logistics enterprise based in Lagos, Nigeria. Specializing
                in fast air cargo, procurement, and customs clearing.
              </p>
              <div className="text-xs text-[#D4AF37] font-semibold">
                ⭐ 4.3/5 Rating based on 80+ Customer Reviews
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-white font-bold text-sm mb-3">Quick Links</h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#track-shipment" className="hover:text-white">
                    Track Shipment
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-white">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-white font-bold text-sm mb-3">Services</h5>
              <ul className="space-y-2 text-xs">
                <li>Air Cargo Shipping</li>
                <li>Procurement Services</li>
                <li>Customs Clearing</li>
                <li>Door-to-Door Delivery</li>
                <li>Cargo Consolidation</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-white font-bold text-sm mb-3">
                Stay Updated
              </h5>
              <p className="text-xs text-slate-400 mb-3">
                Subscribe for shipping updates and rate alerts.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#0066FF]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#0066FF] text-white font-semibold py-2 rounded-lg text-xs hover:bg-blue-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>
              © {new Date().getFullYear()} Kingpapilosuperstar Aircargo. All
              Rights Reserved.
            </p>
            <p>
              NAHCO Export Shed, International Airport Road, Ikeja, Lagos,
              Nigeria.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP / CALL FAST CTA BUTTON */}
      <a
        href="https://wa.me/2348148948368?text=Hello%20Kingpapilosuperstar%20Aircargo,%20I%20would%20like%20to%20inquire%20about%20a%20shipping%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
      </a>

      {/* SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 bg-[#081B33] text-white p-3 rounded-full border border-slate-700 shadow-xl hover:bg-slate-800 transition-all"
          aria-label="Scroll to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* REQUEST QUOTE MODAL */}
      <AnimatePresence>
        {isQuoteOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            >
              <button
                onClick={() => {
                  setIsQuoteOpen(false);
                  setQuoteSubmitted(false);
                }}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-extrabold text-[#081B33]">
                Request a Shipping Quote
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Fast turnarounds from our Ikeja NAHCO Cargo Team.
              </p>

              {quoteSubmitted ? (
                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="font-bold text-lg">Quote Request Received!</h4>
                  <p className="text-xs">
                    We will calculate your rates and call or email you within 30
                    minutes.
                  </p>
                  <button
                    onClick={() => {
                      setIsQuoteOpen(false);
                      setQuoteSubmitted(false);
                    }}
                    className="mt-4 bg-[#081B33] text-white text-xs font-semibold px-6 py-2.5 rounded-lg"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setQuoteSubmitted(true);
                  }}
                  className="space-y-4 text-sm"
                >
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+234 800 000 0000"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Origin
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Guangzhou"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Est. Weight (kg)
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="e.g. 25"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0066FF] hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all mt-2"
                  >
                    Calculate & Send Quote
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
