"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles, Activity, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HeroDynamic() {
  const trustBadges = [
    "SEO Optimized",
    "Google Search Ready",
    "Free Google Business Profile Setup",
    "Mobile Friendly"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-bg text-white">
      {/* Tech Grid Background with Neon Nodes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-electric/10 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />
      
      <div className="container mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Conversion Left Engine */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-brand-electric/20 text-xs tracking-wider lg:items-left text-brand-electric font-accent uppercase mx-auto lg:mx-0"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" /> Digital Solutions Built for Growth
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight bg-clip-text text-transparent lg:text-left text-center bg-linear-to-b from-white via-neutral-200 to-neutral-500"
          >
            We Build <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-electric via-brand-neon to-purple-500">
              Futuristic Digital Experiences
            </span> <br/>
            That Drives Real Business Growth
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-brand-muted max-w-xl lg:text-justify text-center mx-auto lg:mx-0 leading-relaxed"
          >
            Ellorum Web Solutions helps businesses succeed online with modern websites, mobile apps, custom software, strategic branding, SEO, and digital marketing solutions that attract customers and drive real business growth, professionalism and confidence.
          </motion.p>

          {/* Call-to-Actions (CTAs) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4"
          >
            <Link href="/contact" className="group relative flex items-center justify-center gap-2 bg-linear-to-r from-brand-electric to-brand-neon text-brand-bg font-bold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(0,210,255,0.3)] hover:shadow-[0_0_50px_rgba(0,210,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
              Get Started Today
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            
            <Link href="/portfolio" className="flex items-center justify-center gap-2 glass-panel hover:bg-white/5 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              View Our Works
            </Link>
          </motion.div>

          {/* High-Converting Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-2 max-w-2xl"
          >
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/2 border border-white/5 px-3 py-1.5 rounded-lg hover:border-brand-electric/20 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0" />
                <span className="text-xs text-neutral-300 font-mono tracking-wide font-medium">{badge}</span>
              </div>
            ))}
          </motion.div>

          {/* Validation Metrics */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-8 border-t border-white/5 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
          >
            <div>
              <p className="text-3xl font-bold font-display text-brand-electric">99%</p>
              <p className="text-[10px] sm:text-xs text-brand-muted uppercase tracking-wider mt-1">Deployment Success</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-display text-white">4.8x</p>
              <p className="text-[10px] sm:text-xs text-brand-muted uppercase tracking-wider mt-1">Average ROI Scale</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-display text-white">24/7</p>
              <p className="text-[10px] sm:text-xs text-brand-muted uppercase tracking-wider mt-1">Active Cloud Support</p>
            </div>
          </motion.div>
        </div>

        {/* Immersive Predictive Dashboard Mockup Component */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass-panel rounded-2xl p-6 border-white/10 shadow-2xl relative overflow-hidden group perspective-1000"
          >
            {/* Top Command Controls */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 block" />
              </div>
              <div className="text-[10px] font-mono tracking-widest text-brand-electric bg-brand-electric/10 px-2 py-0.5 rounded border border-brand-electric/20 flex items-center gap-1.5">
                <Activity className="w-3 h-3 animate-pulse" /> ENGINE: OPERATIONAL
              </div>
            </div>

            {/* Simulated Architecture Graph Card */}
            <div className="space-y-4">
              <div className="h-32 bg-linear-to-t from-brand-electric/5 to-transparent rounded-xl border border-white/5 p-4 relative flex items-end">
                <div className="w-full flex items-end gap-1 h-16">
                  {[40, 65, 45, 80, 95, 70, 85, 100].map((val, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ height: 0 }}
                      animate={{ height: `${val}%` }}
                      transition={{ duration: 1.2, delay: idx * 0.1, ease: "easeInOut" }}
                      className="bg-linear-to-t from-brand-neon to-brand-electric w-full rounded-t-sm"
                    />
                  ))}
                </div>
              </div>

              {/* Float Mini KPI Block */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-1">
                  <span className="text-[10px] uppercase text-brand-muted font-accent">System Velocity</span>
                  <p className="text-xl font-bold font-display text-white">432ms</p>
                </div>
                <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-1">
                  <span className="text-[10px] uppercase text-brand-muted font-accent">Conversion Node</span>
                  <p className="text-xl font-bold font-display text-brand-electric">+18.4%</p>
                </div>
              </div>
            </div>

            {/* Floating Dynamic Widget */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 glass-panel border-brand-electric/30 p-3 rounded-xl flex items-center gap-3 shadow-xl max-w-50"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-electric/20 flex items-center justify-center text-brand-electric">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold">Secure Infrastructure</p>
                <p className="text-[9px] text-brand-muted">ISO-27001 Compliant</p>
              </div>
            </motion.div>
          </motion.div>
        </div> 
      </div>
    </section>
  );
}