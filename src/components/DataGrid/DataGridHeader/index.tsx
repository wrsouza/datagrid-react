import { Dispatch, FC, SetStateAction } from "react";
import styles from "./styles.module.css";
import { GridCell } from "./GridCell";
import { IResellerFilters, useReseller } from "../../../contexts/reseller";
import { IReseller } from "../../../pages/api/resellers";
import { GridCellSelect } from "./GridCellSelect";

export interface IGridCell {
  fieldName: string;
  field: keyof IReseller;
}

export interface IGridCellSelect {
  fieldName: string;
  field: keyof IResellerFilters;
  list: string[];
}

export const DataGridHeader: FC = () => {
  const { filters, setFilters } = useReseller();

  const gridCellList: IGridCell[] = [
    {
      fieldName: "Nombre",
      field: "name",
    },
    {
      fieldName: "Teléfono",
      field: "phone",
    },
    {
      fieldName: "Fecha de registro",
      field: "createdAt",
    },
  ];

  const gridCellSelectList: IGridCellSelect[] = [
    {
      fieldName: "Aceptación de Termos",
      field: "selectedAcceptanceOfTerms",
      list: ["-", "Pendiente", "No aceptado", "Aceptado", "Dados eliminados"],
    },
    {
      fieldName: "Biometria",
      field: "selectedBiometrics",
      list: ["-", "Pendiente", "Completo", "No es elegible"],
    },
    {
      fieldName: "Situación",
      field: "selectedStatus",
      list: [
        "-",
        "Pendiente",
        "Em revisón",
        "Completo",
        "Em transasón",
        "Recadastro",
      ],
    },
  ];

  return (
    <div className={styles["datagrid-header"]}>
      {gridCellList.map((item) => (
        <GridCell
          key={item.field}
          {...item}
          filters={filters}
          setFilters={setFilters}
        />
      ))}
      {gridCellSelectList.map((item) => (
        <GridCellSelect
          key={item.field}
          {...item}
          filters={filters}
          setFilters={setFilters}
        />
      ))}
    </div>
  );
};
