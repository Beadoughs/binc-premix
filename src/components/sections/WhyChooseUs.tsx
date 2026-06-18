import {
  ShieldCheck,
  Clock,
  DollarSign,
  Wrench,
  Award,
  Users,
  Truck,
  ThumbsUp,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Licensed & Fully Insured",
    description: "We hold all required NSW building licences and carry $20M public liability insurance for your complete peace of mind.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description: "We respect your project timeline. Our crews arrive on schedule and work efficiently to meet agreed milestones.",
  },
  {
    icon: DollarSign,
    title: "Competitive Fixed Pricing",
    description: "No surprise variations. We provide detailed, fixed-price quotes so you know exactly what you're paying before work starts.",
  },
  {
    icon: Wrench,
    title: "Expert Workmanship",
    description: "15+ years of concreting expertise across residential, commercial and civil sectors. We do it right the first time.",
  },
  {
    icon: Award,
    title: "Quality Mix Designs",
    description: "We use premium premix concrete formulated for Australian conditions — properly batched, tested, and placed to spec.",
  },
  {
    icon: Users,
    title: "Experienced Local Teams",
    description: "All crews are experienced Sydney locals who understand local conditions, council requirements, and project standards.",
  },
  {
    icon: Truck,
    title: "Full-Service Capability",
    description: "Earthworks, formwork, reinforcement, placement, finishing and curing — we handle every step of the concrete process.",
  },
  {
    icon: ThumbsUp,
    title: "500+ Satisfied Clients",
    description: "From homeowners to property developers, our growing portfolio of happy clients is our best endorsement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-concrete-50">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeader
              badge="Why BINC"
              title="The BINC "
              highlight="Difference"
              subtitle="Not all concreters are created equal. Here's what sets BINC apart from the competition and why Sydney's leading developers, builders, and homeowners trust us with their most important projects."
              className="mb-10"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              {REASONS.slice(0, 6).map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-concrete-100 hover:border-brand-200 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-9 h-9 bg-brand-50 rounded-lg shrink-0">
                      <Icon size={18} className="text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-sm mb-1">{reason.title}</h3>
                      <p className="text-concrete-500 text-xs leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image with overlays */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="h-96 lg:h-[520px] bg-center bg-cover"
                style={{
                  backgroundImage: `linear-gradient(rgba(15,17,23,0.2), rgba(15,17,23,0.4)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80')`,
                }}
              />

              {/* Floating stats */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                {REASONS.slice(6).map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <div key={reason.title} className="glass rounded-xl p-4">
                      <Icon size={20} className="text-brand-400 mb-2" />
                      <h4 className="text-white font-bold text-sm">{reason.title}</h4>
                      <p className="text-white/70 text-xs mt-0.5 leading-tight">{reason.description.split('.')[0]}.</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Years badge */}
            <div className="absolute -top-5 -right-5 bg-brand-600 text-white rounded-2xl p-5 shadow-xl text-center">
              <div className="text-4xl font-black leading-none">15+</div>
              <div className="text-xs font-semibold uppercase tracking-widest mt-1 opacity-80">Years<br />Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
