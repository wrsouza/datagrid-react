import { FC, ReactNode } from "react";
import {
  FaRegTimesCircle,
  FaRegCheckCircle,
  FaCircleNotch,
  FaMinus,
} from "react-icons/fa";
import { GridCell } from "./GridCell";

import styles from "./styles.module.css";
import { useReseller } from "../../../contexts/reseller";

export const DataGridBody: FC = () => {
  const { filteredList } = useReseller();
  function getAcceptanceIcon(text: string): ReactNode {
    switch (text) {
      case "Aceptado":
        return <FaRegCheckCircle className={styles["icon-green"]} />;
      case "No aceptado":
        return <FaRegTimesCircle className={styles["icon-red"]} />;
      case "Datos eliminados":
        return <FaCircleNotch className={styles["icon-gray"]} />;
      case "Pendiente":
        return <FaMinus className={styles["icon-gray"]} />;
      default:
        return null;
    }
  }

  return (
    <div className={styles["datagrid-body"]}>
      <div className={styles["datagrid-body-container"]}>
        {filteredList.map((item) => (
          <div key={item?._id} className={styles["datagrid-body-row"]}>
            <GridCell text={item?.name} getIcon={() => null} />
            <GridCell text={item?.phone} getIcon={() => null} />
            <GridCell text={item?.createdAt} getIcon={() => null} />
            <GridCell
              text={item?.acceptanceOfTerms}
              getIcon={getAcceptanceIcon}
            />
            <GridCell text={item?.biometrics} getIcon={() => null} />
            <GridCell text={item?.status} getIcon={() => null} />
          </div>
        ))}
      </div>
    </div>
  );
};
