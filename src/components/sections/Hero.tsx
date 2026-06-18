import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { PHONE, PHONE_HREF, STATS } from "@/lib/utils";

const TRUST_ITEMS = [
  "15+ Years Experience",
  "Licensed & Insured",
  "Free Quotes",
  "500+ Projects Delivered",
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-hero-pattern">
      {/* Background overlay with texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Brand accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-cta-pattern" />

      <div className="relative container-xl py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600/20 border border-brand-500/30 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-brand-400 text-sm font-semibold tracking-wide uppercase">
                Sydney&apos;s #1 Premix Concrete Specialist
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight mb-6">
              Premium Concrete.{" "}
              <span className="text-brand-500">Expert</span>{" "}
              Placement.{" "}
              <span className="text-brand-400">Guaranteed.</span>
            </h1>

            <p className="text-concrete-300 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
              BINC delivers high-quality premix concrete and professional concreting services for residential, commercial, and civil projects across Greater Sydney. On time. On budget. Every time.
            </p>

            {/* Trust items */}
            <div className="flex flex-wrap gap-x-5 gap-y-2.5 mb-10">
              {TRUST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-500 shrink-0" />
                  <span className="text-concrete-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-primary text-base py-4 px-8">
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
              <a href={PHONE_HREF} className="btn-outline-white text-base py-4 px-8">
                <Phone size={18} />
                Call {PHONE}
              </a>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="hidden lg:block animate-fade-in-up animate-delay-200">
            <div className="relative">
              {/* Main image placeholder with stats */}
              <div className="relative rounded-2xl overflow-hidden bg-dark-700 border border-white/10 shadow-2xl">
                <div
                  className="h-80 bg-gradient-to-br from-concrete-800 to-concrete-950"
                  style={{
                    backgroundImage: `linear-gradient(rgba(15,17,23,0.5), rgba(15,17,23,0.7)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="glass rounded-xl px-5 py-4 w-full">
                      <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-1">Currently Working On</p>
                      <p className="text-white font-bold text-lg">Residential Driveway — Kellyville, NSW</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex -space-x-1">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="w-6 h-6 rounded-full bg-brand-500 border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold">
                              {i}
                            </div>
                          ))}
                        </div>
                        <span className="text-white/70 text-xs">3 crew on site</span>
                        <span className="ml-auto flex items-center gap-1 text-brand-400 text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                          In Progress
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-4 divide-x divide-white/10 bg-dark-800">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="py-5 px-4 text-center">
                      <div className="text-2xl font-black text-brand-400">{stat.value}</div>
                      <div className="text-xs text-concrete-500 mt-1 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-brand-600 text-white rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Response Time</p>
                <p className="text-xl font-black">24 hrs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stats bar */}
      <div className="lg:hidden bg-dark-800 border-t border-white/10">
        <div className="container-xl py-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-black text-brand-400">{stat.value}</div>
                <div className="text-xs text-concrete-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-white/30 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
