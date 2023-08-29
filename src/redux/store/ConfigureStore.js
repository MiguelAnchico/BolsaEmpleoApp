import { ciudadanosApi } from "../api/CiudadanosAPI";
import { vacantesApi } from "../api/VacanteAPI";
import { CiudadanosSlice } from "../slices/CiudadanosSlice";
import { configureStore } from "@reduxjs/toolkit";
import { VacantesSlice } from "../slices/VacanteSlice";

export const store = configureStore({
  reducer: {
    [ciudadanosApi.reducerPath]: ciudadanosApi.reducer,
    [vacantesApi.reducerPath]: vacantesApi.reducer,
    ciudadanos: CiudadanosSlice.reducer,
    vacantes: VacantesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ciudadanosApi.middleware,
      vacantesApi.middleware
    ),
});
