/**
 * Core TypeScript types and interfaces for Tourism DRC
 */

export type Locale = "fr" | "en";

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export interface Destination extends BaseEntity {
  slug: string;
  name: string;
  province: string;
  description: string;
  shortDescription: string;
  images: Image[];
  coverImage: Image;
  activities: string[];
  bestTimeToVisit: string;
  highlights: string[];
  packages?: Package[];
  seo: SEO;
}

export interface Package extends BaseEntity {
  slug: string;
  name: string;
  category: "safari" | "culture-heritage" | "adventure-nature" | "business-travel";
  description: string;
  shortDescription: string;
  duration: number;
  durationUnit: "days" | "hours";
  price: number;
  currency: "USD" | "EUR" | "CDF";
  images: Image[];
  coverImage: Image;
  itinerary: ItineraryDay[];
  included: string[];
  notIncluded: string[];
  destinations: string[];
  maxGroupSize?: number;
  difficulty?: "easy" | "moderate" | "challenging";
  featured: boolean;
  seo: SEO;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals?: string[];
  accommodation?: string;
}

export interface Service extends BaseEntity {
  slug: string;
  name: string;
  type: "travel-organization" | "accommodation" | "transport" | "security-assistance" | "translation" | "local-assistance";
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  image?: Image;
}

export interface BlogPost extends BaseEntity {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  coverImage: Image;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  seo: SEO;
}

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
  packageId?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface QuoteRequestData {
  name: string;
  email: string;
  phone: string;
  destination?: string;
  packageId?: string;
  numberOfPeople: number;
  startDate: string;
  endDate?: string;
  budget?: string;
  specialRequests?: string;
}

export interface BookingData extends QuoteRequestData {
  packageId: string;
  totalPrice: number;
  paymentMethod?: string;
}

export interface APIResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface FilterParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  province?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}
