import type { Metadata } from "next";
import type { ElementType } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Home, Building2, Truck, Package, CheckCircle2, ArrowRight, Phone, MapPin, Star } from "lucide-react";
import { SERVICES, PHONE, PHONE_HREF } from "@/lib/utils";
import CTABanner from "@/components/ui/CTABanner";

const ICONS: Record<string, ElementType> = {
  Home,
  Building2,
  Truck,
  Cylinder: Package,
};

const SERVICE_FAQS: Record<string, { q: string; a: string }[]> = {
  "residential-concreting": [
    {
      q: "How long does a concrete driveway take to complete?",
      a: "Most residential driveways take 1–2 days for placement and finishing, plus 7 days curing time before vehicle use. We'll provide a specific timeline during your free quote.",
    },
    {
      q: "What's the difference between exposed aggregate and plain concrete?",
      a: "Exposed aggregate has the top layer of cement removed to reveal decorative stone, giving a textured, slip-resistant finish. Plain concrete can be broomed, honed or polished. We'll help you choose the best finish for your home.",
    },
    {
      q: "Do you need council approval for a concrete driveway?",
      a: "In most cases, standard driveways don't require council approval, but new driveway crossings and some kerb modifications may need a permit. We handle all relevant permits as part of our service.",
    },
    {
      q: "How much does a concrete driveway cost?",
      a: "Pricing depends on area, thickness, finish type and site preparation required. Contact us for a free, no-obligation quote — we typically respond within 24 hours.",
    },
  ],
  "commercial-concreting": [
    {
      q: "Can you handle large-scale commercial projects?",
      a: "Yes. We have the equipment, crews and project management capability to handle commercial projects of all scales, from small retail fitouts to large warehouse slabs.",
    },
    {
      q: "Do you work with builders and project managers?",
      a: "Absolutely. Most of our commercial work is with builders, developers and project managers. We understand construction programs, SWMS requirements, and site coordination.",
    },
    {
      q: "What concrete strengths do you supply for commercial use?",
      a: "We supply all standard strength grades from 20MPa to 65MPa, as well as specialist mixes including fibre-reinforced, high-early strength, and self-compacting concrete.",
    },
  ],
  "civil-concreting": [
    {
      q: "Are you accredited for government and council work?",
      a: "Yes. We hold all relevant licences and insurances for government and council projects, and our work complies with relevant Australian Standards and council specifications.",
    },
    {
      q: "Do you have earthworks capability?",
      a: "Yes, our civil division has earthmoving and sub-base preparation capability, allowing us to be a single contractor for the full scope of civil concrete works.",
    },
  ],
  "premix-concrete-supply": [
    {
      q: "What areas do you supply premix concrete to?",
      a: "We supply premix concrete throughout Greater Sydney and surrounding regions including the Hills District, Penrith, Liverpool, Campbelltown, and the Blue Mountains.",
    },
    {
      q: "What is your minimum order for concrete supply?",
      a: "Our minimum supply is 0.5 cubic metres. We can supply in any quantity from small residential pours to large commercial projects.",
    },
    {
      q: "Do you offer pump hire with concrete supply?",
      a: "Yes. We can arrange concrete pumping services alongside our premix supply for sites where direct truck delivery isn't possible.",
    },
  ],
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} Sydney`,
    description: `${service.description} BINC Premix Concrete — Sydney's trusted specialists. Call 1800 246 269 for a free quote.`,
    keywords: [service.title, "Sydney concreting", "NSW concrete", service.shortTitle],
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = ICONS[service.icon] || Home;
  const faqs = SERVICE_FAQS[slug] || [];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-pattern py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-cta-pattern" />
        <div
          className="absolute inset-0 opacity-20 bg-center bg-cover"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative container-xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <Link href="/services" className="text-concrete-400 hover:text-white text-sm transition-colors">
                Services
              </Link>
              <span className="text-concrete-600">/</span>
              <span className="text-white text-sm">{service.title}</span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-12 h-12 bg-brand-600 rounded-xl">
                <Icon size={22} className="text-white" />
              </div>
              <span className="badge bg-brand-600/20 text-brand-400 border border-brand-500/30">
                {service.shortTitle}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
              {service.title}
            </h1>
            <p className="text-concrete-300 text-xl mb-8 leading-relaxed">{service.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-primary text-base py-3.5 px-8">
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a href={PHONE_HREF} className="btn-outline-white text-base py-3.5 px-8">
                <Phone size={18} />
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-extrabold text-dark mb-5">
                About Our {service.title} Service
              </h2>
              <div className="divider-brand mb-6" />
              <p className="text-concrete-600 leading-relaxed text-lg mb-8">{service.description}</p>

              <h3 className="text-xl font-bold text-dark mb-4">What&apos;s Included</h3>
              <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 p-3 bg-concrete-50 rounded-lg border border-concrete-100">
                    <CheckCircle2 size={14} className="text-brand-500 mt-0.5 shrink-0" />
                    <span className="text-concrete-700 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn-primary py-3 px-6">
                  Request a Quote <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-secondary py-3 px-6 text-sm">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Quick contact card */}
              <div className="bg-dark rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Ready to Start?</h3>
                <p className="text-concrete-400 text-sm mb-5">
                  Get a free, no-obligation quote for your {service.shortTitle.toLowerCase()} project. We typically respond within 24 hours.
                </p>
                <Link href="/quote" className="btn-primary w-full justify-center mb-3">
                  Get Free Quote <ArrowRight size={16} />
                </Link>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 text-brand-400 hover:text-brand-300 font-semibold text-sm transition-colors">
                  <Phone size={14} />
                  Or call {PHONE}
                </a>
              </div>

              {/* Service area */}
              <div className="bg-concrete-50 border border-concrete-200 rounded-2xl p-6">
                <h3 className="font-bold text-dark mb-3 flex items-center gap-2">
                  <MapPin size={16} className="text-brand-600" />
                  Service Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Greater Sydney",
                    "Hills District",
                    "Western Sydney",
                    "Penrith",
                    "Liverpool",
                    "Campbelltown",
                    "Parramatta",
                    "North West Sydney",
                    "Blue Mountains",
                    "Hawkesbury",
                  ].map((area) => (
                    <span key={area} className="px-2.5 py-1 bg-white border border-concrete-200 rounded-full text-xs text-concrete-600 font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 flex items-center gap-4">
                <div className="text-center shrink-0">
                  <div className="text-3xl font-black text-brand-600">4.9</div>
                  <div className="flex gap-0.5 justify-center mt-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} size={12} className="text-brand-500 fill-brand-500" />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">Rated 4.9/5 by clients</p>
                  <p className="text-concrete-500 text-xs mt-0.5">Based on 87 Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-16 bg-concrete-50">
          <div className="container-xl max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-dark mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-concrete-200 rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                  <p className="text-concrete-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <h2 className="text-2xl font-extrabold text-dark mb-8 text-center">
            Explore Our Other Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.filter((s) => s.slug !== slug).map((s) => {
              const SIcon = ICONS[s.icon] || Home;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-start gap-4 p-5 bg-concrete-50 border border-concrete-100 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-brand-100 rounded-lg shrink-0 group-hover:bg-brand-600 transition-colors">
                    <SIcon size={18} className="text-brand-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-sm group-hover:text-brand-700 transition-colors">{s.title}</h3>
                    <p className="text-concrete-500 text-xs mt-0.5 leading-relaxed">{s.tagline}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
