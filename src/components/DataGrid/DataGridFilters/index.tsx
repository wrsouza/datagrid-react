import { SelectFilter } from "./SelectFilter";
import styles from "./styles.module.css";

export const DataGridFilters = () => {
  function getDays() {
    const days = [];
    for (let i = 1; i < 31; i++) {
      days.push(i);
    }
    return days;
  }

  function getMonths() {
    return [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
  }

  function getYears() {
    const years = [];
    for (let i = 2015; i < 2030; i++) {
      years.push(i);
    }
    return years;
  }

  return (
    <div className={styles["datagrid-filters"]}>
      <span>Buscar por fecha:</span>
      <span className={styles.space}>desde</span>
      <SelectFilter list={getDays()} selectedItem={10} />
      <SelectFilter list={getMonths()} selectedItem="Julho" />
      <SelectFilter list={getYears()} selectedItem={2024} />
      <span className={styles.space}>hasta</span>
      <SelectFilter list={getDays()} selectedItem={10} />
      <SelectFilter list={getMonths()} selectedItem="Julho" />
      <SelectFilter list={getYears()} selectedItem={2024} />
      <button className={styles["datagrid-filters-btn"]}>Borrar filtro</button>
    </div>
  );
};
