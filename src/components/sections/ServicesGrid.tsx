import type { ElementType } from "react";
import Link from "next/link";
import { Home, Building2, Truck, Package, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

const ICONS: Record<string, ElementType> = {
  Home,
  Building2,
  Truck,
  Cylinder: Package,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-xl">
        <SectionHeader
          badge="What We Do"
          title="Complete Concreting "
          highlight="Solutions"
          subtitle="From small residential jobs to large-scale commercial and civil projects — BINC has the expertise, equipment, and team to deliver exceptional concrete work every time."
          center
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] || Home;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card-service group flex flex-col"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-concrete-100">
                  <div
                    className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-brand-600 rounded-lg shadow-lg">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-concrete-500 text-sm leading-relaxed mb-4 flex-1">
                    {service.tagline}
                  </p>

                  {/* Top 3 features */}
                  <ul className="space-y-1.5 mb-5">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-concrete-600">
                        <CheckCircle2 size={12} className="text-brand-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-1 text-brand-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-secondary text-sm px-8 py-3">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
