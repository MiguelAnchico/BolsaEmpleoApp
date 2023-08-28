import "./CreateCiudadanoPage.css";
import CiudadanoForm from "../../containers/CiudadanoForm/CiudadanoForm";
import { useCreateCiudadanoMutation } from "../../redux/api/CiudadanosAPI";
import { Toast } from "primereact/toast";
import { useRef } from "react";

const CreateCiudadanoPage = () => {
  const [createCiudadano] = useCreateCiudadanoMutation();
  const toast = useRef(null);

  const onSubmit = async (data) => {
    try {
      await createCiudadano(data).unwrap();
      toast.current.show({
        severity: "success",
        summary: "Éxito",
        detail: "Ciudadano creado con éxito",
      });
      setTimeout(() => {
        window.location.reload();
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
    <div className="create-ciudadano-page">
      <Toast ref={toast} />
      <h1>Crear Ciudadano</h1>
      <CiudadanoForm action="Crear" onSubmit={onSubmit} />
    </div>
  );
};

export default CreateCiudadanoPage;
