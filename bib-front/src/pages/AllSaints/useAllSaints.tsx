import useGetMonthDaySaint from "@/api/useGetMonthDaySaint";
import useGetSaints from "@/api/useGetSaints";
import { useFavouriteContext } from "@/context/custom/favourites";
import AppRoutes from "@/context/router/routes";
import useNav from "@/hooks/useNav";
import useRequestParams from "@/hooks/useRequestParams";
import { Saint } from "@/types/saints";
import { useMemo, useState } from "react";

const useAllSaints = () => {
  const { goTo } = useNav();
  const { state: allSaintsParams, setSearch } = useRequestParams();
  const { data: allSaints } = useGetSaints(allSaintsParams);
  const { favSaints } = useFavouriteContext();

  const [date, setDate] = useState<Date>();

  const selectedDate = useMemo(() => {
    return {
      day: date ? String(date.getDate()) : "",
      month: date ? String(date.getMonth() + 1) : "",
    };
  }, [date]);

  const { data: dayMonthSaints } = useGetMonthDaySaint(
    selectedDate.month,
    selectedDate.day
  );

  const onSaintSelected = (saint: Saint) => {
    return goTo(AppRoutes.SAINTS, saint.id);
  };

  return {
    date,
    setDate,
    favSaints,
    allSaints,
    setSearch,
    dayMonthSaints,
    onSaintSelected,
  };
};

export default useAllSaints;
