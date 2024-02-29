import { FC, useState } from "react";
import styles from "./styles.module.css";
import { FaAngleDown } from "react-icons/fa";
interface SelectFilterProps {
  selectedItem: any;
  list: any[];
}

export const SelectFilter: FC<SelectFilterProps> = ({ list, selectedItem }) => {
  const [selected, setSelected] = useState<any>(selectedItem);
  const [active, setActive] = useState<boolean>(false);

  function toggleActive() {
    setActive(!active);
  }

  function changeSelected(item: any) {
    setSelected(item);
    toggleActive();
  }

  return (
    <div className={styles["select-filter"]}>
      <div
        className={
          active
            ? styles["select-filter-container-active"]
            : styles["select-filter-container"]
        }
        onClick={() => toggleActive()}
      >
        <span className={styles["select-filter-container-text"]}>
          {selected}
        </span>
        <FaAngleDown className={styles["select-filter-container-icon"]} />
      </div>
      <div
        onClick={() => toggleActive()}
        className={
          active
            ? styles["select-filter-popup-bg-active"]
            : styles["select-filter-popup-bg"]
        }
      ></div>
      <div
        className={
          active
            ? styles["select-filter-popup-active"]
            : styles["select-filter-popup"]
        }
      >
        <ul>
          {list.map((item) => (
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
