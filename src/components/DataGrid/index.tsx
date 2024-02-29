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
  const {
    page,
    filteredList,
    setFilteredList,
    perPage,
    list,
    setList,
    sort,
    setSort,
    setTotalPages,
    totalPages,
    changePage,
  } = useResellers();
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
    const getSorteredList = () => {
      const sorteredList = [...list];
      sorteredList.sort((a, b) => {
        const field = sort.replace("-", "") as keyof Reseller;
        console.log("sort", field);
        if (sort.indexOf("-") !== -1) {
          return a[field].toLowerCase().localeCompare(b[field].toLowerCase());
        } else {
          return b[field].toLowerCase().localeCompare(a[field].toLowerCase());
        }
      });
      return sorteredList;
    };

    const getFilteredList = () => {
      const sorteredList = getSorteredList();
      const newList = [];
      const initial = (page - 1) * perPage;
      const final = initial + perPage;
      const total = final > list.length ? list.length : final;
      for (let i = initial; i < total; i++) {
        newList.push(sorteredList[i]);
      }
      setFilteredList(newList);
    };
    if (list.length > 0) {
      getFilteredList();
    }
  }, [sort, page, list]);

  useEffect(() => {
    const getList = async () => {
      const { data } = await axios.get("/api/resellers");
      setList(data);
      const total =
        data.length % perPage === 0
          ? data.length / perPage
          : Math.floor(data.length / perPage) + 1;
      setTotalPages(total);
    };
    getList();
  }, []);

  return (
    <div className={styles.datagrid}>
      <DataGridTitle />
      <DataGridSearch />
      <DataGridFilters />
      <DataGridHeader fields={fields} />
      <DataGridBody list={filteredList} />
      <DataGridFooter
        page={page}
        totalPages={totalPages}
        changePage={changePage}
      />
    </div>
  );
};

export default DataGrid;
