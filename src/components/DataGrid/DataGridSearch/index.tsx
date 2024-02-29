import styles from "./styles.module.css";
import { FaSearch } from "react-icons/fa";

export const DataGridSearch = () => {
  return (
    <div className={styles["datagrid-search"]}>
      <form className={styles["datagrid-search-form"]}>
        <FaSearch className={styles["datagrid-search-icon"]} />
        <input
          type="text"
          placeholder="Buscar"
          className={styles["datagrid-search-input"]}
        />
      </form>
    </div>
  );
};
