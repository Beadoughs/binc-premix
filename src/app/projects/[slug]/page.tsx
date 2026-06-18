import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Ruler, Clock, ArrowRight } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";

const ALL_PROJECTS = [
  {
    slug: "kellyville-driveway",
    title: "Exposed Aggregate Driveway",
    category: "Residential",
    location: "Kellyville, NSW",
    description: "Premium exposed aggregate driveway with matching pathways and patio entertainment area. 280sqm total. Pea gravel aggregate with natural stone tones.",
    fullDescription:
      "This project involved the complete removal of the existing driveway and replacement with a premium exposed aggregate concrete system across 280sqm. The scope included the main vehicle driveway, side access pathway, and a large rear entertaining patio. The exposed aggregate finish used locally sourced pea gravel in warm stone tones, selected by the client to complement their home's facade. All work was completed in 4 days with minimal disruption to the family.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    size: "280m²",
    duration: "4 days",
    year: "2024",
    scope: ["Demolition of existing driveway", "Excavation & sub-base preparation", "Formwork & reinforcement", "Exposed aggregate placement", "Sealing & finishing"],
  },
  {
    slug: "penrith-warehouse",
    title: "Industrial Warehouse Slab",
    category: "Commercial",
    location: "Penrith, NSW",
    description: "Super-flat industrial floor slab for a major logistics and distribution warehouse.",
    fullDescription:
      "BINC was engaged to supply and place a 3,200sqm super-flat industrial floor slab for a major logistics facility in Penrith. The specification required an F-number of 40/30, with laser-screed placement and power-trowel finishing. We coordinated four concrete trucks simultaneously and completed the pour within the critical weather window.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    size: "3,200m²",
    duration: "8 days",
    year: "2024",
    scope: ["Sub-base compaction testing", "Vapour barrier installation", "Reinforcement placement", "Laser screed pour", "Power trowel finishing", "Curing compound application"],
  },
  {
    slug: "parramatta-carpark",
    title: "Multi-Level Car Park Deck",
    category: "Commercial",
    location: "Parramatta, NSW",
    description: "Post-tensioned concrete deck construction for 420-space commercial car park.",
    fullDescription:
      "Working alongside the structural engineer and formwork contractor, BINC supplied and placed the post-tensioned suspended concrete decks for a 5-level, 420-space commercial car park in Parramatta CBD. This technically demanding project required specialist concrete mix designs and precise placement sequences.",
    image: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?w=1200&q=80",
    size: "4,800m²",
    duration: "12 days",
    year: "2024",
    scope: ["Specialist PT mix supply", "Staged placement sequences", "Quality control testing", "Surface grinding & sealing"],
  },
  {
    slug: "north-west-road",
    title: "Road Infrastructure Works",
    category: "Civil",
    location: "Norwest, NSW",
    description: "450m of concrete kerb and gutter plus 800m² of footpath construction.",
    fullDescription:
      "Civil concrete works for a new residential subdivision in the Norwest Business Park growth area. The scope included 450 linear metres of roll-top kerb and gutter, 800sqm of 125mm thick footpath, and three driveway crossings. All work was completed to Blacktown City Council specifications.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
    size: "Lineal 450m",
    duration: "6 days",
    year: "2024",
    scope: ["Kerb forming & placing", "Gutter construction", "Footpath construction", "Driveway crossings", "Council inspection sign-off"],
  },
  {
    slug: "castle-hill-pool",
    title: "Pool Surrounds & Entertaining",
    category: "Residential",
    location: "Castle Hill, NSW",
    description: "Honed concrete pool surrounds, feature steps and entertaining area.",
    fullDescription:
      "A complete outdoor living transformation — honed concrete pool surrounds in warm grey tones, cantilevered feature steps, and a large alfresco entertaining slab with integrated garden edging. The honed finish was specially selected for its slip resistance and heat retention properties.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80",
    size: "180m²",
    duration: "3 days",
    year: "2024",
    scope: ["Pool coping formwork", "Honed finish pool surround", "Feature steps", "Entertaining slab", "Garden edging"],
  },
];

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.location}`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug) ?? ALL_PROJECTS[0];

  return (
    <>
      {/* Hero image */}
      <section className="relative h-72 lg:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-xl pb-10 lg:pb-16">
            <Link href="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
              <ArrowLeft size={14} />
              All Projects
            </Link>
            <span className="badge bg-brand-600 text-white border-0 mb-3">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-dark mb-4">Project Overview</h2>
              <div className="divider-brand mb-5" />
              <p className="text-concrete-600 leading-relaxed text-lg mb-8">{project.fullDescription}</p>

              <h3 className="text-xl font-bold text-dark mb-4">Scope of Works</h3>
              <ul className="space-y-2.5 mb-8">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3 p-3 bg-concrete-50 rounded-lg border border-concrete-100">
                    <div className="w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-concrete-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/projects" className="btn-secondary text-sm py-2.5 px-6">
                <ArrowLeft size={15} />
                Back to All Projects
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-concrete-50 border border-concrete-200 rounded-2xl p-6">
                <h3 className="font-bold text-dark mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={14} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-concrete-400 uppercase tracking-wider">Location</p>
                      <p className="text-dark font-semibold text-sm">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                      <Ruler size={14} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-concrete-400 uppercase tracking-wider">Project Size</p>
                      <p className="text-dark font-semibold text-sm">{project.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={14} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-concrete-400 uppercase tracking-wider">Duration</p>
                      <p className="text-dark font-semibold text-sm">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                      <Calendar size={14} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-concrete-400 uppercase tracking-wider">Year</p>
                      <p className="text-dark font-semibold text-sm">{project.year}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Want a Similar Project?</h3>
                <p className="text-concrete-400 text-sm mb-5">Contact us for a free site visit and quote. We&apos;ll have pricing back to you within 24 hours.</p>
                <Link href="/quote" className="btn-primary w-full justify-center text-sm">
                  Get a Free Quote <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
