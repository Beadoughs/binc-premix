import { PhoneCall, ClipboardList, HardHat, BadgeCheck } from "lucide-react";

const STEPS = [
  {
    step: "1",
    icon: PhoneCall,
    title: "Call or Enquire",
    description: "Get in touch by phone or online. We'll respond quickly to discuss your project.",
  },
  {
    step: "2",
    icon: ClipboardList,
    title: "Free Quote",
    description: "We visit your site and provide a detailed fixed-price quote within 24 hours.",
  },
  {
    step: "3",
    icon: HardHat,
    title: "We Get to Work",
    description: "Our crew handles everything — formwork, pour, finishing and clean up.",
  },
  {
    step: "4",
    icon: BadgeCheck,
    title: "Job Done Right",
    description: "We walk through the finished job with you and make sure you're happy.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 lg:py-24 bg-concrete-50">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="badge bg-brand-50 text-brand-600 border border-brand-100 mb-3">How It Works</span>
          <h2 className="section-title text-dark mb-3">Simple Process</h2>
          <p className="section-subtitle mx-auto">Getting quality concrete work done is straightforward with BINC.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white border-2 border-brand-200 rounded-full mb-4 shadow-sm">
                  <Icon size={24} className="text-brand-600" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-concrete-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
