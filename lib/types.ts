
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

export interface DrupalArticle extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
}

export interface ArticleTeaserData {
  nodeArticles: {
    nodes: DrupalArticle[]
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalTermRef {
  name: string
}

export interface DrupalStatItem {
  id: string
  number?: string
  label?: string
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  featuredItemsTitle?: string
  statsItems?: DrupalStatItem[]
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'

export interface DrupalProperty {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  propertyType?: DrupalTermRef[]
  nightlyRate?: string
  bedrooms?: string
  bathrooms?: string
  maxGuests?: string
  propertyFeatures?: string[]
  locationArea?: string
  image?: DrupalImage
  featured?: boolean
}

export interface PropertiesData {
  nodeProperties: {
    nodes: DrupalProperty[]
  }
}

export interface DrupalAmenity {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  amenityCategory?: DrupalTermRef[]
  availability?: string
  included?: boolean
  image?: DrupalImage
}

export interface AmenitiesData {
  nodeAmenities: {
    nodes: DrupalAmenity[]
  }
}

export interface DrupalAttraction {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  attractionType?: DrupalTermRef[]
  distance?: string
  address?: string
  image?: DrupalImage
}

export interface AttractionsData {
  nodeAttractions: {
    nodes: DrupalAttraction[]
  }
}
