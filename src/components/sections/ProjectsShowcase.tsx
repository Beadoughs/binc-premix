import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const PROJECTS = [
  {
    slug: "driveway-norwood",
    title: "Exposed Aggregate Driveway",
    category: "Residential",
    location: "Norwood, TAS",
    image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=800&q=80",
  },
  {
    slug: "warehouse-slab",
    title: "Warehouse Floor Slab",
    category: "Commercial",
    location: "Launceston, TAS",
    image: "https://images.unsplash.com/photo-1590699168571-c7b47b55eded?w=800&q=80",
  },
  {
    slug: "patio-kings-meadows",
    title: "Coloured Concrete Patio",
    category: "Residential",
    location: "Kings Meadows, TAS",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
  },
  {
    slug: "carpark-launceston",
    title: "Commercial Car Park",
    category: "Commercial",
    location: "Launceston, TAS",
    image: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?w=800&q=80",
  },
  {
    slug: "shed-slab-ravenswood",
    title: "Shed Slab",
    category: "Residential",
    location: "Ravenswood, TAS",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    slug: "footpath-council",
    title: "Council Footpath Works",
    category: "Civil",
    location: "Launceston, TAS",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Residential: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Commercial:  "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Civil:       "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

export default function ProjectsShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-dark">
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <span className="badge bg-white/10 text-white border border-white/20 mb-3">Our Work</span>
            <h2 className="section-title text-white">Recent Projects</h2>
          </div>
          <Link href="/projects" className="btn-outline-white text-sm py-2.5 px-5 shrink-0 self-start sm:self-auto">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative rounded-xl overflow-hidden min-h-52 bg-concrete-900"
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className={`badge border self-start mb-2 ${CATEGORY_COLORS[project.category]}`}>
                  {project.category}
                </span>
                <h3 className="text-white font-bold group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-white/50 text-xs mt-1">
                  <MapPin size={10} />
                  {project.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
