import useGetTeachingDetails from "@/api/useGetTeachingDetails";
import AppRoutes from "@/context/router/routes";
import useNav from "@/hooks/useNav";
import { renderDate } from "@/utils/calendar";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

const useTeachingDetails = () => {
  const { id = "" } = useParams();
  const { data, isLoading, isError } = useGetTeachingDetails(id);
  const { goTo } = useNav();
  const contiguousDates = {
    previous: {
      year: "2024",
      month: "7",
      day: "20",
    },
    next: {
      year: "2024",
      month: "7",
      day: "23",
    },
  };

  const todaysDate = useMemo(() => {
    return renderDate(new Date());
  }, []);

  const onAnotherDay = (dir: "previous" | "next") => {
    const direction =
      dir === "previous" ? contiguousDates.previous : contiguousDates.next;

    goTo(AppRoutes.TEACHINGS, direction.year, direction.month, direction.day);
  };

  const onBack = () => {
    goTo(AppRoutes.HOME);
  };

  return {
    isLoading,
    isError,
    data,
    onBack,
    todaysDate,
    onAnotherDay,
    contiguousDates,
  };
};

export default useTeachingDetails;
