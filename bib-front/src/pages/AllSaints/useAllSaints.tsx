import useGetNearDatesSaints from "@/api/useGetNearDatesSaints";
import useGetSaints from "@/api/useGetSaints";
import { useFavouriteContext } from "@/context/custom/favourites";
import AppRoutes from "@/context/router/routes";
import useNav from "@/hooks/useNav";
import useRequestParams from "@/hooks/useRequestParams";
import { Saint } from "@/types/saints";
import { useMemo, useState } from "react";

export enum FilterOptions {
  SEARCH = "search",
  DATE = "date",
}

const useAllSaints = () => {
  const { goTo } = useNav();
  const { state: allSaintsParams, setSearch } = useRequestParams();

  const { favSaints } = useFavouriteContext();

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [openFilter, setOpenFilter] = useState<FilterOptions | null>(null);

  const selectedDate = useMemo(() => {
    return {
      day: date ? String(date.getDate()) : "",
      month: date ? String(date.getMonth() + 1) : "",
    };
  }, [date]);

  const { data: allSaints } = useGetSaints({
    ...allSaintsParams,
    day: selectedDate.day,
    month: selectedDate.month,
  });
  const { data: nearDatesSaints } = useGetNearDatesSaints(
    String(new Date().getMonth() + 1),
    String(new Date().getDate())
  );

  const onSaintSelected = (saint: Saint) => {
    return goTo(AppRoutes.SAINTS, saint.id);
  };

  const onFilterSelect = (filter: FilterOptions) => {
    setSearch("");
    setDate(undefined);
    if (openFilter === filter) {
      return setOpenFilter(null);
    }
    switch (filter) {
      case FilterOptions.DATE:
        return setOpenFilter(filter);
      case FilterOptions.SEARCH:
        return setOpenFilter(filter);
    }
  };

  return {
    date,
    setDate,
    favSaints,
    allSaints,
    setSearch,
    allSaintsParams,
    onSaintSelected,
    nearDatesSaints,
    openFilter,
    onFilterSelect,
  };
};

export default useAllSaints;
