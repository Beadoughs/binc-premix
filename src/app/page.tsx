import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "BINC Premix Concrete | Sydney's Trusted Concreting Specialists",
  description:
    "BINC Premix Concrete — Sydney's premium concreting contractor for residential, commercial and civil projects. Expert premix supply, professional placement. Call 1800 246 269 for a free quote.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <CTABanner
        title="Need a Concrete Quote Fast?"
        subtitle="Our team provides free, detailed quotes within 24 hours. No obligation, no pressure — just honest pricing from Launceston's trusted concreting specialists."
      />
      <ProjectsShowcase />
      <ProcessSteps />
      <Testimonials />
      <CTABanner />
    </>
  );
}
