import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-xl">
        <SectionHeader
          badge="Client Reviews"
          title="What Our Clients "
          highlight="Say"
          subtitle="Don't just take our word for it. Here's what Sydney's homeowners, builders and developers say about working with BINC."
          center
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative bg-concrete-50 border border-concrete-100 rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6">
                <div className="flex items-center justify-center w-8 h-8 bg-brand-600 rounded-full shadow-md">
                  <Quote size={14} className="text-white fill-white" />
                </div>
              </div>

              <div className="mt-2">
                <StarRating rating={t.rating} className="mb-4" />

                <p className="text-concrete-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-concrete-200">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-600 text-white font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-dark text-sm">{t.name}</p>
                    <p className="text-concrete-400 text-xs">{t.role} — {t.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google reviews badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-concrete-50 border border-concrete-200 rounded-full">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <span className="font-bold text-dark">4.9 / 5.0</span>
            <span className="text-concrete-400 text-sm">·</span>
            <span className="text-concrete-500 text-sm">Based on 87 Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
