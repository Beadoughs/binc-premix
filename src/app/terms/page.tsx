import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "BINC Premix Concrete Terms of Service.",
};

export default function TermsPage() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-xl max-w-3xl">
        <h1 className="text-4xl font-extrabold text-dark mb-2">Terms of Service</h1>
        <p className="text-concrete-400 text-sm mb-8">Last updated: June 2025</p>
        <div className="space-y-6 text-concrete-600 leading-relaxed">
          <p>
            By accessing the BINC Premix Concrete website and using our services, you agree to these Terms of Service.
          </p>
          <h2 className="text-xl font-bold text-dark">Services</h2>
          <p>
            BINC provides concreting and premix concrete supply services. All work is subject to a signed quote/contract and relevant conditions therein.
          </p>
          <h2 className="text-xl font-bold text-dark">Quotes</h2>
          <p>
            All quotes are valid for 30 days unless otherwise stated. Prices are subject to site conditions and may vary if scope changes.
          </p>
          <h2 className="text-xl font-bold text-dark">Liability</h2>
          <p>
            To the extent permitted by law, BINC&apos;s liability is limited to the value of the services provided. We are not liable for consequential or indirect damages.
          </p>
          <h2 className="text-xl font-bold text-dark">Governing Law</h2>
          <p>
            These terms are governed by the laws of New South Wales, Australia.
          </p>
          <h2 className="text-xl font-bold text-dark">Contact</h2>
          <p>
            For questions about these terms, contact us at info@bincpremix.com.au.
          </p>
        </div>
      </div>
    </section>
  );
}
