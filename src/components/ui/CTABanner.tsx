import { Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/utils";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Ready to Start Your Concrete Project?",
  subtitle = "Give us a call and we'll talk through what you need. Fast, friendly service across Launceston and Northern Tasmania.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-cta-pattern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full" />
      </div>
      <div className="relative container-xl py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white text-center lg:text-left max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">{title}</h2>
            <p className="text-brand-100 text-lg">{subtitle}</p>
          </div>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-700 hover:bg-brand-50 font-bold rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-xl active:scale-95 shrink-0 whitespace-nowrap"
          >
            <Phone size={22} />
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
