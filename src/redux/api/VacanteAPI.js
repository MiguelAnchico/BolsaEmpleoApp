import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Configuración de la API de Vacantes.
 */
export const vacantesApi = createApi({
  reducerPath: "vacantesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:44310/api/v1/" }),
  endpoints: (builder) => ({
    /**
     * Obtener todas las vacantes con filtros opcionales.
     * @param filters - Filtros opcionales por PageIndex y PageSize.
     * @returns Un arreglo de vacantes.
     */
    getAllVacantes: builder.query({
      query: (filters) => ({
        url: "Vacante",
        params: filters,
      }),
    }),
    /**
     * Actualizar una vacante existente.
     * @param payload - Un objeto que contiene el ID de la vacante a actualizar y los datos actualizados de la vacante.
     */
    updateVacante: builder.mutation({
      query: ({ id, vacante }) => ({
        url: `Vacante/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: vacante,
      }),
    }),
  }),
});

/**
 * Hooks generados por el segmento de API de Vacantes.
 */
export const { useGetAllVacantesQuery, useUpdateVacanteMutation } = vacantesApi;
