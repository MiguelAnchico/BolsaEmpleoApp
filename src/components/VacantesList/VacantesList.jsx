import { useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";
import { useGetAllVacantesQuery } from "../../redux/api/VacanteAPI";
import Buttons from "./components/Buttons";

const VacantesList = () => {
  const { data: vacantesData, refetch } = useGetAllVacantesQuery();

  const toast = useRef(null);
  const vacantes = vacantesData?.data || [];

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />
      <DataTable value={vacantes.filter((v) => v.estado !== "No Disponible")}>
        <Column field="vacanteID" header="Código"></Column>
        <Column field="cargo" header="Cargo"></Column>
        <Column field="descripcion" header="Descripción"></Column>
        <Column field="empresa" header="Empresa"></Column>
        <Column field="salario" header="Salario"></Column>
        <Column
          body={(e) => Buttons(e, toast, refetch)}
          header="Postular"
        ></Column>
      </DataTable>
    </>
  );
};

export default VacantesList;
