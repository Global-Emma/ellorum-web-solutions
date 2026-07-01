"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  MessageSquare,
  ArrowUpRight,
  Code2,
  Layers,
  Briefcase,
  Zap,
} from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "technical" | "process";
}

type CategoryType = "all" | "general" | "technical" | "process"

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<
    CategoryType
  >("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = [
    {
      id: "all",
      label: "All Questions",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      id: "general",
      label: "General",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: "technical",
      label: "Technology",
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      id: "process",
      label: "Pricing & Timeline",
      icon: <Zap className="w-4 h-4" />,
    },
  ];

  const faqs: FAQItem[] = [
    {
      category: "general",
      question: "What services does Ellorum Web Solutions offer?",
      answer:
        "We provide a wide range of digital solutions designed to help businesses grow. Our services include website design and development, mobile app development, website and mobile app optimization and maintainance, graphic design, SEO optimization, online visibility strategy, sponsored advertising, and digital marketing.",
    },

    {
      category: "technical",
      question:
        "What technologies do you use to build websites and applications?",
      answer:
        "We use modern, industry-standard technologies such as Next.js, React, TypeScript, Tailwind CSS, Node.js, PostgreSQL, MongoDb and Many more to build fast, secure, and scalable digital solutions. Every technology we choose is based on what best fits your project's needs.",
    },

    {
      category: "process",
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines depend on the scope and complexity of the work. Most business websites are completed within 1 to 3 weeks, while larger web applications, e-commerce platforms, and mobile apps typically take 6 to 10 weeks or more.",
    },

    {
      category: "general",
      question:
        "Where is Ellorum Web Solutions located? Do you work with international clients?",
      answer:
        "We are based in Nibo, Anambra State, Nigeria, and proudly serve businesses, startups, and organizations both locally and internationally. Thanks to modern collaboration tools, we can successfully manage projects for clients anywhere in the world.",
    },

    {
      category: "process",
      question: "How much does a website or mobile app cost?",
      answer:
        "Every project is unique, so pricing depends on your goals, required features, and overall complexity. After discussing your project, we'll provide a detailed proposal with transparent pricing, clear deliverables, and flexible payment options.",
    },

    {
      category: "technical",
      question: "Do your websites include SEO optimization?",
      answer:
        "Yes. Every website we build follows SEO best practices from the ground up, including fast loading speeds, mobile responsiveness, semantic HTML, structured metadata, and performance optimization to help improve your visibility on search engines.",
    },

    {
      category: "process",
      question: "Do you provide maintenance and support after launch?",
      answer:
        "Absolutely. We offer ongoing maintenance and support to keep your website or application secure, updated, and running smoothly. From security updates and bug fixes to performance improvements and feature enhancements, we're here to support your business as it grows.",
    },
    {
      category: "general",
      question: "Can you redesign my existing website?",
      answer:
        "Yes. Whether your current website looks outdated, performs poorly, or no longer reflects your brand, we can redesign it into a modern, fast, and conversion-focused website.",
    },

    {
      category: "general",
      question: "Do I need to have all my content ready before we begin?",
      answer:
        "Not at all. If you already have your content, we'll use it. If not, we can help you organize, write, and optimize your content so your website communicates your brand effectively.",
    },

    {
      category: "process",
      question: "Do you require an upfront payment?",
      answer:
        "Yes. We typically begin projects with an initial deposit, while the remaining balance is divided into agreed payment milestones throughout the project.",
    },

    {
      category: "technical",
      question: "Will my website work on mobile phones and tablets?",
      answer:
        "Absolutely. Every website and application we build is fully responsive, ensuring it looks and performs beautifully across desktops, tablets, and smartphones.",
    },

    {
      category: "technical",
      question: "Will I be able to update my website after it's launched?",
      answer:
        "Yes. Depending on your project, we can integrate an easy-to-use content management system or provide guidance on how to manage and update your website yourself.",
    },

    {
      category: "process",
      question: "How do we get started?",
      answer:
        "Simply contact us through our website, WhatsApp, email, phone or any of our social media handles below. We'll schedule a consultation to understand your goals, discuss your project requirements, and recommend the best solution for your business.",
    },
    {
      category: "technical",
      question: "Will my website be optimized for Google Search?",
      answer:
        "Yes. Every website we build is optimized using SEO best practices and submitted for indexing on Google Search. This helps search engines discover your website and improves its chances of appearing in relevant search results.",
    },
    {
      category: "general",
      question: "Do you provide a Google Business Profile?",
      answer:
        "Yes. Every website package includes a free Google Business Profile setup or optimization. This helps improve your local online visibility, makes it easier for customers to find your business, and strengthens your presence on Google Maps and Google Search.",
    },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-36 pb-24 relative overflow-hidden bg-brand-bg text-white min-h-screen">
      {/* Background Lighting Aura */}
      <div className="absolute top-20 right-1/4 w-150 h-150 bg-brand-electric/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-100 h-100 bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 space-y-16">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-brand-electric font-mono text-xs tracking-widest uppercase block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            Everything You Need to Know
          </h1>
          <p className="text-brand-muted text-sm md:text-base leading-relaxed">
            Find answers to the most common questions about our services,
            development process, pricing, timelines, and ongoing support. If you
            do not see your question here, we are always happy to help.
          </p>
        </div>

        {/* Dynamic Category Navigation Hub */}
        <div className="flex flex-wrap justify-center gap-3 border-b border-white/5 pb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id as CategoryType);
                setOpenIndex(null); 
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-white text-brand-bg border-white font-bold"
                  : "bg-white/2 border-white/5 text-brand-muted hover:border-white/20 hover:text-white"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Interactive Accordion Stream */}
        <div className="space-y-4 min-h-87.5">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel rounded-xl border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left gap-4 hover:bg-white/2 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <HelpCircle
                        className={`w-5 h-5 shrink-0 transition-colors duration-300 ${isOpen ? "text-brand-electric" : "text-brand-muted group-hover:text-white"}`}
                      />
                      <span className="text-sm md:text-base font-bold font-display text-neutral-100 group-hover:text-white transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`p-1.5 rounded-lg bg-white/5 border border-white/5 text-brand-muted group-hover:text-white transition-all duration-300 ${isOpen ? "rotate-180 bg-brand-electric/10 text-brand-electric border-brand-electric/20" : ""}`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 pl-14 border-t border-white/2 bg-white/1">
                          <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans max-w-3xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-brand-muted text-sm font-mono">
              No parameter entries match this specific category filter layout.
            </div>
          )}
        </div>

        {/* Catch-All Conversion Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-linear-to-br from-brand-dark via-brand-bg to-brand-bg/5 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-4 flex-col sm:flex-row">
            <div className="w-12 h-12 rounded-xl bg-brand-electric/10 text-brand-electric flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold font-display">
                Still Have Questions or Need More Info?
              </h3>
              <p className="text-brand-muted text-xs md:text-sm max-w-md">
                Our team is ready to answer your questions and help you find the
                right digital solution for your business.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 border border-white/10 hover:border-brand-electric bg-white/5 hover:bg-white text-white hover:text-brand-bg font-bold text-xs font-mono uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 whitespace-nowrap"
          >
            Get In Touch
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
