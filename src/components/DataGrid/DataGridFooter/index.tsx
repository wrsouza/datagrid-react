import { FC } from "react";
import { Reseller } from "../../../pages/api/resellers";
import { Pagination } from "./Pagination";
import styles from "./styles.module.css";
interface DataGridFooterProps {
  page: number;
  totalPages: number;
  changePage: (page: number) => void;
}

export const DataGridFooter: FC<DataGridFooterProps> = (props) => {
  return (
    <div className={styles["datagrid-footer"]}>
      <span>01 - 25 de 200</span>
      <Pagination {...props} />
    </div>
  );
};
