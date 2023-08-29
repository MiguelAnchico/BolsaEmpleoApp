import { createSlice } from "@reduxjs/toolkit";

/**
 * Estado inicial de las vacantes.
 */
const initialState = {
  vacantes: [],
};

/**
 * Slice para manejar el estado de las vacantes.
 */
export const VacantesSlice = createSlice({
  name: "vacantes",
  initialState,
  reducers: {
    /**
     * Establecer las vacantes en el estado.
     * @param state - Estado actual.
     * @param action - Acción con la lista de vacantes.
     */
    setVacantes: (state, action) => {
      state.vacantes = action.payload;
    },
  },
});

export const { setVacantes } = VacantesSlice.actions;

export default VacantesSlice.reducer;
