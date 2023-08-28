import { createSlice } from "@reduxjs/toolkit";

/**
 * Estado inicial de los ciudadanos.
 */
const initialState = {
  ciudadanos: [],
  ciudadano: {},
};

/**
 * Slice para manejar el estado de los ciudadanos.
 */
export const CiudadanosSlice = createSlice({
  name: "ciudadanos",
  initialState,
  reducers: {
    /**
     * Establecer los ciudadanos en el estado.
     * @param state - Estado actual.
     * @param action - Acción con la lista de ciudadanos.
     */
    setCiudadanos: (state, action) => {
      state.ciudadanos = action.payload;
    },

    /**
     * Establecer un ciudadano en el estado.
     * @param state - Estado actual.
     * @param action - Acción con el ciudadano.
     */
    setCiudadano: (state, action) => {
      state.ciudadano = action.payload;
    },
  },
});

export const { setCiudadanos, setCiudadano } = CiudadanosSlice.actions;

export default CiudadanosSlice.reducer;
