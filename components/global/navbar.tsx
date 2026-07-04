"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    // { name: "Pricing", path: "/pricing" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? "py-4 bg-brand-bg/80 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-2"
        >
          <Image
            src={"/images/logo.png"}
            alt="ellorum_logo"
            width={150}
            height={100}
            loading="eager"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 bg-white/2 border border-white/5 px-6 py-2 rounded-full backdrop-blur-md">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm transition-colors font-bold hover:text-brand-electric ${pathname === link.path ? "text-brand-electric" : "text-brand-muted"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-white text-brand-bg hover:bg-brand-electric text-xs font-bold px-5 py-2.5 rounded-xl transition-all"
          >
            Get Started <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 px-6 py-8 flex flex-col gap-6 md:hidden z-50"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white hover:text-brand-electric"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-brand-electric text-brand-bg font-bold py-3 rounded-xl text-sm"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
