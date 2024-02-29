import { use, useEffect, useState } from "react";
import { Reseller } from "../pages/api/resellers";

export const useResellers = () => {
  const [list, setList] = useState<Reseller[]>([]);
  const [filteredList, setFilteredList] = useState<Reseller[]>([]);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(25);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("_id");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  function changePage(page: any) {
    setPage(page);
  }

  return {
    list,
    setList,
    filteredList,
    setFilteredList,
    page,
    setPage,
    perPage,
    setPerPage,
    totalPages,
    setTotalPages,
    search,
    setSearch,
    sort,
    setSort,
    fromDate,
    setFromDate,
    toDate,
    setToDate,
    changePage,
  };
};
