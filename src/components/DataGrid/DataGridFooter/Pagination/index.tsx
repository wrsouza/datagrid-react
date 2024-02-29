import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleDoubleRight,
  FaAngleRight,
} from "react-icons/fa";
import styles from "./styles.module.css";
import { useResellers } from "../../../../hooks/resellers.hook";
import { PageNumber } from "./PageNumber";
import { PageIcon } from "./PageIcon";
import { FC } from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  changePage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  page,
  totalPages,
  changePage,
}) => {
  function prevPageVisible() {
    return !(page - 1 < 1);
  }

  function previousPagesVisible() {
    return !(page - 2 < 2);
  }

  function listPages() {
    const firstPage = 1;
    const lastPage = totalPages;
    const prevPage = page - 2 < firstPage ? firstPage : page - 2;
    const nextPage = page + 2 > lastPage ? lastPage : page + 2;

    const pages = [];
    for (let i = prevPage; i <= nextPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  function nextPageVisible() {
    return !(page + 1 > totalPages);
  }

  function nextPagesVisible() {
    return !(page + 2 > totalPages);
  }

  function isActive(pageNumber: number) {
    return page === pageNumber;
  }

  return (
    <div className={styles.pagination}>
      {previousPagesVisible() ? (
        <PageIcon
          icon={<FaAngleDoubleLeft />}
          changePage={() => changePage(1)}
          active={false}
        />
      ) : null}
      {prevPageVisible() ? (
        <PageIcon
          icon={<FaAngleLeft />}
          changePage={() => changePage(page - 1)}
          active={false}
        />
      ) : null}
      {previousPagesVisible() ? (
        <PageNumber text="..." changePage={() => {}} active={false} />
      ) : null}
      {listPages().map((pageNumber) => (
        <PageNumber
          key={pageNumber}
          text={pageNumber}
          changePage={() => changePage(pageNumber)}
          active={isActive(pageNumber)}
        />
      ))}
      {nextPagesVisible() ? (
        <PageNumber text="..." changePage={() => {}} active={false} />
      ) : null}
      {nextPageVisible() ? (
        <PageIcon
          icon={<FaAngleRight />}
          changePage={() => changePage(page + 1)}
          active={false}
        />
      ) : null}
      {nextPagesVisible() ? (
        <PageIcon
          icon={<FaAngleDoubleRight />}
          changePage={() => changePage(totalPages)}
          active={false}
        />
      ) : null}
    </div>
  );
};
