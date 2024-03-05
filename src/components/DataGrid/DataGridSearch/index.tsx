import { ChangeEvent, ChangeEventHandler } from "react";
import { useReseller } from "../../../contexts/reseller";
import styles from "./styles.module.css";
import { FaSearch } from "react-icons/fa";

export const DataGridSearch = () => {
  const { form, setForm } = useReseller();

  function changeSearch(e: ChangeEvent<HTMLInputElement>) {
    const search = e.target.value;
    setForm((old) => ({ ...old, search }));
  }

  return (
    <div className={styles["datagrid-search"]}>
      <div className={styles["datagrid-search-form"]}>
        <FaSearch className={styles["datagrid-search-icon"]} />
        <input
          type="text"
          placeholder="Buscar"
          className={styles["datagrid-search-input"]}
          defaultValue={form.search}
          onChange={changeSearch}
          onBlur={changeSearch}
        />
      </div>
    </div>
  );
};
