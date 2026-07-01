"use client";
import { motion } from "framer-motion";
import { Cpu, Globe, Database, Layers, ShieldCheck } from "lucide-react";

export default function TechStack() {
  const tools = [
    { icon: <Globe className="w-6 h-6" />, name: "Next.js 16 Engine" },
    // { icon: <Codepen className="w-6 h-6" />, name: "Tailwind CSS v4" },
    { icon: <Cpu className="w-6 h-6" />, name: "TypeScript Module Architecture" },
    { icon: <Database className="w-6 h-6" />, name: "Supabase & Prisma Integrations" },
    { icon: <Layers className="w-6 h-6" />, name: "Framer Motion Compositor" },
    { icon: <ShieldCheck className="w-6 h-6" />, name: "Cloudflare Isolation Security" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <span className="text-brand-electric font-mono text-xs tracking-widest uppercase block mb-3">// ARCHITECTURAL FOUNDATION</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-16">Our Specialized Technology Stack</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <motion.div key={idx} whileHover={{ y: -4 }} className="glass-panel p-6 rounded-xl flex items-center gap-4 text-left border border-white/5 hover:border-brand-electric/30 transition-all duration-300">
              <div className="text-brand-electric bg-brand-electric/10 p-3 rounded-lg">{tool.icon}</div>
              <p className="text-sm font-semibold tracking-wide text-white">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}