/**
 * Destinations Redux Slice
 * Manages destinations state and filters
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { FilterParams } from "@/types";

interface DestinationsState {
  filters: FilterParams;
  selectedProvince: string | null;
  viewMode: "grid" | "list";
}

const initialState: DestinationsState = {
  filters: {
    page: 1,
    limit: 12,
    sortBy: "name",
    sortOrder: "asc",
  },
  selectedProvince: null,
  viewMode: "grid",
};

const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FilterParams>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setProvince: (state, action: PayloadAction<string | null>) => {
      state.selectedProvince = action.payload;
      state.filters.province = action.payload || undefined;
      state.filters.page = 1;
    },
    setViewMode: (state, action: PayloadAction<"grid" | "list">) => {
      state.viewMode = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.selectedProvince = null;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.filters.page = action.payload;
    },
  },
});

export const { setFilters, setProvince, setViewMode, resetFilters, setPage } =
  destinationsSlice.actions;

export default destinationsSlice.reducer;
