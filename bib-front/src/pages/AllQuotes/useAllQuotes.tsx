import AppRoutes from "@/context/router/routes";
import useNav from "@/hooks/useNav";
import { useState } from "react";

const useAllQuotes = () => {
  const { goTo } = useNav();

  const [date, setDate] = useState<Date>();

  const onBack = () => {
    return goTo(AppRoutes.HOME);
  };

  return {
    onBack,
    date,
    setDate,
  };
};

export default useAllQuotes;
