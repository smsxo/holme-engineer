import type { LucideIcon } from "lucide-react";

// ─── Company ────────────────────────────────────────────────

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  founded: string;
  email: string;
  phone: string;
  address: string;
  social: {
    linkedin: string;
  };
}

// ─── Navigation ─────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Consulting / Marine ────────────────────────────────────

export interface MarineService {
  title: string;
  description: string;
  icon: LucideIcon;
  relatedServiceSlugs?: string[];
}

// ─── R&D / ESS Solutions ────────────────────────────────────

export interface ESSSolution {
  title: string;
  description: string;
  icon: LucideIcon;
  relatedServiceSlug?: string;
}

// ─── Services ───────────────────────────────────────────────

export type ServiceCategory = "marine" | "ess" | "software";

export interface ServiceKeyMetric {
  label: string;
  value: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  detailedDescription: string;
  developerContext: string;
  systemContext: string;
  visualCues: string[];
  category: ServiceCategory;
  features: string[];
  keyMetrics: ServiceKeyMetric[];
  relatedSlugs: string[];
  icon: LucideIcon;
}

// ─── Industries ─────────────────────────────────────────────

export interface Industry {
  title: string;
  description: string;
  icon: LucideIcon;
  relevantSlugs: string[];
}

// ─── Projects ───────────────────────────────────────────────

export interface Project {
  title: string;
  category: string;
  description: string;
  specs: string[];
  image: string;
  relevantSlugs: string[];
}

// ─── Values ─────────────────────────────────────────────────

export interface CompanyValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

// ─── Careers ────────────────────────────────────────────────

export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

// ─── Testimonials ───────────────────────────────────────────

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}
