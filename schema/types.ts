// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeAmenity {
  id: string;
  amenityCategory: any[];
  availability: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  included: boolean;
  path: string;
  title: string;
}

export interface NodeAttraction {
  id: string;
  address: string;
  attractionType: any[];
  body: { value: string; summary?: string };
  distance: string;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeProperty {
  id: string;
  bathrooms: string;
  bedrooms: string;
  body: { value: string; summary?: string };
  featured: boolean;
  image: { url: string; alt: string; width: number; height: number };
  locationArea: string;
  maxGuests: string;
  nightlyRate: string;
  path: string;
  propertyFeatures: string[];
  propertyType: any[];
  title: string;
}
