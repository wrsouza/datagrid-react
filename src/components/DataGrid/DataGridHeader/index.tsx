import { Dispatch, FC, SetStateAction } from "react";
import styles from "./styles.module.css";
import { GridCell } from "./GridCell";
interface DataGridHeaderProps {
  fields: {
    fieldName: string;
    field: string;
    sort: string;
    setSort: Dispatch<SetStateAction<string>>;
    list: string[];
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
  }[];
}
export const DataGridHeader: FC<DataGridHeaderProps> = ({ fields }) => {
  return (
    <div className={styles["datagrid-header"]}>
      {fields.map((item) => (
        <GridCell key={item.field} {...item} />
      ))}
    </div>
  );
};
