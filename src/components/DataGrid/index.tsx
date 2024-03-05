import styles from "./styles.module.css";

import { DataGridTitle } from "./DataGridTitle";
import { DataGridSearch } from "./DataGridSearch";
import { DataGridFilters } from "./DataGridFilters";
import { DataGridBody } from "./DataGridBody";
import { DataGridFooter } from "./DataGridFooter";
import { DataGridHeader } from "./DataGridHeader";

const DataGrid = () => {
  return (
    <div className={styles.datagrid}>
      <DataGridTitle />
      <DataGridSearch />
      <DataGridFilters />
      <DataGridHeader />
      <DataGridBody />
      <DataGridFooter />
    </div>
  );
};

export default DataGrid;
