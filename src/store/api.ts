/**
 * RTK Query Base API Configuration
 * Central API service for all endpoints
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Destination,
  Package,
  BlogPost,
  Service,
  ContactFormData,
  QuoteRequestData,
  BookingData,
  APIResponse,
  PaginatedResponse,
  FilterParams,
} from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Destinations", "Packages", "BlogPosts", "Services"],
  endpoints: (builder) => ({
    // Destinations endpoints
    getDestinations: builder.query<PaginatedResponse<Destination>, FilterParams | void>({
      query: (params) => ({
        url: "/destinations",
        params: params || undefined,
      }),
      providesTags: ["Destinations"],
    }),

    getDestinationBySlug: builder.query<APIResponse<Destination>, string>({
      query: (slug) => `/destinations/${slug}`,
      providesTags: (_result, _error, slug) => [{ type: "Destinations", id: slug }],
    }),

    // Packages endpoints
    getPackages: builder.query<PaginatedResponse<Package>, FilterParams | void>({
      query: (params) => ({
        url: "/packages",
        params: params || undefined,
      }),
      providesTags: ["Packages"],
    }),

    getPackageBySlug: builder.query<APIResponse<Package>, string>({
      query: (slug) => `/packages/${slug}`,
      providesTags: (_result, _error, slug) => [{ type: "Packages", id: slug }],
    }),

    getFeaturedPackages: builder.query<APIResponse<Package[]>, void>({
      query: () => "/packages/featured",
      providesTags: ["Packages"],
    }),

    // Services endpoints
    getServices: builder.query<APIResponse<Service[]>, void>({
      query: () => "/services",
      providesTags: ["Services"],
    }),

    getServiceBySlug: builder.query<APIResponse<Service>, string>({
      query: (slug) => `/services/${slug}`,
      providesTags: (_result, _error, slug) => [{ type: "Services", id: slug }],
    }),

    // Blog endpoints
    getBlogPosts: builder.query<PaginatedResponse<BlogPost>, FilterParams | void>({
      query: (params) => ({
        url: "/blog",
        params: params || undefined,
      }),
      providesTags: ["BlogPosts"],
    }),

    getBlogPostBySlug: builder.query<APIResponse<BlogPost>, string>({
      query: (slug) => `/blog/${slug}`,
      providesTags: (_result, _error, slug) => [{ type: "BlogPosts", id: slug }],
    }),

    // Form submissions
    submitContact: builder.mutation<APIResponse<void>, ContactFormData>({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),

    submitQuoteRequest: builder.mutation<APIResponse<void>, QuoteRequestData>({
      query: (data) => ({
        url: "/quote-request",
        method: "POST",
        body: data,
      }),
    }),

    submitBooking: builder.mutation<APIResponse<{ bookingId: string }>, BookingData>({
      query: (data) => ({
        url: "/booking",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetDestinationsQuery,
  useGetDestinationBySlugQuery,
  useGetPackagesQuery,
  useGetPackageBySlugQuery,
  useGetFeaturedPackagesQuery,
  useGetServicesQuery,
  useGetServiceBySlugQuery,
  useGetBlogPostsQuery,
  useGetBlogPostBySlugQuery,
  useSubmitContactMutation,
  useSubmitQuoteRequestMutation,
  useSubmitBookingMutation,
} = api;
