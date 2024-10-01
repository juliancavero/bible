import AppRoutes from "@/context/router/routes";
import { fakeTodaysQuote, fakeTodaysQuoteTitle } from "@/fakeData";
import useNav from "@/hooks/useNav";
import { useParams } from "react-router-dom";

const useTodaysQuote = () => {
  const { year = "", month = "", day = "" } = useParams();
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

  const todaysDate = new Date(Number(year), Number(month) - 1, Number(day));

  const onAnotherDay = (dir: "previous" | "next") => {
    const direction =
      dir === "previous" ? contiguousDates.previous : contiguousDates.next;

    goTo(AppRoutes.QUOTES, direction.year, direction.month, direction.day);
  };

  const onBack = () => {
    goTo(AppRoutes.HOME);
  };

  return {
    onBack,
    todaysDate,
    todaysQuote: fakeTodaysQuote,
    onAnotherDay,
    todaysQuoteTitle: fakeTodaysQuoteTitle,
    contiguousDates,
  };
};

export default useTodaysQuote;
