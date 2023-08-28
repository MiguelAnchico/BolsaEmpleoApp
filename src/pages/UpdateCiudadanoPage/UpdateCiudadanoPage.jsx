import { useParams } from "react-router-dom";
import {
  useGetCiudadanoByIdQuery,
  useUpdateCiudadanoMutation,
} from "../../redux/api/CiudadanosAPI";
import CiudadanoForm from "../../containers/CiudadanoForm/CiudadanoForm";

import "./UpdaeCiudadanoPage.css";

const UpdateCiudadanoPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetCiudadanoByIdQuery(id);
  const [updateCiudadano] = useUpdateCiudadanoMutation();

  const comprobando = (ciudadano) => {
    console.log(ciudadano);
    updateCiudadano(id, ciudadano);
  };

  return (
    <div className="update-ciudadano-page">
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Error al cargar los datos.</p>}
      {data && Object.entries(data?.data).length != 0 && (
        <CiudadanoForm initialData={data?.data} onSubmit={comprobando} />
      )}
    </div>
  );
};

export default UpdateCiudadanoPage;
