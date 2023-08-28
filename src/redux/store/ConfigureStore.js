import { ciudadanosApi } from "../api/CiudadanosAPI";
import { CiudadanosSlice } from "../slices/CiudadanosSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [ciudadanosApi.reducerPath]: ciudadanosApi.reducer,
    ciudadanos: CiudadanosSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ciudadanosApi.middleware),
});
