import { useParams } from "react-router-dom";
import {
  useGetCiudadanoByIdQuery,
  useUpdateCiudadanoMutation,
} from "../../redux/api/CiudadanosAPI";
import CiudadanoForm from "../../containers/CiudadanoForm/CiudadanoForm";

import "./UpdaeCiudadanoPage.css";
import { Toast } from "primereact/toast";
import { useRef } from "react";

const UpdateCiudadanoPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetCiudadanoByIdQuery(id);
  const [updateCiudadano] = useUpdateCiudadanoMutation();

  const toast = useRef(null);

  const comprobando = async (ciudadano) => {
    try {
      await updateCiudadano({ id, ciudadano });
      toast.current.show({
        severity: "success",
        summary: "Éxito",
        detail: "Ciudadano creado con éxito",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Error al crear ciudadano",
      });
    }
  };

  return (
    <div className="update-ciudadano-page">
      <Toast ref={toast} />
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Error al cargar los datos.</p>}
      {data && Object.entries(data?.data).length != 0 && (
        <CiudadanoForm
          action="Actualizar"
          initialData={data?.data}
          onSubmit={comprobando}
        />
      )}
    </div>
  );
};

export default UpdateCiudadanoPage;
