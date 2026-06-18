"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-concrete-50 border border-concrete-200 rounded-2xl p-10 text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-5">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-2xl font-extrabold text-dark mb-2">Message Sent!</h3>
        <p className="text-concrete-500 text-base max-w-sm mx-auto">
          Thanks for getting in touch. Our team will respond within 2 business hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
          className="mt-6 btn-secondary text-sm py-2.5 px-6"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-concrete-50 border border-concrete-200 rounded-2xl p-6 lg:p-8">
      <h2 className="text-2xl font-extrabold text-dark mb-2">Send Us a Message</h2>
      <p className="text-concrete-500 text-sm mb-7">
        Fill out the form below and we&apos;ll get back to you within 2 business hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
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
          <label htmlFor="subject" className="form-label">Subject *</label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select a subject...</option>
            <option value="quote">Quote Request</option>
            <option value="residential">Residential Enquiry</option>
            <option value="commercial">Commercial Enquiry</option>
            <option value="civil">Civil Enquiry</option>
            <option value="supply">Premix Supply Enquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="form-label">Message *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project — location, scope, timeline, etc."
            className="form-input resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>

        <p className="text-xs text-concrete-400 text-center">
          By submitting this form, you agree to our Privacy Policy. We never share your details.
        </p>
      </form>
    </div>
  );
}
