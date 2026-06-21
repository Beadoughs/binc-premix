import { Phone, CheckCircle2 } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/utils";

const TRUST_ITEMS = [
  "Free Quotes",
  "Licensed & Insured",
  "Launceston Based",
  "Residential & Commercial",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-pattern">
      <div className="absolute top-0 left-0 right-0 h-1 bg-cta-pattern" />

      {/* Background fleet image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url('/hero-fleet.jpg')` }}
      />
      <div className="absolute inset-0 bg-dark/65" />

      <div className="relative container-xl py-24 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600/20 border border-brand-500/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-500" />
            <span className="text-brand-400 text-sm font-semibold uppercase tracking-wide">
              Launceston&apos;s Concrete Specialists
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Quality Concrete Work,<br />
            <span className="text-brand-500">Done Right.</span>
          </h1>

          <p className="text-concrete-300 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
            BINC Premix Concrete delivers premium residential and commercial concreting across Launceston and Northern Tasmania. Professional, reliable, and fairly priced.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2.5 mb-10">
            {TRUST_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-brand-500 shrink-0" />
                <span className="text-concrete-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF} className="btn-primary text-base py-4 px-8">
              <Phone size={18} />
              Call Us Now — {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
