import { use, useEffect, useState } from "react";
import { Reseller } from "../pages/api/resellers";

export const useResellers = () => {
  const [list, setList] = useState<Reseller[]>([]);
  const [filteredList, setFilteredList] = useState<Reseller[]>([]);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(25);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  function changePage(page: any) {
    if (page === "prev") {
    }
    if (page === "next") {
    }
  }

  useEffect(() => {
    const getSorteredList = () => {
      return list.sort((a, b) => {
        const field = sort.replace("-", "") as keyof Reseller;
        if (sort.indexOf("-") !== -1) {
          return a[field].localeCompare(b[field]);
        }
        if (sort === "desc") {
          return b[field].localeCompare(a[field]);
        }
        return 0;
      });
    };

    const getFilteredList = () => {
      const sorteredList = getSorteredList();
      const newList = [];
      const initial = (page - 1) * perPage;
      const final = initial + perPage;
      const total = final > totalPages ? totalPages : final;
      setTotalPages(total);
      for (let i = initial; i < total; i++) {
        newList.push(sorteredList[i]);
      }
      setFilteredList(newList);
    };

    getFilteredList();
  }, [list, sort, page]);

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
