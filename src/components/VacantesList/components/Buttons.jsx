import { confirmDialog } from "primereact/confirmdialog";
import { useUpdateVacanteMutation } from "../../../redux/api/VacanteAPI";
import { useGetCiudadanosQuery } from "../../../redux/api/CiudadanosAPI";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

const Buttons = (rowData, toast, refetch) => {
  const [updateVacante] = useUpdateVacanteMutation();
  const { data: ciudadanosData } = useGetCiudadanosQuery();
  const ciudadanos = ciudadanosData?.data || [];

  const [selectedCiudadanoID, setSelectedCiudadanoID] = useState(null);
  const handlePostular = (ciudadanoID) => {
    confirmDialog({
      message: "¿Está seguro de que desea postularse para esta vacante?",
      header: "Confirmación",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        try {
          await updateVacante({
            id: rowData.vacanteID,
            vacante: {
              VacanteID: rowData.vacanteID,
              Estado: "No Disponible",
              CiudadanoID: ciudadanoID,
            },
          }).unwrap();
          toast.current.show({
            severity: "success",
            summary: "Éxito",
            detail: "Postulación exitosa",
          });
          refetch();
        } catch (error) {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Error en la postulación",
          });
        }
      },
      reject: () => {
        toast.current.show({
          severity: "info",
          summary: "Cancelado",
          detail: "Postulación cancelada",
        });
      },
    });
  };

  return (
    <>
      <Dropdown
        options={ciudadanos}
        optionLabel="nombres"
        placeholder="Seleccione un ciudadano"
        onChange={(e) => setSelectedCiudadanoID(e.value.ciudadanoID)}
        value={ciudadanos.find(
          (ciudadano) => ciudadano.ciudadanoID === selectedCiudadanoID
        )}
      />
      <Button
        label="Postular"
        className="p-button-success"
        onClick={() => handlePostular(selectedCiudadanoID)}
        disabled={selectedCiudadanoID == null}
      />
    </>
  );
};

export default Buttons;
