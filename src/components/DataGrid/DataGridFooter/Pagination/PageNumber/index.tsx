import { FC } from "react";
import styles from "./styles.module.css";

interface PageNumberProps {
  text: any;
  changePage: () => void;
  active: boolean;
}

export const PageNumber: FC<PageNumberProps> = ({
  text,
  changePage,
  active,
}) => {
  return (
    <div
      onClick={changePage}
      className={active ? styles["page-item-active"] : styles["page-item"]}
    >
      <span>{text}</span>
    </div>
  );
};
