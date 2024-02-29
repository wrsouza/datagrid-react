import styles from "./styles.module.css";

import { DataGridTitle } from "./DataGridTitle";
import { DataGridSearch } from "./DataGridSearch";
import { DataGridFilters } from "./DataGridFilters";
import { DataGridBody } from "./DataGridBody";
import { DataGridFooter } from "./DataGridFooter";
import { DataGridHeader } from "./DataGridHeader";
import { useEffect, useState } from "react";
import { Reseller } from "../../pages/api/resellers";
import axios from "axios";
import { useResellers } from "../../hooks/resellers.hook";

const DataGrid = () => {
  const { list, setList, sort, setSort } = useResellers();
  const [selected, setSelected] = useState<string>("");
  const fields = [
    {
      fieldName: "Nombre",
      field: "name",
      sort,
      setSort,
      list: [],
      selected,
      setSelected,
    },
    {
      fieldName: "Teléfono",
      field: "phone",
      sort,
      setSort,
      list: [],
      selected,
      setSelected,
    },
    {
      fieldName: "Fecha de registro",
      field: "createdAt",
      sort,
      setSort,
      list: [],
      selected,
      setSelected,
    },
    {
      fieldName: "Aceptación de Termos",
      field: "acceptanceOfTerms",
      sort,
      setSort,
      list: ["-", "Pendiente", "No aceptado", "Aceptado", "Dados eliminados"],
      selected,
      setSelected,
    },
    {
      fieldName: "Biometria",
      field: "biometrics",
      sort,
      setSort,
      list: ["-", "Pendiente", "Completo", "No es elegible"],
      selected,
      setSelected,
    },
    {
      fieldName: "Situación",
      field: "status",
      sort,
      setSort,
      list: [
        "-",
        "Pendiente",
        "Em revisón",
        "Completo",
        "Em transasón",
        "Recadastro",
      ],
      selected,
      setSelected,
    },
  ];

  useEffect(() => {
    const getList = async () => {
      const { data } = await axios.get("/api/resellers");
      setList(data);
    };

    getList();
  }, []);

  return (
    <div className={styles.datagrid}>
      <DataGridTitle />
      <DataGridSearch />
      <DataGridFilters />
      <DataGridHeader fields={fields} />
      <DataGridBody list={list} />
      <DataGridFooter />
    </div>
  );
};

export default DataGrid;
