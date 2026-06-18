import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE = "1800 246 269";
export const PHONE_HREF = "tel:1800246269";
export const EMAIL = "info@bincpremix.com.au";
export const EMAIL_HREF = "mailto:info@bincpremix.com.au";
export const ADDRESS = "Serving Greater Sydney, NSW & Surrounding Regions";
export const ABN = "ABN: 12 345 678 901";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    slug: "residential-concreting",
    title: "Residential Concreting",
    shortTitle: "Residential",
    icon: "Home",
    tagline: "Premium concrete solutions for your home",
    description:
      "From driveways and pathways to patios, pool surrounds and shed slabs — BINC delivers flawless residential concrete work that enhances your property's value and kerb appeal.",
    features: [
      "Exposed aggregate driveways",
      "Coloured & decorative concrete",
      "Pathways & footpaths",
      "Patios & entertaining areas",
      "Pool surrounds & coping",
      "Shed & garage slabs",
      "Retaining walls",
      "Stencil concrete",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    slug: "commercial-concreting",
    title: "Commercial Concreting",
    shortTitle: "Commercial",
    icon: "Building2",
    tagline: "Industrial-grade concrete for commercial projects",
    description:
      "BINC handles large-scale commercial concreting for warehouses, car parks, retail precincts, and office developments. We deliver on time, on spec, and on budget.",
    features: [
      "Warehouse & factory floors",
      "Car parks & hardstands",
      "Loading docks & ramps",
      "Tilt-up slab preparation",
      "Retail & office developments",
      "Footpath & kerb construction",
      "Concrete paving",
      "High-strength mix design",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    slug: "civil-concreting",
    title: "Civil & Infrastructure",
    shortTitle: "Civil",
    icon: "Truck",
    tagline: "Engineered solutions for infrastructure projects",
    description:
      "Our civil division delivers engineered concrete solutions for roads, bridges, drainage, and public infrastructure — meeting council and government specifications.",
    features: [
      "Road construction & kerbing",
      "Drainage & culverts",
      "Footbridges & structures",
      "Retaining structures",
      "Council & government projects",
      "Earthworks & sub-base",
      "Stormwater infrastructure",
      "Subdivision development",
    ],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  },
  {
    slug: "premix-concrete-supply",
    title: "Premix Concrete Supply",
    shortTitle: "Premix Supply",
    icon: "Cylinder",
    tagline: "Quality premix concrete delivered to site",
    description:
      "We supply premium premix concrete in a full range of strengths and mixes — delivered directly to your site anywhere in Greater Sydney and surrounds.",
    features: [
      "All strength grades (20MPa – 65MPa)",
      "Exposed aggregate mixes",
      "Coloured concrete supply",
      "Fibre-reinforced concrete",
      "Pump-mix concrete",
      "Self-compacting concrete",
      "High-early-strength mixes",
      "Eco & recycled aggregate options",
    ],
    image: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?w=800&q=80",
  },
];

export const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24hr", label: "Quote Turnaround" },
];

export const TESTIMONIALS = [
  {
    name: "Michael T.",
    role: "Property Developer",
    company: "Harrington Developments",
    rating: 5,
    text: "BINC delivered our 3,000sqm warehouse slab on time and within budget. The team was professional, the finish was immaculate, and their project management was second to none. Would not hesitate to use them again.",
  },
  {
    name: "Sarah K.",
    role: "Homeowner",
    company: "Kellyville, NSW",
    rating: 5,
    text: "We had BINC pour our exposed aggregate driveway, patio and pool surrounds. The result is absolutely stunning. They were on time, cleaned up perfectly, and the quality exceeded our expectations. Highly recommend!",
  },
  {
    name: "Jason P.",
    role: "Site Manager",
    company: "BlueStar Civil",
    rating: 5,
    text: "We've used BINC on three civil projects now. Their team understands specs, hits program dates, and the work quality is consistently excellent. Our go-to concreter for anything in the Sydney metro area.",
  },
  {
    name: "Amanda R.",
    role: "Builder",
    company: "Renova Constructions",
    rating: 5,
    text: "Fast quote, competitive pricing, and top-quality workmanship. BINC did all the concrete for our residential duplex development and it was seamless from start to finish.",
  },
];
