import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore BINC Premix Concrete's portfolio of completed residential, commercial and civil concreting projects across Launceston and Northern Tasmania.",
};

const ALL_PROJECTS = [
  {
    slug: "driveway-norwood",
    title: "Exposed Aggregate Driveway",
    category: "Residential",
    location: "Norwood, TAS",
    description: "Exposed aggregate driveway and pathway with matching front patio. Natural stone tones to complement the home facade.",
    image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=800&q=80",
    size: "180m²",
    duration: "3 days",
    year: "2025",
  },
  {
    slug: "warehouse-slab-launceston",
    title: "Warehouse Floor Slab",
    category: "Commercial",
    location: "Launceston, TAS",
    description: "Steel-trowelled industrial floor slab for a local logistics warehouse. Power-float finish with control joints.",
    image: "https://images.unsplash.com/photo-1590699168571-c7b47b55eded?w=800&q=80",
    size: "1,800m²",
    duration: "6 days",
    year: "2025",
  },
  {
    slug: "patio-kings-meadows",
    title: "Coloured Concrete Patio",
    category: "Residential",
    location: "Kings Meadows, TAS",
    description: "Charcoal oxide-coloured concrete entertaining area with sawn control joints and exposed aggregate border.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    size: "95m²",
    duration: "2 days",
    year: "2025",
  },
  {
    slug: "carpark-launceston",
    title: "Commercial Car Park",
    category: "Commercial",
    location: "Launceston, TAS",
    description: "Plain concrete car park hardstand with line marking prep and stormwater drainage.",
    image: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?w=800&q=80",
    size: "650m²",
    duration: "4 days",
    year: "2024",
  },
  {
    slug: "shed-slab-ravenswood",
    title: "Shed & Garage Slab",
    category: "Residential",
    location: "Ravenswood, TAS",
    description: "Reinforced concrete slab for a large residential shed with broom finish and isolation joints.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    size: "120m²",
    duration: "1 day",
    year: "2024",
  },
  {
    slug: "footpath-council",
    title: "Council Footpath Works",
    category: "Civil",
    location: "Launceston, TAS",
    description: "New footpath construction along residential street — 200m of 125mm concrete path to council spec.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    size: "200m",
    duration: "3 days",
    year: "2024",
  },
];

const CATEGORIES = ["All", "Residential", "Commercial", "Civil"];
const CATEGORY_COLORS: Record<string, string> = {
  Residential: "bg-emerald-100 text-emerald-700 border border-emerald-200",
  Commercial: "bg-blue-100 text-blue-700 border border-blue-200",
  Civil: "bg-purple-100 text-purple-700 border border-purple-200",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-pattern py-20 lg:py-24">
        <div className="absolute top-0 left-0 right-0 h-1 bg-cta-pattern" />
        <div className="container-xl text-center">
          <span className="badge bg-brand-600/20 text-brand-400 border border-brand-500/30 mb-4">
            Our Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Completed <span className="text-brand-500">Projects</span>
          </h1>
          <p className="text-concrete-300 text-lg max-w-2xl mx-auto">
            Explore a selection of our recent work across residential, commercial and civil sectors throughout Launceston.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-xl">
          {/* Category filter hint */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold border cursor-default ${
                  cat === "All"
                    ? "bg-brand-600 text-white border-brand-600"
                    : CATEGORY_COLORS[cat]
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_PROJECTS.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="card-service group"
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`badge ${CATEGORY_COLORS[project.category]}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="badge bg-black/40 text-white border border-white/20">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-dark text-base mb-1 group-hover:text-brand-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-concrete-400 text-xs mb-3">
                    <MapPin size={11} />
                    {project.location}
                  </div>
                  <p className="text-concrete-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-concrete-100">
                    <div className="flex gap-4">
                      <div>
                        <span className="text-xs text-concrete-400 block">Area</span>
                        <span className="text-xs font-semibold text-dark">{project.size}</span>
                      </div>
                      <div>
                        <span className="text-xs text-concrete-400 block">Duration</span>
                        <span className="text-xs font-semibold text-dark">{project.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-brand-600 text-xs font-semibold group-hover:gap-2 transition-all">
                      View <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-concrete-50 border-y border-concrete-200 py-12">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "15+", label: "Years in Business" },
              { value: "$50M+", label: "Value Delivered" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl lg:text-4xl font-black text-brand-600 mb-1">{stat.value}</div>
                <div className="text-concrete-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Project?"
        subtitle="Join hundreds of satisfied clients across Launceston. Get your free quote within 24 hours."
      />
    </>
  );
}
