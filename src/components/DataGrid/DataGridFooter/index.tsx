import { Pagination } from "./Pagination";
import styles from "./styles.module.css";

export const DataGridFooter = () => {
  return (
    <div className={styles["datagrid-footer"]}>
      <span>01 - 25 de 200</span>
      <Pagination />
    </div>
  );
};
