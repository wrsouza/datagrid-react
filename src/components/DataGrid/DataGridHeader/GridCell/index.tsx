import { Dispatch, FC, SetStateAction, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from "./styles.module.css";

interface GridCellProps {
  list: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  field: string;
  fieldName: string;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
}

export const GridCell: FC<GridCellProps> = ({
  list,
  selected,
  setSelected,
  field,
  fieldName,
  sort,
  setSort,
}) => {
  const [active, setActive] = useState<boolean>(false);

  function changeSort() {
    if (sort.indexOf("-") === -1) {
      setSort(`-${field}`);
      console.log(`-${field}`);
    } else {
      setSort(field);
      console.log(field);
    }
  }

  function toggleActive() {
    setActive(!active);
  }

  function changeSelected(item: string) {
    setSelected(item);
    toggleActive();
  }

  return (
    <div className={styles["grid-cell"]}>
      <div
        className={styles["grid-cell-container"]}
        onClick={() => (list?.length === 0 ? changeSort() : toggleActive())}
      >
        <span className={styles["grid-cell-container-name"]}>{fieldName}</span>
        <div className={styles["grid-cell-container-icons"]}>
          {list?.length === 0 ? (
            <FaAngleUp
              className={
                sort === `-${field}`
                  ? styles["grid-cell-container-icon-active"]
                  : ""
              }
            />
          ) : null}
          <FaAngleDown
            className={
              sort === field ? styles["grid-cell-container-icon-active"] : ""
            }
          />
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
          {list?.map((item) => (
            <li
              key={item}
              onClick={() => changeSelected(item)}
              className={item === selected ? styles.active : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
