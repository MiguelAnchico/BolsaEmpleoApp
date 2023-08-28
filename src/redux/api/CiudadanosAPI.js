import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Configuración de la API de Ciudadanos.
 */
export const ciudadanosApi = createApi({
  reducerPath: "ciudadanosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:44310/api/v1/" }),
  endpoints: (builder) => ({
    /**
     * Obtener todos los ciudadanos con filtros opcionales.
     * @param filters - Filtros opcionales por PageIndex, PageSize, Nombres o Cedula.
     * @returns Un arreglo de ciudadanos.
     */
    getCiudadanos: builder.query({
      query: (filters) => ({
        url: "Ciudadano",
        params: filters,
      }),
    }),
    /**
     * Obtener un ciudadano por ID.
     * @param id - El ID del ciudadano a obtener.
     * @returns El ciudadano obtenido.
     */
    getCiudadanoById: builder.query({
      query: (id) => `Ciudadano/${id}`,
    }),
    /**
     * Crear un nuevo ciudadano.
     * @param newCiudadano - El ciudadano a crear.
     * @returns El ciudadano creado.
     */
    createCiudadano: builder.mutation({
      query: (newCiudadano) => ({
        url: "Ciudadano",
        method: "POST",
        body: newCiudadano,
      }),
    }),
    /**
     * Actualizar un ciudadano existente.
     * @param payload - Un objeto que contiene el ID del ciudadano a actualizar y los datos actualizados del ciudadano.
     */
    updateCiudadano: builder.mutation({
      query: (id, ciudadano) => ({
        url: `Ciudadano/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: ciudadano,
      }),
    }),
    /**
     * Eliminar un ciudadano por ID.
     * @param id - El ID del ciudadano a eliminar.
     */
    deleteCiudadano: builder.mutation({
      query: (id) => ({
        url: `Ciudadano/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

/**
 * Hooks generados por el segmento de API de Ciudadanos.
 */
export const {
  useGetCiudadanosQuery,
  useGetCiudadanoByIdQuery,
  useCreateCiudadanoMutation,
  useUpdateCiudadanoMutation,
  useDeleteCiudadanoMutation,
} = ciudadanosApi;
