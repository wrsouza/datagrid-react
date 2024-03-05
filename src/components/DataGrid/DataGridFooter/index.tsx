import { FC } from "react";

import { Pagination } from "./Pagination";
import styles from "./styles.module.css";
import { useReseller } from "../../../contexts/reseller";

export const DataGridFooter: FC = () => {
  const { totalFiltered, filters, setFilters, perPage, totalPages } =
    useReseller();

  function getInicial() {
    return (filters.page - 1) * perPage + 1;
  }
  function getFinal() {
    const inicial = getInicial();
    return inicial + perPage > totalFiltered
      ? totalFiltered
      : inicial + perPage;
  }

  return (
    <div className={styles["datagrid-footer"]}>
      <span>
        {getInicial()} - {getFinal()} de {totalFiltered}
      </span>
      <Pagination
        page={filters.page}
        totalPages={totalPages}
        changePage={(page) => setFilters((old) => ({ ...old, page }))}
      />
    </div>
  );
};
