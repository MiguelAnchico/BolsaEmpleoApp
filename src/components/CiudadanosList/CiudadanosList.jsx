import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  useGetCiudadanosQuery,
  useDeleteCiudadanoMutation,
} from "../../redux/api/CiudadanosAPI";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { useRef } from "react";

const CiudadanosList = () => {
  const { data, isLoading, isError, refetch } = useGetCiudadanosQuery();
  const [deleteCiudadano] = useDeleteCiudadanoMutation();
  const toast = useRef(null);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (isError) {
    return <p>Error al cargar los datos.</p>;
  }

  const ciudadanos = data?.data || [];

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />
      <DataTable value={ciudadanos}>
        <Column field="ciudadanoID" header="ID"></Column>
        <Column
          field="aspiracionSalarial"
          header="Aspiración Salarial"
        ></Column>
        <Column field="tipoDocumento" header="Tipo de Documento"></Column>
        <Column field="cedula" header="Cédula"></Column>
        <Column field="nombres" header="Nombres"></Column>
        <Column field="apellidos" header="Apellidos"></Column>
        <Column field="fechaNacimiento" header="Fecha de Nacimiento"></Column>
        <Column field="profesion" header="Profesión"></Column>
        <Column field="correoElectronico" header="Correo Electrónico"></Column>
        <Column
          body={(e) => actionBodyTemplate(e, deleteCiudadano, toast, refetch)}
          header="Acciones"
        ></Column>
      </DataTable>
    </>
  );
};

const actionBodyTemplate = (rowData, deleteCiudadano, toast, refetch) => {
  const confirmDelete = () => {
    confirmDialog({
      message: "¿Está seguro de que desea eliminar este ciudadano?",
      header: "Confirmación",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        try {
          await deleteCiudadano(rowData.ciudadanoID).unwrap();
          toast.current.show({
            severity: "success",
            summary: "Éxito",
            detail: "Ciudadano eliminado con éxito",
          });
          refetch();
        } catch (error) {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Error al eliminar ciudadano",
          });
        }
      },
      reject: () => {
        toast.current.show({
          severity: "info",
          summary: "Cancelado",
          detail: "Operación cancelada",
        });
      },
    });
  };

  return (
    <>
      <Button
        label="Eliminar"
        className="p-button-danger"
        onClick={confirmDelete}
      />
      <Link to={`/update/${rowData.ciudadanoID}`}>
        <Button label="Actualizar" className="p-button-success" />
      </Link>
    </>
  );
};

export default CiudadanosList;
