import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/utils";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  phoneLabel?: string;
  quoteLabel?: string;
}

export default function CTABanner({
  title = "Ready to Start Your Concrete Project?",
  subtitle = "Get a free, no-obligation quote from Sydney's most trusted concreting specialists. Fast turnaround, competitive pricing, guaranteed quality.",
  phoneLabel = `Call ${PHONE}`,
  quoteLabel = "Get Free Quote",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-cta-pattern">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2" />
      </div>

      <div className="relative container-xl py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white text-center lg:text-left max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
              {title}
            </h2>
            <p className="text-brand-100 text-lg leading-relaxed">{subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={PHONE_HREF}
              className="btn-outline-white gap-2 text-base px-7 py-3.5 whitespace-nowrap"
            >
              <Phone size={18} />
              {phoneLabel}
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-700 hover:bg-brand-50 font-bold rounded-lg transition-all duration-200 text-base whitespace-nowrap shadow-lg hover:shadow-xl active:scale-95"
            >
              {quoteLabel}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
