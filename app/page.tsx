"use client";
import HeroDynamic from "@/components/sections/hero-dynamic";
// import TechStack from "@/components/sections/tech-stack";
import Link from "next/link";
import {
  ArrowRight,
  HelpCircle,
  Target,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { previewServices } from "@/lib/utils";

export default function HomePage() {

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

      {/* <TechStack /> */}
    </>
  );
}
