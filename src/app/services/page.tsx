import type { Metadata } from "next";
import type { ElementType } from "react";
import Link from "next/link";
import { Home, Building2, Truck, Package, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { SERVICES, PHONE, PHONE_HREF } from "@/lib/utils";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Our Concreting Services",
  description:
    "BINC Premix Concrete offers residential, commercial and civil concreting services across Launceston. Driveways, slabs, warehouse floors, civil infrastructure and premium premix supply.",
};

const ICONS: Record<string, ElementType> = {
  Home,
  Building2,
  Truck,
  Cylinder: Package,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-hero-pattern py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-1 bg-cta-pattern" />
        <div className="container-xl text-center">
          <span className="badge bg-brand-600/20 text-brand-400 border border-brand-500/30 mb-4">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
            Our Concreting <span className="text-brand-500">Services</span>
          </h1>
          <p className="text-concrete-300 text-lg max-w-2xl mx-auto mb-8">
            From residential driveways to large-scale civil infrastructure — BINC delivers expert concrete solutions for every project type and scale.
          </p>
          <div className="flex justify-center">
            <a href={PHONE_HREF} className="btn-primary text-base py-3.5 px-8">
              <Phone size={18} />
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-xl space-y-20">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] || Home;
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div
                    className="h-80 lg:h-96 bg-center bg-cover"
                    style={{
                      backgroundImage: `linear-gradient(rgba(15,17,23,0.1), rgba(15,17,23,0.3)), url('${service.image}')`,
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-brand-600 rounded-xl shadow-lg">
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="badge bg-brand-50 text-brand-600 border border-brand-100 mb-4">
                    {service.shortTitle}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-dark mb-4">
                    {service.title}
                  </h2>
                  <div className="divider-brand mb-5" />
                  <p className="text-concrete-600 leading-relaxed mb-7">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 p-3 bg-concrete-50 rounded-lg border border-concrete-100">
                        <CheckCircle2 size={14} className="text-brand-500 mt-0.5 shrink-0" />
                        <span className="text-concrete-700 text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={PHONE_HREF} className="btn-primary py-3 px-6">
                      <Phone size={15} />
                      Call {PHONE}
                    </a>
                    <Link href={`/services/${service.slug}`} className="btn-secondary py-3 px-6 text-sm">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
