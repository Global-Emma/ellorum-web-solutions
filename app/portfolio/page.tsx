"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/global/navbar";

export default function PortfolioHub() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  
  const projectIndex = [
    {
      id: "zurum_stores",
      category: "WEB",
      title: "Zurum Stores",
      desc: "A modern eCommerce platform designed to help businesses showcase products, manage sales efficiently, and deliver a smooth shopping experience for customers.",
      link: "https://zurum-stores-frontend.vercel.app",
      imageUrl: "/images/portfolio/zurum_stores.png",
      tags: ["Responsive", "SEO Ready", "Google Indexed", "Fast"],
    },
    {
      id: "startup_collab",
      category: "WEB",
      title: "Startup Collaboration Platform",
      desc: "A platform that connects freelancers and companies, making it easy to discover opportunities, collaborate on projects, and build professional relationships.",
      link: "https://freeemp.vercel.app",
      imageUrl: "/images/portfolio/startup_collab.png",
      tags: ["Fast Loading", "Responsive", "Google Indexed", "SEO Ready"],
    },
    {
      id: "blog_site",
      category: "WEB",
      title: "Blog Website",
      desc: "A clean and responsive blogging platform designed for publishing articles, sharing insights, and building an online audience.",
      link: "https://freeblog.vercel.app",
      imageUrl: "/images/portfolio/asacada.png",
      tags: ["Fast Loading", "SEO Optimized", "Google Indexed", "Responsive", "Fast"],
    },
    {
      id: "asacada",
      category: "WEB",
      title: "NGO Website",
      desc: "A professional website built for Adorable Foundation International to showcase their mission, projects, and increase online visibility.",
      link: "https://adorablefoundation.com",
      imageUrl: "/images/portfolio/asacada.png",
      tags: ["Fast Loading", "Tailwind CSS", "SEO Ready", "Google Indexed", "Responsive"],
    },
    {
      id: "brand_shift",
      category: "WEB",
      title: "Digital Brand Website",
      desc: "A modern brand website designed to strengthen online identity, improve visibility, and communicate services effectively.",
      link: "https://brand-shift-media.vercel.app",
      imageUrl: "/images/portfolio/brand_shift.png",
      tags: ["Fast Loading", "Clean-Tech UI", "SEO Optimized", "Google Indexed", "Fast"],
    },
    {
      id: "candles_restaurant",
      category: "WEB",
      title: "Restaurant Website",
      desc: "A stylish restaurant website designed to showcase menus, attract customers, and enhance online presence for food businesses.",
      link: "https://candles-restaurant.vercel.app",
      imageUrl: "/images/portfolio/restaurant1.png",
      tags: ["Fast Loading", "Fast Loading", "Responsive", "Google Indexed", "SEO Ready"],
    },
    {
      id: "agro_website",
      category: "WEB",
      title: "Agro Website",
      desc: "An agricultural business website built to highlight services, build trust, and connect farmers with potential buyers and partners.",
      link: "https://agro.vercel.app",
      imageUrl: "/images/portfolio/agro1.png",
      tags: ["Fast Loading", "SEO Ready", "Google Indexed", "Responsive", "Fast"],
    },
    {
      id: "construction",
      category: "WEB",
      title: "Construction Company Website",
      desc: "A professional construction company website designed to showcase projects, build credibility, and attract new clients.",
      link: "https://construction.vercel.app",
      imageUrl: "/images/portfolio/construction1.png",
      tags: ["Fast Loading", "Premium UI", "SEO Optimized", "Google Indexed", "Responsive"],
    },
    {
      id: "health-lab",
      category: "WEB",
      title: "Medical Laboratory Website",
      desc: "A healthcare platform designed for Pezod Green Life Medical Laboratory to present services, improve accessibility, and build patient trust.",
      link: "https://pezod.vercel.app",
      imageUrl: "/images/portfolio/health1.png",
      tags: ["Fast Loading", "Secure Infrastructure", "SEO Optimized", "Google Indexed", "Responsive"],
    },
    {
      id: "health-clinic",
      category: "WEB",
      title: "Eye Clinic Website",
      desc: "A modern clinic website designed for Zimnath Eye Clinic to help patients easily access services and book consultations online.",
      link: "https://zimnath.vercel.app",
      imageUrl: "/images/portfolio/health2.png",
      tags: ["Fast Loading", "Booking Ready", "SEO Ready", "Google Indexed", "Fast"],
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projectIndex
      : projectIndex.filter((p) => p.category === activeFilter);

  return (
    <>
    <Navbar />
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-brand-electric font-mono text-xs tracking-widest uppercase block">
            OUR PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            Turning Ideas Into Digital Solutions That Deliver Real Results
          </h1>
          <p className="text-brand-muted text-sm md:text-base">
            Explore some of the websites, applications, and digital experiences that we have created for businesses across different industries. Every project is designed to solve real challenges, strengthen brands, and help our clients grow with confidence.
          </p>
        </div>

        {/* Dynamic Filter Controls */}
        <div className="flex justify-center gap-2 flex-wrap">
          {["ALL", "WEB"].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all border ${activeFilter === tag ? "bg-brand-electric text-brand-bg border-brand-electric font-bold" : "bg-white/2 border-white/5 text-brand-muted hover:border-white/20"}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Card Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <motion.div
              layout
              key={p.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between group"
            >
              {/* Card Image Platform */}
              <div className="h-auto bg-linear-to-br from-brand-dark via-brand-bg to-brand-electric/10 relative p-6 flex items-end border-b border-white/5">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  width={350}
                  height={220}
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-lg group-hover:scale-[1.02] transition-all duration-300"
                />
              </div>

              {/* Core Context Engine */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-display group-hover:text-brand-electric transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {p.desc}
                  </p>
                  
                  {/* Micro-Glassmorphic Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono tracking-wide text-neutral-300 bg-white/4 border border-white/5 px-2 py-0.5 rounded-md hover:border-brand-electric/20 hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Conversion Trigger Link */}
                <div className="pt-4 border-t border-white/5">
                  <Link
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-brand-electric transition-colors"
                  >
                    View Site <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}