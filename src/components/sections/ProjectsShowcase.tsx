import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const FEATURED_PROJECTS = [
  {
    slug: "kellyville-driveway",
    title: "Exposed Aggregate Driveway",
    category: "Residential",
    location: "Kellyville, NSW",
    description: "Premium exposed aggregate driveway with matching pathways and patio — 280sqm total area.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    size: "lg",
  },
  {
    slug: "penrith-warehouse",
    title: "Industrial Warehouse Slab",
    category: "Commercial",
    location: "Penrith, NSW",
    description: "3,200sqm super-flat industrial floor slab for logistics warehouse.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    size: "sm",
  },
  {
    slug: "parramatta-carpark",
    title: "Multi-Level Car Park",
    category: "Commercial",
    location: "Parramatta, NSW",
    description: "Post-tensioned concrete deck for 420-space commercial car park.",
    image: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?w=800&q=80",
    size: "sm",
  },
  {
    slug: "north-west-rail-link",
    title: "Road Infrastructure Works",
    category: "Civil",
    location: "Norwest, NSW",
    description: "450m of concrete kerb and gutter plus footpath construction for council subdivision.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    size: "sm",
  },
  {
    slug: "castle-hill-pool",
    title: "Pool Surrounds & Entertaining",
    category: "Residential",
    location: "Castle Hill, NSW",
    description: "Honed concrete pool surrounds, feature steps, and decorative entertaining area.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    size: "sm",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Residential: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Commercial: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Civil: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export default function ProjectsShowcase() {
  const [featuredProject, ...otherProjects] = FEATURED_PROJECTS;

  return (
    <section className="py-20 lg:py-28 bg-dark">
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeader
            badge="Our Work"
            title="Featured "
            highlight="Projects"
            subtitle="A selection of recent projects across residential, commercial and civil sectors."
            light
          />
          <Link href="/projects" className="btn-outline-white text-sm py-2.5 px-5 shrink-0 self-start sm:self-auto">
            View All Projects
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Large featured project */}
          <Link
            href={`/projects/${featuredProject.slug}`}
            className="lg:col-span-1 lg:row-span-2 group relative rounded-2xl overflow-hidden bg-concrete-900 min-h-64"
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${featuredProject.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className={`badge border mb-3 self-start ${CATEGORY_COLORS[featuredProject.category]}`}>
                {featuredProject.category}
              </span>
              <h3 className="text-white font-bold text-xl mb-2 group-hover:text-brand-400 transition-colors">
                {featuredProject.title}
              </h3>
              <p className="text-white/70 text-sm mb-3 leading-relaxed">{featuredProject.description}</p>
              <div className="flex items-center gap-1.5 text-white/50 text-xs">
                <MapPin size={11} />
                {featuredProject.location}
              </div>
            </div>
          </Link>

          {/* Other projects */}
          {otherProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-concrete-900 min-h-48"
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className={`badge border mb-2 self-start ${CATEGORY_COLORS[project.category]}`}>
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-base group-hover:text-brand-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-white/50 text-xs">
                  <MapPin size={11} />
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
