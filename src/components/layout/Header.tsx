"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn, NAV_LINKS, PHONE, PHONE_HREF } from "@/lib/utils";

const SERVICES_DROPDOWN = [
  { label: "Residential Concreting", href: "/services/residential-concreting" },
  { label: "Commercial Concreting", href: "/services/commercial-concreting" },
  { label: "Civil & Infrastructure", href: "/services/civil-concreting" },
  { label: "Premix Concrete Supply", href: "/services/premix-concrete-supply" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Main nav */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        )}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="flex items-center justify-center w-10 h-10 bg-brand-600 rounded-lg">
                <span className="text-white font-black text-lg leading-none">B</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-xl text-dark tracking-tight uppercase">BINC</span>
                <span className="text-xs text-concrete-500 font-medium -mt-0.5 tracking-widest uppercase">Premix Concrete</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.label === "Services" ? (
                  <div
                    key="services"
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-150",
                        isActive("/services")
                          ? "text-brand-600 bg-brand-50"
                          : "text-concrete-700 hover:text-brand-600 hover:bg-brand-50"
                      )}
                    >
                      Services
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-concrete-100 overflow-hidden z-50 py-1">
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-sm font-semibold text-concrete-700 hover:bg-brand-50 hover:text-brand-600 transition-colors border-b border-concrete-100 mb-1"
                        >
                          All Services
                        </Link>
                        {SERVICES_DROPDOWN.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={cn(
                              "block px-4 py-2 text-sm transition-colors",
                              isActive(s.href)
                                ? "text-brand-600 bg-brand-50 font-semibold"
                                : "text-concrete-600 hover:bg-brand-50 hover:text-brand-600"
                            )}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-150",
                      isActive(link.href)
                        ? "text-brand-600 bg-brand-50"
                        : "text-concrete-700 hover:text-brand-600 hover:bg-brand-50"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href={PHONE_HREF}
                className="btn-primary text-sm py-2.5 px-5 gap-2"
              >
                <Phone size={14} />
                {PHONE}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-concrete-700 hover:bg-concrete-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl flex flex-col">
            {/* Mobile header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-concrete-100">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center w-9 h-9 bg-brand-600 rounded-lg">
                  <span className="text-white font-black text-base">B</span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-black text-lg text-dark uppercase">BINC</span>
                  <span className="text-xs text-concrete-500 -mt-0.5 uppercase tracking-widest">Premix Concrete</span>
                </div>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-concrete-100 transition-colors"
              >
                <X size={20} className="text-concrete-600" />
              </button>
            </div>

            {/* Mobile links */}
            <nav className="flex-1 overflow-y-auto py-4 px-4">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-colors mb-1",
                      isActive(link.href)
                        ? "text-brand-600 bg-brand-50"
                        : "text-concrete-700 hover:bg-concrete-50"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.label === "Services" && (
                    <div className="ml-4 mb-2 space-y-1">
                      {SERVICES_DROPDOWN.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2 text-sm text-concrete-500 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="px-4 py-5 border-t border-concrete-100">
              <a href={PHONE_HREF} className="btn-primary w-full justify-center text-base gap-2">
                <Phone size={16} />
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
