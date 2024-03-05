import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IReseller } from "../pages/api/resellers";
import axios from "axios";

export interface IResellerForm {
  search: string;
  fromDate: string;
  toDate: string;
}

export interface IResellerFilters {
  page: number;
  sort: string;
  selectedStatus: string;
  selectedAcceptanceOfTerms: string;
  selectedBiometrics: string;
}

export interface IResellerContext {
  list: IReseller[];
  setList: Dispatch<SetStateAction<IReseller[]>>;
  filteredList: IReseller[];
  setFilteredList: Dispatch<SetStateAction<IReseller[]>>;
  totalFiltered: number;
  form: IResellerForm;
  setForm: Dispatch<SetStateAction<IResellerForm>>;
  filters: IResellerFilters;
  setFilters: Dispatch<SetStateAction<IResellerFilters>>;
  perPage: number;
  totalPages: number;
}

export const ResellerContext = createContext<IResellerContext>(
  {} as IResellerContext
);

export interface IResellerProps {
  children?: ReactNode;
}

export const ResellerProvider: FC<IResellerProps> = ({ children }) => {
  const perPage = 25;
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalFiltered, setTotalFiltered] = useState<number>(0);
  const [list, setList] = useState<IReseller[]>([]);
  const [filteredList, setFilteredList] = useState<IReseller[]>([]);
  const [form, setForm] = useState<IResellerForm>({
    search: "",
    fromDate: "",
    toDate: "",
  });
  const [filters, setFilters] = useState<IResellerFilters>({
    page: 1,
    sort: "_id",
    selectedStatus: "",
    selectedAcceptanceOfTerms: "",
    selectedBiometrics: "",
  });

  useEffect(() => {
    const getStatusList = (statusList: IReseller[]) => {
      if (!filters.selectedStatus) {
        return statusList;
      }
      console.log(filters);
      return statusList.filter(
        (reseller) => reseller.status === filters.selectedStatus
      );
    };

    const getAcceptanceOfTermsList = (acceptanceOfTermsList: IReseller[]) => {
      if (!filters.selectedAcceptanceOfTerms) {
        return acceptanceOfTermsList;
      }
      console.log(filters);
      return acceptanceOfTermsList.filter(
        (reseller) =>
          reseller.acceptanceOfTerms === filters.selectedAcceptanceOfTerms
      );
    };

    const getBiometricsList = (biometricsList: IReseller[]) => {
      if (!filters.selectedBiometrics) {
        return biometricsList;
      }
      console.log(filters);
      return biometricsList.filter(
        (reseller) => reseller.biometrics === filters.selectedBiometrics
      );
    };

    const getSorteredList = (sorteredList: IReseller[]) => {
      sorteredList.sort((a, b) => {
        const field = filters.sort.replace("-", "") as keyof IReseller;
        if (filters.sort.indexOf("-") !== -1) {
          return a[field].toLowerCase().localeCompare(b[field].toLowerCase());
        } else {
          return b[field].toLowerCase().localeCompare(a[field].toLowerCase());
        }
      });
      return sorteredList;
    };

    const getFilteredList = () => {
      const statusList = getStatusList([...list]);
      const acceptanceOfTermsList = getAcceptanceOfTermsList(statusList);
      const biometricsList = getBiometricsList(acceptanceOfTermsList);
      const sorteredList = getSorteredList(biometricsList);
      setTotalFiltered(sorteredList.length);
      const tpages =
        sorteredList.length % perPage === 0
          ? sorteredList.length / perPage
          : Math.floor(sorteredList.length / perPage) + 1;
      setTotalPages(tpages);

      const newList = [];
      const initial = (filters.page - 1) * perPage;
      const final = initial + perPage;
      const total = final > sorteredList.length ? sorteredList.length : final;
      for (let i = initial; i < total; i++) {
        newList.push(sorteredList[i]);
      }
      setFilteredList(newList);
    };
    if (list.length > 0) {
      getFilteredList();
    }
  }, [list, filters]);

  useEffect(() => {
    const getList = async () => {
      const { data } = await axios.get("/api/resellers");
      setList(data);
    };

    getList();
  }, []);

  return (
    <ResellerContext.Provider
      value={{
        list,
        setList,
        filteredList,
        setFilteredList,
        totalFiltered,
        form,
        setForm,
        filters,
        setFilters,
        perPage,
        totalPages,
      }}
    >
      {children}
    </ResellerContext.Provider>
  );
};

export const useReseller = () => {
  return useContext<IResellerContext>(ResellerContext);
};
