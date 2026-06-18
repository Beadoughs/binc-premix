"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const SERVICE_TYPES = [
  "Residential Driveway",
  "Residential Patio / Entertaining",
  "Residential Pool Surrounds",
  "Shed / Garage Slab",
  "Residential Pathways / Footpaths",
  "Commercial Floor Slab",
  "Commercial Car Park",
  "Commercial Paving / Hardstand",
  "Civil / Infrastructure Works",
  "Premix Concrete Supply Only",
  "Other",
];

const SIZE_RANGES = [
  "Under 50m²",
  "50m² – 150m²",
  "150m² – 500m²",
  "500m² – 2,000m²",
  "Over 2,000m²",
  "Not sure",
];

const TIMELINES = [
  "ASAP (within 2 weeks)",
  "1–4 weeks",
  "1–3 months",
  "3–6 months",
  "Planning stage (6+ months)",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  serviceType: string;
  projectSize: string;
  timeline: string;
  details: string;
  howFound: string;
}

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    serviceType: "",
    projectSize: "",
    timeline: "",
    details: "",
    howFound: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, serviceType: service }));
  };

  const handleSizeSelect = (size: string) => {
    setFormData((prev) => ({ ...prev, projectSize: size }));
  };

  const handleTimelineSelect = (t: string) => {
    setFormData((prev) => ({ ...prev, timeline: t }));
  };

  const canProceedStep1 = formData.serviceType !== "";
  const canProceedStep2 = formData.projectSize !== "" && formData.timeline !== "";
  const canProceedStep3 = formData.name !== "" && formData.phone !== "" && formData.email !== "" && formData.suburb !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-5">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h2 className="text-2xl font-extrabold text-dark mb-2">Quote Request Received!</h2>
        <p className="text-concrete-500 mb-2">
          Thanks, <strong>{formData.name}</strong>! We&apos;ve received your quote request and will be in touch within 24 hours.
        </p>
        <p className="text-concrete-400 text-sm">
          We&apos;ll call you on <strong>{formData.phone}</strong> to discuss your {formData.serviceType.toLowerCase()} project.
        </p>
        <div className="mt-6 p-4 bg-brand-50 rounded-xl border border-brand-100 text-left">
          <p className="text-brand-700 text-sm font-semibold mb-1">What happens next?</p>
          <ol className="text-brand-600 text-xs space-y-1 list-decimal list-inside">
            <li>We&apos;ll review your request (usually within 2 hours)</li>
            <li>A team member will call to discuss your project in detail</li>
            <li>We&apos;ll arrange a free site visit if required</li>
            <li>You&apos;ll receive a detailed fixed-price quote within 24 hours</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress bar */}
      <div className="bg-concrete-100 px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-dark">Step {step} of 3</p>
          <p className="text-xs text-concrete-400">
            {step === 1 ? "Service Type" : step === 2 ? "Project Details" : "Your Contact"}
          </p>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                s <= step ? "bg-brand-600" : "bg-concrete-200"
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 lg:p-8">
        {/* Step 1: Service type */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-extrabold text-dark mb-1">What type of project?</h2>
            <p className="text-concrete-400 text-sm mb-5">Select the service that best matches your project.</p>
            <div className="grid grid-cols-1 gap-2 max-h-80 overflow-y-auto pr-1">
              {SERVICE_TYPES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleServiceSelect(s)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left text-sm font-medium transition-all duration-150 ${
                    formData.serviceType === s
                      ? "border-brand-500 bg-brand-50 text-brand-700"
                      : "border-concrete-200 text-concrete-700 hover:border-brand-300 hover:bg-brand-50/50"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                    formData.serviceType === s ? "border-brand-500 bg-brand-500" : "border-concrete-300"
                  }`}>
                    {formData.serviceType === s && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>
                  {s}
                </button>
              ))}
            </div>
            <button
              type="button"
              disabled={!canProceedStep1}
              onClick={() => setStep(2)}
              className="btn-primary w-full justify-center mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Step 2: Project details */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-extrabold text-dark mb-1">Project details</h2>
            <p className="text-concrete-400 text-sm mb-5">Tell us more about the scale and timing.</p>

            <div className="mb-5">
              <p className="form-label">Approximate Project Size</p>
              <div className="grid grid-cols-2 gap-2">
                {SIZE_RANGES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => handleSizeSelect(size)}
                    className={`px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all duration-150 ${
                      formData.projectSize === size
                        ? "border-brand-500 bg-brand-50 text-brand-700"
                        : "border-concrete-200 text-concrete-600 hover:border-brand-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <p className="form-label">Ideal Timeline</p>
              <div className="space-y-2">
                {TIMELINES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => handleTimelineSelect(t)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left text-sm font-medium transition-all duration-150 ${
                      formData.timeline === t
                        ? "border-brand-500 bg-brand-50 text-brand-700"
                        : "border-concrete-200 text-concrete-600 hover:border-brand-300"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                      formData.timeline === t ? "border-brand-500 bg-brand-500" : "border-concrete-300"
                    }`}>
                      {formData.timeline === t && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="details" className="form-label">Project Details (Optional)</label>
              <textarea
                id="details"
                name="details"
                rows={3}
                value={formData.details}
                onChange={handleChange}
                placeholder="Any specific requirements, site access issues, or questions..."
                className="form-input resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-secondary flex-1 justify-center text-sm py-3"
              >
                Back
              </button>
              <button
                type="button"
                disabled={!canProceedStep2}
                onClick={() => setStep(3)}
                className="btn-primary flex-1 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact details */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-extrabold text-dark mb-1">Your contact details</h2>
            <p className="text-concrete-400 text-sm mb-5">Where should we send your quote?</p>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0400 000 000"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="suburb" className="form-label">Project Suburb *</label>
                <input
                  id="suburb"
                  name="suburb"
                  type="text"
                  required
                  value={formData.suburb}
                  onChange={handleChange}
                  placeholder="e.g. Kellyville NSW"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="howFound" className="form-label">How Did You Find Us?</label>
                <select
                  id="howFound"
                  name="howFound"
                  value={formData.howFound}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select one...</option>
                  <option value="google">Google Search</option>
                  <option value="referral">Word of Mouth / Referral</option>
                  <option value="facebook">Facebook / Instagram</option>
                  <option value="repeat">Returning Customer</option>
                  <option value="builder">Builder / Contractor Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-secondary flex-1 justify-center text-sm py-3"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading || !canProceedStep3}
                className="btn-primary flex-1 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>Submit Quote Request <ArrowRight size={16} /></>
                )}
              </button>
            </div>

            <p className="text-xs text-concrete-400 text-center mt-3">
              By submitting, you agree to our Privacy Policy. We never share your details.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
