import { PhoneCall, ClipboardList, HardHat, BadgeCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const STEPS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Contact Us",
    description: "Call or submit an online enquiry. We'll respond within 2 business hours to discuss your project requirements.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Free Site Visit & Quote",
    description: "We visit your site, assess the scope, and provide a detailed fixed-price quote with no hidden charges within 24 hours.",
  },
  {
    step: "03",
    icon: HardHat,
    title: "Professional Installation",
    description: "Our expert crew handles everything — formwork, reinforcement, premix delivery, placement, and finishing.",
  },
  {
    step: "04",
    icon: BadgeCheck,
    title: "Quality Sign-Off",
    description: "We do a final walk-through with you, provide aftercare instructions, and ensure you're 100% satisfied.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 lg:py-28 bg-concrete-50">
      <div className="container-xl">
        <SectionHeader
          badge="How It Works"
          title="Our Simple "
          highlight="4-Step Process"
          subtitle="Getting quality concrete work done has never been easier. Here's how we take your project from enquiry to completion."
          center
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-brand-300 to-transparent" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative text-center group">
                {/* Step circle */}
                <div className="relative inline-flex items-center justify-center mb-5">
                  <div className="w-28 h-28 rounded-full bg-white border-2 border-brand-100 flex items-center justify-center shadow-md group-hover:border-brand-500 group-hover:shadow-brand-glow transition-all duration-300">
                    <div className="flex flex-col items-center">
                      <Icon size={28} className="text-brand-600 mb-1" />
                      <span className="text-brand-300 text-xs font-bold tracking-widest">{step.step}</span>
                    </div>
                  </div>
                  {/* Arrow connector (mobile hidden) */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-brand-300">
                      ›
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-dark text-lg mb-2">{step.title}</h3>
                <p className="text-concrete-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
