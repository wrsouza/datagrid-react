import { Dispatch, FC, SetStateAction, useState } from "react";
import { Reseller } from "../../../../pages/api/resellers";
import { PageItem } from "./PageItem";
import styles from "./styles.module.css";
import { useResellers } from "../../../../hooks/resellers.hook";

export const Pagination = () => {
  const { totalPages, changePage } = useResellers();

  function renderPageItems() {
    for (let i = 1; i <= totalPages; i++) {
      return (
        <PageItem text={i} changePage={() => changePage(i)} active={false} />
      );
    }
  }

  return <div className={styles.pagination}>{renderPageItems()}</div>;
};
