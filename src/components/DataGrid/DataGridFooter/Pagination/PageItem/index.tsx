import { FC } from "react";
import styles from "./styles.module.css";

interface PageItemProps {
  text: any;
  changePage: () => void;
  active: boolean;
}

export const PageItem: FC<PageItemProps> = ({ text, changePage, active }) => {
  return (
    <div
      onClick={changePage}
      className={active ? styles["page-item-active"] : styles["page-item"]}
    >
      <span>{text}</span>
    </div>
  );
};
