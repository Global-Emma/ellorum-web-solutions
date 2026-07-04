"use client";
import HeroDynamic from "@/components/sections/hero-dynamic";
// import TechStack from "@/components/sections/tech-stack";
import Link from "next/link";
import {
  ArrowRight,
  HelpCircle,
  Target,
  Award,
  Terminal,
  Search,
  FastForward,
} from "lucide-react";
import { motion } from "framer-motion";
import { previewServices } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "WhatsApp Lead Redirect",
        content_category: "Instant Messaging",
      });
    }
  };
  return (
    <>
      <HeroDynamic />

      <section className="py-24 relative overflow-hidden bg-brand-bg border-t border-white/5">
        {/* Background Lighting Nodes */}
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Side: Dynamic Text Engine Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-brand-electric font-mono text-xs tracking-widest uppercase block">
                about us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold capitalize font-display tracking-tight text-white leading-tight">
                Building Digital Solutions tailored for business growth
              </h2>
            </div>

            <div className="space-y-4 text-brand-muted text-sm md:text-base leading-relaxed font-sans">
              <p>
                At <strong className="text-white">Ellorum Web Solutions</strong>
                , we believe every business deserves a strong digital presence
                that not only looks professional but also delivers real results.
                That is why we create modern websites, mobile applications, and
                digital solutions designed to help businesses attract more
                customers, build trust, and grow with confidence.
              </p>
              <p>
                We combine creativity, technology, and strategy to develop fast,
                secure, and user-friendly digital experiences that work
                seamlessly across all devices. Whether you are launching a new
                business, expanding your brand, or improving your online
                presence, we are here to turn your ideas into powerful digital
                solutions.
              </p>
              <p className="hidden md:block text-xs uppercase font-mono tracking-wider text-brand-electric bg-brand-electric/5 border border-brand-electric/10 p-3 rounded-lg max-w-xl">
                🎯 Focus Matrix: Understanding your specific conversion goals
                first, then engineering software systems that resolve actual
                business obstacles.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 group text-white hover:text-brand-electric text-sm font-bold tracking-wide transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Right Side: Visual Metrics Card Matrix */}
          <div className="lg:col-span-5 relative grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 rounded-xl border-white/5 space-y-3 relative overflow-hidden group hover:border-brand-electric/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-electric/10 text-brand-electric flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-display text-white">
                  Solutions Built Around Your Business Goals
                </h4>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                {
                  "From custom software and mobile apps to branding, SEO, and digital marketing, we create tailored digital solutions that help your business stand out, attract more customers, and achieve lasting growth."
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-panel p-6 rounded-xl border-white/5 space-y-3 relative overflow-hidden group hover:border-brand-electric/20 transition-all duration-300 bg-linear-to-r from-brand-dark to-brand-bg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-electric/10 text-brand-electric flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-display text-white">
                  Long-Term Partnership
                </h4>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                At Ellorum Web Solutions, we do not just build websites—we build
                lasting partnerships. We create digital experiences that help
                businesses attract more customers, strengthen their brand, and
                achieve sustainable growth. From your first idea to long after
                your project is launched, we are committed to supporting your
                success every step of the way.
              </p>
            </motion.div>

            {/* Interactive Absolute Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 bg-brand-dark border border-brand-electric/30 p-3 rounded-lg shadow-xl hidden xl:flex items-center gap-2.5 max-w-45"
            >
              <HelpCircle className="w-4 h-4 text-brand-electric shrink-0 animate-pulse" />
              <span className="text-[10px] font-mono tracking-wider font-bold text-neutral-300">
                Africa & Beyond Scope
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High-Contrast Core Service Architecture Matrix Preview */}
      <section className="py-24 relative z-20 border-t border-white/5 bg-brand-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-brand-electric font-mono text-sm tracking-widest uppercase block mb-2">
                {" "}
                OUR SERVICES HUB
              </span>
              <h2 className="text-3xl md:text-5xl font-bold capitalize max-w-2xl">
                Smart Digital Solutions Designed for Business Growth
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 group text-white hover:text-brand-electric font-semibold transition-colors"
            >
              Explore Our Services{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewServices.slice(0, 3).map((service, idx) => (
              <div
                key={idx}
                className="glass-panel p-8 rounded-2xl glass-card-hover group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-electric/10 border border-brand-electric/20 flex items-center justify-center text-brand-electric mb-6 group-hover:bg-brand-electric group-hover:text-brand-bg transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 bg-brand-electric w-0 group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-brand-dark">
        {/* Ambient background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-brand-electric/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-75 h-75 bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl shadow-brand-electric/5">
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Value Proposition Text */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-electric text-xs font-mono tracking-wide uppercase">
                  <Terminal className="w-3.5 h-3.5" />{" "}
                  {"LET'S BUILD YOUR NEXT DIGITAL SUCCESS"}
                </div>

                <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
                  Ready to bring your Ideas into{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-electric to-brand-neon">
                    Life?
                  </span>
                </h2>

                <p className="text-brand-muted text-sm md:text-base max-w-xl leading-relaxed">
                  Whether you need a professional website, an e-commerce store,
                  a custom mobile app, or a complete digital solution, Ellorum
                  Web Solutions is here to help. We build fast, secure, and
                  SEO-friendly platforms that attract more customers, strengthen
                  your brand, and help your business grow with confidence.
                </p>
              </div>

              {/* Action Matrix Buttons */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:pl-6">
                <Link
                  href="/contact"
                  className="group flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-brand-electric to-brand-neon text-brand-bg font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-brand-electric/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="https://wa.me/2349126973160"
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleWhatsAppClick}
                  className="group flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-green-500/10 text-white hover:text-green-400 border border-white/10 hover:border-green-500/20 font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                  Chat on Whatsapp
                </Link>
              </div>
            </div>

            {/* Bottom Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-6 items-center justify-start text-[11px] font-mono text-brand-muted uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <FastForward className="w-3.5 h-3.5 text-brand-electric" />{" "}
                Fast, Secure & Scalable
              </span>
              <span className="hidden sm:inline text-white/10">•</span>
              <span className="flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-brand-neon" /> Clean,
                SEO & Google Search Ready
              </span>
              <span className="hidden sm:inline text-white/10">•</span>
              <span className="flex items-center gap-1.5">
                🚀 Built to Attract More Customers
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
