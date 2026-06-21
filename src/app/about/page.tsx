import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, Award, Users, MapPin, Clock } from "lucide-react";
import { PHONE_HREF, PHONE, STATS } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BINC Premix Concrete — Launceston's trusted concreting specialists with 15+ years experience in residential, commercial and civil concreting across Launceston.",
};

const TEAM = [
  {
    name: "Mark Binetti",
    role: "Director & Senior Concreter",
    bio: "25 years in the concrete industry. Mark founded BINC with a vision to bring professional-grade concrete work to every project, no matter the size.",
    initials: "MB",
  },
  {
    name: "James Thornton",
    role: "Commercial Projects Manager",
    bio: "Specialist in large-scale commercial slabs and civil concrete. James manages all projects over 500sqm and coordinates our commercial client relationships.",
    initials: "JT",
  },
  {
    name: "Sarah Nguyen",
    role: "Office Manager & Estimator",
    bio: "Sarah handles all client enquiries, quotes, and scheduling. She ensures our quotes are accurate, competitive, and delivered within 24 hours.",
    initials: "SN",
  },
  {
    name: "Tony Russo",
    role: "Lead Finisher",
    bio: "Tony is our master finisher — the person responsible for the quality you see on every residential project. 18 years of decorative concrete expertise.",
    initials: "TR",
  },
];

const VALUES = [
  {
    icon: CheckCircle2,
    title: "Quality First",
    description: "We never cut corners. Every project gets the same attention to detail whether it's a 10sqm shed slab or a 5,000sqm warehouse floor.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "When we say we'll be there at 7am, we're there at 7am. When we quote 3 days, it takes 3 days. Our word is our bond.",
  },
  {
    icon: Users,
    title: "Communication",
    description: "We keep you informed at every step. No surprises, no excuses — just clear, honest communication from quote to completion.",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    description: "We take genuine pride in our work. Our finishers, concreters and project managers are some of the best in the Sydney market.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-pattern py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-cta-pattern" />
        <div
          className="absolute inset-0 opacity-20 bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative container-xl text-center">
          <span className="badge bg-brand-600/20 text-brand-400 border border-brand-500/30 mb-4">
            About BINC
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
            Sydney&apos;s Trusted <span className="text-brand-500">Concrete Specialists</span>
          </h1>
          <p className="text-concrete-300 text-xl max-w-2xl mx-auto">
            15+ years of delivering premium concrete work across Launceston. Family business, professional standards, exceptional results.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="Our Story"
                title="Built on Concrete, "
                highlight="Grounded in Values"
                subtitle=""
                className="mb-6"
              />
              <div className="space-y-4 text-concrete-600 leading-relaxed">
                <p>
                  BINC Premix Concrete was founded in 2009 by Mark Binetti — a second-generation concreter who grew up watching his father pour slabs across Western Sydney. After years working for large commercial contractors, Mark saw an opportunity to build a company that combined the scale and professionalism of a commercial operator with the personal service and attention to detail of a family business.
                </p>
                <p>
                  Starting with a single crew and a truck, BINC quickly built a reputation for showing up on time, doing what was promised, and delivering a quality of finish that set us apart. Word spread fast among Sydney builders and homeowners alike.
                </p>
                <p>
                  Today, BINC operates multiple crews across residential, commercial and civil sectors, servicing Launceston and Northern Tasmania. We&apos;ve completed over 500 projects, from backyard driveways to multi-million dollar commercial developments.
                </p>
                <p>
                  Despite our growth, we&apos;ve never lost sight of what made us successful: treating every project as if it were our own, and every client as if they were family.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link href="/quote" className="btn-primary py-3 px-6">
                  Get a Free Quote <ArrowRight size={16} />
                </Link>
                <a href={PHONE_HREF} className="btn-secondary py-3 px-6 text-sm">
                  <Phone size={15} />
                  Call {PHONE}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="h-96 lg:h-[480px] bg-center bg-cover"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80')`,
                  }}
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-concrete-100">
                <div className="grid grid-cols-2 gap-4">
                  {STATS.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-2xl font-black text-brand-600">{s.value}</div>
                      <div className="text-xs text-concrete-400 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-concrete-50">
        <div className="container-xl">
          <SectionHeader
            badge="Our Values"
            title="How We Work"
            subtitle="These aren't just words on a wall — they're the principles that drive every decision we make and every project we deliver."
            center
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white border border-concrete-100 rounded-2xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 bg-brand-50 rounded-2xl mx-auto mb-4">
                    <Icon size={24} className="text-brand-600" />
                  </div>
                  <h3 className="font-bold text-dark text-base mb-2">{v.title}</h3>
                  <p className="text-concrete-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-xl">
          <SectionHeader
            badge="The Team"
            title="Meet the People "
            highlight="Behind BINC"
            subtitle="Our experienced team is the backbone of everything we deliver. Every crew member is hand-picked for their skill, professionalism, and commitment to quality."
            center
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-concrete-50 border border-concrete-100 rounded-2xl p-6 text-center hover:shadow-md transition-all duration-200">
                <div className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center text-white font-black text-xl mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-bold text-dark text-base">{member.name}</h3>
                <p className="text-brand-600 text-xs font-semibold uppercase tracking-wider mt-1 mb-3">{member.role}</p>
                <p className="text-concrete-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licences & Accreditations */}
      <section className="py-16 bg-concrete-50 border-y border-concrete-200">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-extrabold text-dark mb-2">Fully Licensed & Insured</h2>
              <p className="text-concrete-500 text-sm max-w-xl">
                BINC holds all required licences and insurances to legally operate as a concreting contractor in NSW. We carry full public liability and workers compensation insurance on all projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "NSW Building Licence", value: "BL 123456" },
                { label: "Public Liability", value: "$20M Cover" },
                { label: "WorkCover", value: "Insured" },
                { label: "ABN", value: "12 345 678 901" },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-concrete-200 rounded-xl px-5 py-4 text-center min-w-[140px]">
                  <p className="text-xs text-concrete-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-bold text-dark text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-white">
        <div className="container-xl text-center">
          <h2 className="text-2xl font-extrabold text-dark mb-3">Our Service Area</h2>
          <p className="text-concrete-500 text-sm mb-8 max-w-xl mx-auto">
            BINC services Launceston and Northern Tasmania. If you&apos;re not sure whether we cover your area, just give us a call — we&apos;ll let you know.
          </p>
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
            {[
              "Launceston", "Norwood", "Kings Meadows", "Ravenswood", "Prospect",
              "Newnham", "St Leonards", "Mayfield", "Rocherlea", "Invermay",
              "George Town", "Deloraine", "Evandale", "Perth", "Longford",
              "Westbury", "Hadspen", "Legana", "Exeter", "Northern Tasmania",
            ].map((area) => (
              <div key={area} className="flex items-center gap-1.5 px-3 py-2 bg-concrete-50 border border-concrete-200 rounded-full text-sm text-concrete-600">
                <MapPin size={11} className="text-brand-500" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
