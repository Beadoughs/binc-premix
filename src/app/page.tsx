import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "BINC Premix Concrete | Launceston Concreting Specialists",
  description:
    "BINC Premix Concrete — quality residential and commercial concreting across Launceston and Northern Tasmania. Call 03 6331 0000.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <ProjectsShowcase />
      <Testimonials />
      <CTABanner />
    </>
  );
}
