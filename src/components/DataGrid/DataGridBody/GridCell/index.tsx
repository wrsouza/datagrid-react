import { FC, ReactNode } from "react";
import styles from "./styles.module.css";

interface GridCellProps {
  text: string;
  getIcon: (text: string) => ReactNode;
}

export const GridCell: FC<GridCellProps> = ({ text, getIcon }) => {
  return (
    <div className={styles["grid-cell"]}>
      {getIcon(text)}
      <span>{text}</span>
    </div>
  );
};
