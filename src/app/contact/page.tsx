import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/utils";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BINC Premix Concrete. Call 1800 246 269, email us, or fill out our contact form for a fast response from our Sydney concreting team.",
};

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: PHONE,
    href: PHONE_HREF,
    description: "Mon–Fri 6am–5pm, Sat by arrangement",
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: EMAIL_HREF,
    description: "We respond within 2 business hours",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Launceston & NSW",
    href: null,
    description: "Including Hills District, Western Sydney, Penrith and more",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri 6:00am – 5:00pm",
    href: null,
    description: "Saturday by arrangement · 24hr quote turnaround",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-pattern py-20 lg:py-24">
        <div className="absolute top-0 left-0 right-0 h-1 bg-cta-pattern" />
        <div className="container-xl text-center">
          <span className="badge bg-brand-600/20 text-brand-400 border border-brand-500/30 mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Contact <span className="text-brand-500">BINC</span>
          </h1>
          <p className="text-concrete-300 text-lg max-w-xl mx-auto">
            Have a project in mind? Questions about our services? We&apos;d love to hear from you. Our team responds within 2 business hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-5">
              <h2 className="text-2xl font-extrabold text-dark mb-6">Contact Information</h2>
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4 p-5 bg-concrete-50 border border-concrete-100 rounded-xl hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-200">
                    <div className="flex items-center justify-center w-10 h-10 bg-brand-600 rounded-lg shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-concrete-400 uppercase tracking-wider mb-0.5">{info.label}</p>
                      <p className="font-bold text-dark text-sm">{info.value}</p>
                      <p className="text-concrete-400 text-xs mt-0.5">{info.description}</p>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}

              {/* Emergency contact note */}
              <div className="bg-brand-600 rounded-xl p-5 text-white">
                <h3 className="font-bold text-base mb-1">Need Urgent Assistance?</h3>
                <p className="text-brand-100 text-sm mb-3">
                  For urgent project enquiries or time-sensitive quotes, call us directly.
                </p>
                <a href={PHONE_HREF} className="flex items-center gap-2 text-white font-bold text-lg hover:text-brand-100 transition-colors">
                  <Phone size={18} />
                  {PHONE}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
