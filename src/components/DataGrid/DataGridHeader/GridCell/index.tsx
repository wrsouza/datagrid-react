import { Dispatch, FC, SetStateAction, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from "./styles.module.css";
import { IResellerFilters } from "../../../../contexts/reseller";
import { IReseller } from "../../../../pages/api/resellers";
import { IGridCell } from "..";

interface GridCellProps extends IGridCell {
  filters: IResellerFilters;
  setFilters: Dispatch<SetStateAction<IResellerFilters>>;
}

export const GridCell: FC<GridCellProps> = ({
  field,
  fieldName,
  filters,
  setFilters,
}) => {
  function changeSort() {
    if (filters.sort.indexOf("-") === -1) {
      setFilters((old) => ({ ...old, sort: `-${field}` }));
    } else {
      setFilters((old) => ({ ...old, sort: field }));
    }
  }

  return (
    <div className={styles["grid-cell"]}>
      <div className={styles["grid-cell-container"]} onClick={changeSort}>
        <span className={styles["grid-cell-container-name"]}>{fieldName}</span>
        <div className={styles["grid-cell-container-icons"]}>
          <FaAngleUp
            className={
              filters.sort === field
                ? styles["grid-cell-container-icon-active"]
                : ""
            }
          />
          <FaAngleDown
            className={
              filters.sort === `-${field}`
                ? styles["grid-cell-container-icon-active"]
                : ""
            }
          />
        </div>
      </div>
    </div>
  );
};
