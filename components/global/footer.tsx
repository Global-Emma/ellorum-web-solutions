"use client";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Thanks — you're subscribed!");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(
          data?.message || "Subscription failed. Please try again later.",
        );
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  const standardInclusions = [
    "Google Search Indexing",
    "SEO Optimization",
    "Free Google Business Profile Setup",
  ];

  return (
    <footer className="bg-brand-bg border-t border-white/5 pt-20 pb-10 relative z-20">
      <div className="container mx-auto px-6">
        {/* Value-Added Trust Statement Banner */}
        <div className="mb-16 p-6 rounded-2xl bg-white/2 border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Every Website Includes
            </h3>
            <p className="text-xs text-brand-muted">
              Standard performance and search features engineered into every
              single build.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full lg:w-auto">
            {standardInclusions.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/2 border border-white/5 hover:border-brand-electric/20 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0" />
                <span className="text-xs text-neutral-200 font-medium font-mono tracking-wide">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 space-y-4">
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
            <p className="text-brand-muted text-sm max-w-sm leading-relaxed">
              Creating powerful digital solutions that strengthen your brand,
              improve your online presence, and drive business growth.
            </p>
            <div className="flex gap-3 pt-2">
              <Link
                href="https://instagram.com/@ellorumwebsolutions"
                className="text-brand-muted hover:text-brand-electric transition-colors"
              >
                <FaInstagramSquare className="w-4 h-4" />
              </Link>
              <Link
                href="https://facebook.com/ellorumwebsolutions"
                className="text-brand-muted hover:text-brand-electric transition-colors"
              >
                <FaFacebookSquare className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-brand-electric uppercase">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm text-brand-muted">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="hover:text-white transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-brand-electric uppercase">
                Contact Connect
              </h4>
              <ul className="space-y-2.5 text-sm flex flex-col gap-1 text-brand-muted">
                <Link href={"tel:+2349126973160"}>
                  <li className="flex items-center hover:text-white transition-colors gap-2">
                    <Phone className="w-3.5 h-3.5" /> +2349126973160
                  </li>
                </Link>
                <Link href={"mailto:ellorumwebsolutions@gmail.com"}>
                  <li className="flex overflow-hidden hover:text-white transition-colors items-center gap-2">
                    <SiGmail className="w-3.5 h-3.5" /> ellorumwebsolutions
                  </li>
                </Link>
                <Link href={"https://wa.me/2349126973160"}>
                  <li className="flex hover:text-white transition-colors items-center gap-2">
                    <FaWhatsapp className="w-3.5 h-3.5" /> (+234) 912 697 3160
                  </li>
                </Link>
                <Link href={"https://instagram.com/@ellorumwebsolutions"}>
                  <li className="flex hover:text-white transition-colors items-center gap-2">
                    <FaInstagram className="w-3.5 h-3.5" /> @ellorumwebsolutions
                  </li>
                </Link>
                <Link href="https://facebook.com/ellorumwebsolutions">
                  <li className="flex hover:text-white transition-colors items-center gap-2">
                    <FaFacebook className="w-3.5 h-3.5" /> Ellorum Web Solutions
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-brand-electric uppercase">
              Stay Updated
            </h4>
            <p className="text-brand-muted text-xs leading-relaxed">
              Subscribe to receive expert insights, website optimization tips,
              SEO strategies, digital marketing updates, and the latest
              technology trends to help your business grow online.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex gap-2 bg-white/2 border border-white/5 p-1.5 rounded-xl"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                aria-label="Email address"
                className="bg-transparent border-none text-xs text-white placeholder-brand-muted focus:outline-none px-3 w-full"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-white/10 hover:bg-brand-electric cursor-pointer hover:text-brand-bg transition-all p-2.5 rounded-lg disabled:opacity-50"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div aria-live="polite" className="mt-2 text-xs">
              {status === "success" && (
                <span className="text-green-400">{message}</span>
              )}
              {status === "error" && (
                <span className="text-rose-400">{message}</span>
              )}
            </div>
          </div>
        </div>

        {/* Legal / Metadata Footer Row */}
        <div className="pt-8 border-t border-white/5 text-center md:flex md:justify-between md:text-left text-xs text-brand-muted">
          <p>
            &copy; {new Date().getFullYear()} Ellorum Web Solutions. Built to
            global architectural scales.
          </p>
          <p className="mt-2 md:mt-0">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
