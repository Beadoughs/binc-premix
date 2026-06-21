import { TESTIMONIALS } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="badge bg-brand-50 text-brand-600 border border-brand-100 mb-3">Reviews</span>
          <h2 className="section-title text-dark mb-3">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Trusted by homeowners and businesses across Launceston and Northern Tasmania.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-concrete-50 border border-concrete-100 rounded-xl p-5"
            >
              <StarRating rating={t.rating} className="mb-3" />
              <p className="text-concrete-600 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-concrete-200">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 text-white font-bold text-xs shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">{t.name}</p>
                  <p className="text-concrete-400 text-xs">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-concrete-50 border border-concrete-200 rounded-full">
            <span className="text-yellow-400 text-base">★★★★★</span>
            <span className="font-bold text-dark text-sm">4.9 / 5</span>
            <span className="text-concrete-400 text-sm">· 87 Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
