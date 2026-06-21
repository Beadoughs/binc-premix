import type { ElementType } from "react";
import Link from "next/link";
import { Home, Building2, Truck, Package, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/utils";

const ICONS: Record<string, ElementType> = {
  Home,
  Building2,
  Truck,
  Cylinder: Package,
};

export default function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="badge bg-brand-50 text-brand-600 border border-brand-100 mb-3">Our Services</span>
          <h2 className="section-title text-dark mb-3">What We Do</h2>
          <p className="section-subtitle mx-auto">
            Residential, commercial and civil concreting across Launceston and Northern Tasmania.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] || Home;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col bg-white border border-concrete-200 rounded-xl overflow-hidden hover:border-brand-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="relative h-44 overflow-hidden bg-concrete-100">
                  <div
                    className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-dark/30" />
                  <div className="absolute top-3 left-3 flex items-center justify-center w-9 h-9 bg-brand-600 rounded-lg">
                    <Icon size={16} className="text-white" />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-dark mb-1 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-concrete-500 text-sm leading-relaxed flex-1 mb-4">
                    {service.tagline}
                  </p>
                  <div className="flex items-center gap-1 text-brand-600 text-sm font-semibold">
                    Learn more <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
