import { ShieldCheck, Clock, DollarSign, ThumbsUp } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully licensed with public liability insurance on every job.",
  },
  {
    icon: Clock,
    title: "On Time",
    description: "We show up when we say we will and finish on schedule.",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "Detailed fixed-price quotes with no hidden charges.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Finish",
    description: "15+ years of experience delivering work you'll be proud of.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-concrete-50">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="badge bg-brand-50 text-brand-600 border border-brand-100 mb-3">Why BINC</span>
          <h2 className="section-title text-dark mb-3">Why Choose Us</h2>
          <p className="section-subtitle mx-auto">
            Launceston&apos;s trusted concreting team — reliable, experienced, and easy to deal with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-white border border-concrete-100 rounded-xl p-6 text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-brand-50 rounded-xl mx-auto mb-4">
                  <Icon size={22} className="text-brand-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">{reason.title}</h3>
                <p className="text-concrete-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
