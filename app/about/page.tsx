"use client";
import { motion, Variants } from "framer-motion";
import {
  Compass,
  Eye,
  Shield,
  Target,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Strategic Approach",
      desc: "Every project begins with understanding your business goals, allowing us to create digital solutions that deliver real, measurable results.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Performance & Growth",
      desc: "We build fast, responsive websites and applications that provide a smooth user experience and help your business attract more customers.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Quality & Reliability",
      desc: "We develop secure, scalable, and reliable digital solutions that your business can depend on today and as it continues to grow.",
    },
  ];

  const promises = [
    "Solutions tailored to your business goals",
    "Modern, responsive websites and mobile apps",
    "Fast, secure, and scalable technology",
    "Honest communication and reliable support",
    "A long-term partner committed to your success",
  ];

  const advantages = [
    "Customer-focused approach",
    "Modern and responsive designs",
    "Fast, secure, and scalable development",
    "SEO and performance optimization",
    "Clear communication throughout every project",
    "Ongoing support after launch",
    "Solutions built to help your business grow",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="pt-36 pb-24 relative overflow-hidden bg-brand-bg text-white">
      {/* Background Lighting Node */}
      <div className="absolute top-10 left-1/4 w-125 h-125 bg-brand-electric/5 rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />

      <div className="container mx-auto px-6 max-w-6xl space-y-32 relative z-10">
        {/* Core Mission Frame */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <span className="text-brand-electric font-mono text-xs tracking-widest uppercase block">
            DIGITAL INNOVATION
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white via-neutral-200 to-neutral-400">
            Helping Businesses Succeed Through Smart Technology
          </h1>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed font-sans">
            Ellorum Web Solutions creates modern websites, custom software, and
            digital experiences that are fast, secure, and designed to help
            businesses stand out, connect with customers, and grow with
            confidence.
          </p>
        </motion.div>

        {/* Dynamic Vision & Mission Mapping Matrix */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="glass-panel p-8 rounded-2xl border-white/5 space-y-4 relative group hover:border-brand-electric/20 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-brand-electric/10 text-brand-electric flex items-center justify-center rounded-xl">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-display">Our Mission</h3>
            <p className="text-brand-muted text-sm md:text-base leading-relaxed">
              Our mission is to help businesses grow through innovative digital
              solutions that are fast, reliable, user-friendly, and built to
              deliver measurable results.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-panel p-8 rounded-2xl border-white/5 space-y-4 relative group hover:border-brand-electric/20 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-brand-electric/10 text-brand-electric flex items-center justify-center rounded-xl">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-display">Our Vision</h3>
            <p className="text-brand-muted text-sm md:text-base leading-relaxed">
              To become a trusted technology partner for businesses across
              Africa and beyond by creating digital solutions that inspire
              innovation, drive growth, and make technology accessible to
              everyone.
            </p>
          </motion.div>
        </motion.div>

        {/* Operational Philosophy System Matrix */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-brand-electric font-mono text-xs tracking-widest uppercase">
              OUR APPROACH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Our Core Operational Principles
            </h2>
            <p className="text-brand-muted text-sm md:text-base leading-relaxed">
              Every successful project starts with understanding your goals.
              From planning and design to development, testing, and ongoing
              support, we follow a proven process that delivers high-quality
              digital solutions tailored to your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-xl border-white/5 space-y-4 glass-card-hover"
              >
                <div className="text-brand-electric bg-brand-electric/10 w-10 h-10 flex items-center justify-center rounded-lg">
                  {v.icon}
                </div>
                <h4 className="text-lg font-bold font-display">{v.title}</h4>
                <p className="text-brand-muted text-xs md:text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dual-Column Execution Grid: Our Promise vs Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-white/5">
          {/* Left Column: Our Promise */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-mono tracking-wider text-brand-electric">
              <Sparkles className="w-3 h-3" /> The Ellorum Guarantee
            </div>
            <h3 className="text-3xl font-bold font-display">
              Our Corporate Promise
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              When you trust your product ecosystem with us, we bypass
              surface-level design layouts to align our deployment pipelines
              with absolute operational security and performance standards.
            </p>
            <div className="space-y-3 pt-2">
              {promises.map((promise, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-electric shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-200 font-medium">
                    {promise}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Why Choose Ellorum */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel p-8 rounded-2xl border-white/5 bg-linear-to-br from-brand-dark via-brand-bg to-brand-bg/5 space-y-6"
          >
            <h3 className="text-2xl font-bold font-display text-white">
              Why Partners Choose Ellorum Web Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/2 border border-white/5 hover:border-brand-electric/20 transition-colors flex items-start gap-3 group"
                >
                  <span className="text-brand-electric font-mono text-xs font-bold mt-0.5 group-hover:scale-110 transition-transform">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm text-brand-muted group-hover:text-white transition-colors">
                    {adv}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Global CTA Pipeline Alignment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-2xl bg-linear-to-r from-brand-dark via-brand-bg to-brand-neon/10 border border-brand-electric/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-display">
              Ready to Grow Your Business Online?
            </h3>
            <p className="text-brand-muted text-sm max-w-xl">
              Let us discuss your goals and create a digital solution that is
              tailored to your business. Whether you need a website, mobile app,
              branding, SEO, or digital marketing, we are here to help you
              achieve measurable results.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 bg-white text-brand-bg hover:bg-brand-electric hover:text-brand-bg font-bold px-8 py-4 rounded-xl transition-all duration-300 whitespace-nowrap"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
