import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE = "03 6331 0000";
export const PHONE_HREF = "tel:0363310000";
export const EMAIL = "info@bincpremix.com.au";
export const EMAIL_HREF = "mailto:info@bincpremix.com.au";
export const ADDRESS = "Launceston, Tasmania";
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
    tagline: "Quality concrete for your home",
    description:
      "From driveways and pathways to patios and shed slabs — BINC delivers quality residential concrete work across Launceston and Northern Tasmania.",
    features: [
      "Exposed aggregate driveways",
      "Coloured & plain concrete",
      "Pathways & footpaths",
      "Patios & entertaining areas",
      "Shed & garage slabs",
      "Retaining walls",
    ],
    image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=800&q=80",
  },
  {
    slug: "commercial-concreting",
    title: "Commercial Concreting",
    shortTitle: "Commercial",
    icon: "Building2",
    tagline: "Reliable concrete for commercial projects",
    description:
      "BINC handles commercial concreting for warehouses, car parks, retail and industrial developments across Launceston and the surrounding region.",
    features: [
      "Warehouse & factory floors",
      "Car parks & hardstands",
      "Loading docks & ramps",
      "Retail & office developments",
      "Footpath & kerb construction",
      "High-strength mix design",
    ],
    image: "https://images.unsplash.com/photo-1590699168571-c7b47b55eded?w=800&q=80",
  },
  {
    slug: "civil-concreting",
    title: "Civil & Infrastructure",
    shortTitle: "Civil",
    icon: "Truck",
    tagline: "Concrete solutions for civil projects",
    description:
      "Civil concrete works for roads, drainage, kerbing and public infrastructure — meeting council and government specifications throughout Northern Tasmania.",
    features: [
      "Road construction & kerbing",
      "Drainage & culverts",
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
      "We supply premium premix concrete in a full range of strengths and mixes — delivered directly to your site across Launceston and Northern Tasmania.",
    features: [
      "All strength grades (20MPa – 65MPa)",
      "Exposed aggregate mixes",
      "Coloured concrete supply",
      "Fibre-reinforced concrete",
      "Pump-mix concrete",
      "High-early-strength mixes",
    ],
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
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
    company: "Launceston, TAS",
    rating: 5,
    text: "BINC delivered our warehouse slab on time and within budget. Professional team, great finish. Won't use anyone else.",
  },
  {
    name: "Sarah K.",
    role: "Homeowner",
    company: "Norwood, TAS",
    rating: 5,
    text: "Had BINC do our driveway and patio. The result looks amazing and they cleaned up perfectly. Highly recommend to anyone in Launceston.",
  },
  {
    name: "Jason P.",
    role: "Site Manager",
    company: "TasCivil Pty Ltd",
    rating: 5,
    text: "Used BINC on multiple civil projects. They understand specs, hit program dates, and the quality is always excellent.",
  },
  {
    name: "Amanda R.",
    role: "Builder",
    company: "Northern Tas Constructions",
    rating: 5,
    text: "Fast quote, fair pricing and great workmanship. BINC handled all the concrete on our duplex development without a hitch.",
  },
];
