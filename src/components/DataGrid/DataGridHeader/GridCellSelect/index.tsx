import { Dispatch, FC, SetStateAction, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from "./styles.module.css";
import { IResellerFilters } from "../../../../contexts/reseller";
import { IGridCellSelect } from "..";

interface IGridCellSelectProps extends IGridCellSelect {
  filters: IResellerFilters;
  setFilters: Dispatch<SetStateAction<IResellerFilters>>;
}

export const GridCellSelect: FC<IGridCellSelectProps> = ({
  list,
  filters,
  setFilters,
  field,
  fieldName,
}) => {
  const [active, setActive] = useState<boolean>(false);

  function toggleActive() {
    setActive(!active);
  }

  function changeSelected(value: string) {
    setFilters((old) => ({
      ...old,
      page: 1,
      [field]: value !== "-" ? value : "",
    }));
    toggleActive();
  }

  return (
    <div className={styles["grid-cell"]}>
      <div className={styles["grid-cell-container"]} onClick={toggleActive}>
        <span className={styles["grid-cell-container-name"]}>{fieldName}</span>
        <div className={styles["grid-cell-container-icons"]}>
          <FaAngleDown />
        </div>
      </div>
      <div
        onClick={() => toggleActive()}
        className={
          active
            ? styles["grid-cell-popup-bg-active"]
            : styles["grid-cell-filter-popup-bg"]
        }
      ></div>
      <div
        className={
          active ? styles["grid-cell-popup-active"] : styles["grid-cell-popup"]
        }
      >
        <ul>
          {list?.map((value) => (
            <li
              key={value}
              onClick={() => changeSelected(value)}
              className={value === filters[field] ? styles.active : ""}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
