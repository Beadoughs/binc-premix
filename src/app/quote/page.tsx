import type { Metadata } from "next";
import { CheckCircle2, Phone, Clock, Shield } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/utils";
import QuoteForm from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free, no-obligation concrete quote from BINC Premix Concrete. Residential, commercial and civil projects. Fast 24-hour response. Call 1800 246 269.",
};

const TRUST_POINTS = [
  { icon: CheckCircle2, text: "Free, no-obligation quote" },
  { icon: Clock, text: "Response within 24 hours" },
  { icon: Shield, text: "Fixed-price, no hidden charges" },
  { icon: Phone, text: "Follow-up call from our team" },
];

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-pattern py-16 lg:py-20">
        <div className="absolute top-0 left-0 right-0 h-1 bg-cta-pattern" />
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge bg-brand-600/20 text-brand-400 border border-brand-500/30 mb-4">
                Free Quote
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
                Get Your Free <span className="text-brand-500">Concrete Quote</span>
              </h1>
              <p className="text-concrete-300 text-lg mb-8">
                Fill out our quick form and we&apos;ll get back to you with a detailed, fixed-price quote within 24 hours. No obligation, no pressure.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {TRUST_POINTS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.text} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                      <Icon size={16} className="text-brand-400 shrink-0" />
                      <span className="text-white text-sm font-medium">{p.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-concrete-400 text-sm mb-2">Prefer to speak with someone directly?</p>
                <a href={PHONE_HREF} className="flex items-center gap-2 text-white font-bold text-xl hover:text-brand-400 transition-colors">
                  <Phone size={22} className="text-brand-500" />
                  {PHONE}
                </a>
                <p className="text-concrete-500 text-xs mt-1">Mon–Fri 6am–5pm · Sat by arrangement</p>
              </div>
            </div>

            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
