import cartSlice from "@/redux/features/cart";
import filtersSlice from "@/redux/features/filters";
import { api } from "@/redux/services/api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [filtersSlice.name]: filtersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware]),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
