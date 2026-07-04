"use client";
import { useState, FormEvent } from "react";
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  HelpCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { previewServices } from "@/lib/utils";

export default function ContactPipeline() {
  const [formState, setFormState] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmitPipeline = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // 1. Generate a completely unique identifier for this specific action
    const uniqueEventId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    try {
      // 2. Fire Browser Pixel instantly with the event ID (Deduplication Layer)
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq(
          "track",
          "Lead",
          {
            content_name: formState.projectType,
            value: parseFloat(formState.budget?.replace(/,/g, "")) || 0,
            currency: "NGN",
          },
          { eventID: uniqueEventId },
        ); // Passed as the 4th parameter matching configuration
      }

      // 3. Dispatch the payload along with the identical Event ID to your server CAPI function
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          eventId: uniqueEventId, // Injected seamlessly into the payload
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to dispatch payload to server registry.");
      }

      await response.json();
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        "Transmission failed. Please check your connection or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // 4. Tracking function for instant outbound WhatsApp redirects
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "WhatsApp Lead Redirect",
        content_category: "Instant Messaging",
      });
    }
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-brand-electric font-mono text-xs tracking-widest uppercase block">
            Get Started
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display">
            Ready to Transform Your Business with Technology?
          </h1>
          <p className="text-brand-muted max-w-xl mx-auto text-sm md:text-base">
            Every great project starts with a conversation. Share your ideas
            with us, and we will create a tailored digital solution that helps
            your business attract more customers, strengthen your online
            presence, and achieve sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Direct Dynamic Execution Controls */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 border border-white/10 relative">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-brand-electric/10 text-brand-electric rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">
                  Project Payload Documented
                </h3>
                <p className="text-sm text-brand-muted max-w-sm mx-auto">
                  An Ellorum solutions architect will analyze your site metrics
                  and reach out via secure channels within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitPipeline} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-muted uppercase font-accent">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formState.fullName}
                      onChange={(e) =>
                        setFormState({ ...formState, fullName: e.target.value })
                      }
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-electric text-white transition-colors disabled:opacity-50"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-muted uppercase font-accent">
                      Business Name (optional)
                    </label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      value={formState.businessName}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          businessName: e.target.value,
                        })
                      }
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-electric text-white transition-colors disabled:opacity-50"
                      placeholder="e.g. Venture Link"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-muted uppercase font-accent">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-electric text-white transition-colors disabled:opacity-50"
                      placeholder="e.g john@gmail.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-muted uppercase font-accent">
                      Phone / Whatsapp Number
                    </label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-electric text-white transition-colors disabled:opacity-50"
                      placeholder="phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-muted uppercase font-accent">
                    select a Service
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formState.projectType}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        projectType: e.target.value,
                      })
                    }
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-electric text-white transition-colors disabled:opacity-50"
                  >
                    <option value="" className="bg-brand-dark text-brand-muted">
                      Select a service category
                    </option>
                    {previewServices.map((p) => (
                      <option
                        key={p.id}
                        value={p.title}
                        className="bg-brand-dark text-white"
                      >
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-muted uppercase font-accent">
                    project budget (Optional)
                  </label>
                  <input
                    type="text"
                    disabled={isSubmitting}
                    value={formState.budget}
                    onChange={(e) =>
                      setFormState({ ...formState, budget: e.target.value })
                    }
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-electric text-white transition-colors disabled:opacity-50"
                    placeholder="100,000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-muted uppercase font-accent">
                    Project Goals / Aim
                  </label>
                  <textarea
                    rows={4}
                    required
                    disabled={isSubmitting}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-electric text-white transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell us about your project, your business, and what you hope to achieve. Include any features, ideas, or challenges you'd like us to know about....."
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    {errorMessage}
                  </p>
                )}

                <div className="space-y-4 pt-2">
                  {/* Standard Form Submission CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-brand-electric to-brand-neon text-brand-bg font-bold py-4 rounded-xl shadow-lg hover:shadow-brand-electric/20 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        Sending Transmission{" "}
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Visual Separator */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/5"></div>
                    </div>
                    <span className="relative px-4 text-[10px] uppercase font-mono bg-[#0b0c10] text-brand-muted">
                      Or connect instantly
                    </span>
                  </div>

                  {/* WhatsApp Conversion Tracked Link */}
                  <Link
                    href="https://wa.me/2349126973160"
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleWhatsAppClick} // Tracks click instantly as browser event before shifting focus
                    className="w-full flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-green-500/5"
                  >
                    <FaWhatsappSquare className="w-5 h-5" /> Chat On WhatsApp
                  </Link>
                </div>
              </form>
            )}
          </div>

          {/* Verification Metrics & Fast Handshake Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-6">
              <h4 className="text-lg font-bold font-display">GET IN TOUCH</h4>

              <p className="text-brand-muted text-sm leading-relaxed">
                Have a project in mind or need expert advice? We would love to
                hear from you. Reach out through any of the channels below, and
                our team will get back to you as soon as possible.
              </p>

              <div className="space-y-4">
                <Link
                  href="mailto:ellorumwebsolutions@gmail.com"
                  className="flex items-center gap-4 group p-3 rounded-xl bg-white/2 hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-electric/10 text-brand-electric flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-muted uppercase font-mono">
                      Gmail Communications Hub
                    </p>
                    <p className="text-sm font-semibold group-hover:text-brand-electric transition-colors break-all">
                      ellorumwebsolutions@gmail.com
                    </p>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/2349126973160"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group p-3 rounded-xl bg-white/2 hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center shrink-0">
                    <FaWhatsappSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-muted uppercase font-mono">
                      Direct WhatsApp Response Desk
                    </p>
                    <p className="text-sm font-semibold group-hover:text-green-400 transition-colors">
                      (+234) 912 697 3160
                    </p>
                  </div>
                </Link>

                <Link
                  href="tel:+2349126973160"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group p-3 rounded-xl bg-white/2 hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-muted uppercase font-mono">
                      Direct Telephone Response Desk
                    </p>
                    <p className="text-sm font-semibold group-hover:text-green-400 transition-colors">
                      (+234) 915 957 6003
                    </p>
                  </div>
                </Link>
              </div>

              <div className="pt-4 border-t border-white/5 flex gap-3">
                <Link
                  href="https://instagram.com/@ellorumwebsolutions"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-electric hover:text-brand-bg flex items-center justify-center transition-colors text-brand-muted text-sm"
                >
                  <FaInstagramSquare className="w-4 h-4" />
                </Link>
                <Link
                  href="https://facebook.com/ellorumwebsolutions"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-electric hover:text-brand-bg flex items-center justify-center transition-colors text-brand-muted text-sm"
                >
                  <FaFacebookSquare className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Quick Answer Sidebar Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-brand-electric font-bold text-sm">
                <HelpCircle className="w-4 h-4" /> Confidentiality Guaranteed
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Your business ideas deserve protection. Every conversation is
                treated with the highest level of professionalism, and we offer
                Non-Disclosure Agreements (NDAs) to safeguard your confidential
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
