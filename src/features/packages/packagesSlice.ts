/**
 * Packages Redux Slice
 * Manages packages state and filters
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { FilterParams } from "@/types";

interface PackagesState {
  filters: FilterParams;
  selectedCategory: string | null;
  priceRange: [number, number];
  viewMode: "grid" | "list";
}

const initialState: PackagesState = {
  filters: {
    page: 1,
    limit: 12,
    sortBy: "featured",
    sortOrder: "desc",
  },
  selectedCategory: null,
  priceRange: [0, 10000],
  viewMode: "grid",
};

const packagesSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FilterParams>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
      state.filters.category = action.payload || undefined;
      state.filters.page = 1;
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
      state.filters.minPrice = action.payload[0];
      state.filters.maxPrice = action.payload[1];
      state.filters.page = 1;
    },
    setViewMode: (state, action: PayloadAction<"grid" | "list">) => {
      state.viewMode = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.selectedCategory = null;
      state.priceRange = initialState.priceRange;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.filters.page = action.payload;
    },
  },
});

export const {
  setFilters,
  setCategory,
  setPriceRange,
  setViewMode,
  resetFilters,
  setPage,
} = packagesSlice.actions;

export default packagesSlice.reducer;
