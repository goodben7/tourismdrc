/**
 * Redux Store Configuration
 * Central store with RTK Query integration
 */

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api";
import destinationsReducer from "@/features/destinations/destinationsSlice";
import packagesReducer from "@/features/packages/packagesSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    destinations: destinationsReducer,
    packages: packagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
