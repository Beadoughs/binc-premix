import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, NAV_LINKS, SERVICES } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      {/* Main footer */}
      <div className="container-xl py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="flex items-center justify-center w-10 h-10 bg-brand-600 rounded-lg">
                <span className="text-white font-black text-lg">B</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-xl text-white uppercase">BINC</span>
                <span className="text-xs text-concrete-400 -mt-0.5 uppercase tracking-widest">Premix Concrete</span>
              </div>
            </Link>
            <p className="text-concrete-400 text-sm leading-relaxed mb-5">
              Launceston&apos;s trusted premix concrete specialist for residential, commercial, and civil projects across Northern Tasmania.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-dark-700 hover:bg-brand-600 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-dark-700 hover:bg-brand-600 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-dark-700 hover:bg-brand-600 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Our Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-2 text-concrete-400 hover:text-brand-400 text-sm transition-colors group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-500" />
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/quote"
                  className="flex items-center gap-2 text-brand-400 hover:text-brand-300 text-sm font-semibold transition-colors mt-1"
                >
                  <ArrowRight size={12} />
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-concrete-400 hover:text-brand-400 text-sm transition-colors group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-dark-700">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-3">Licences</h3>
              <p className="text-concrete-400 text-xs leading-relaxed">
                NSW Building Licence: BL 123456<br />
                Public Liability: $20M<br />
                WorkCover Insured
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={PHONE_HREF} className="flex items-start gap-3 group">
                  <div className="flex items-center justify-center w-8 h-8 bg-brand-600/20 rounded-lg mt-0.5 shrink-0 group-hover:bg-brand-600 transition-colors">
                    <Phone size={14} className="text-brand-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-concrete-500 uppercase tracking-wider">Phone</p>
                    <span className="text-white font-semibold text-sm group-hover:text-brand-400 transition-colors">{PHONE}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="flex items-start gap-3 group">
                  <div className="flex items-center justify-center w-8 h-8 bg-brand-600/20 rounded-lg mt-0.5 shrink-0 group-hover:bg-brand-600 transition-colors">
                    <Mail size={14} className="text-brand-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-concrete-500 uppercase tracking-wider">Email</p>
                    <span className="text-white text-sm group-hover:text-brand-400 transition-colors">{EMAIL}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-brand-600/20 rounded-lg mt-0.5 shrink-0">
                    <MapPin size={14} className="text-brand-400" />
                  </div>
                  <div>
                    <p className="text-xs text-concrete-500 uppercase tracking-wider">Service Area</p>
                    <span className="text-white text-sm">Launceston & Northern Tasmania</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-brand-600/20 rounded-lg mt-0.5 shrink-0">
                    <Clock size={14} className="text-brand-400" />
                  </div>
                  <div>
                    <p className="text-xs text-concrete-500 uppercase tracking-wider">Hours</p>
                    <span className="text-white text-sm">Mon–Fri 6am–5pm</span>
                    <br />
                    <span className="text-concrete-400 text-xs">Sat by arrangement</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-700">
        <div className="container-xl py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-concrete-500">
          <p>
            © {year} BINC Premix Concrete Pty Ltd. All rights reserved. ABN: 12 345 678 901
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-concrete-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-concrete-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-concrete-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
