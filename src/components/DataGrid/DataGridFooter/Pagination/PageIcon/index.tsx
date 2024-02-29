import { FC, ReactNode } from "react";
import styles from "./styles.module.css";

interface PageIconProps {
  icon: ReactNode;
  changePage: () => void;
  active: boolean;
}

export const PageIcon: FC<PageIconProps> = ({ icon, changePage, active }) => {
  return (
    <div
      onClick={changePage}
      className={active ? styles["page-item-active"] : styles["page-item"]}
    >
      {icon}
    </div>
  );
};
