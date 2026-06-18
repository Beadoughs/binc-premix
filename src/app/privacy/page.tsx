import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BINC Premix Concrete Privacy Policy — how we collect, use and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-xl max-w-3xl">
        <h1 className="text-4xl font-extrabold text-dark mb-2">Privacy Policy</h1>
        <p className="text-concrete-400 text-sm mb-8">Last updated: June 2025</p>
        <div className="prose prose-concrete max-w-none space-y-6 text-concrete-600 leading-relaxed">
          <p>
            BINC Premix Concrete Pty Ltd (&ldquo;BINC&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>
          <h2 className="text-xl font-bold text-dark">Information We Collect</h2>
          <p>
            We collect personal information you provide when requesting a quote, contacting us, or using our website — including your name, phone number, email address, and project details.
          </p>
          <h2 className="text-xl font-bold text-dark">How We Use Your Information</h2>
          <p>
            We use your information to respond to enquiries, provide quotes, deliver our services, and improve our website. We do not sell or share your information with third parties except as required to deliver our services or comply with law.
          </p>
          <h2 className="text-xl font-bold text-dark">Data Security</h2>
          <p>
            We take reasonable steps to protect your personal information from unauthorised access, disclosure, or misuse.
          </p>
          <h2 className="text-xl font-bold text-dark">Contact Us</h2>
          <p>
            For privacy-related enquiries, please contact us at info@bincpremix.com.au or call 1800 246 269.
          </p>
        </div>
      </div>
    </section>
  );
}
