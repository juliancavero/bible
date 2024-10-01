import AppRoutes from "@/context/router/routes";
import { fakeTodaysQuoteTitle } from "@/fakeData";
import useNav from "@/hooks/useNav";

const useTodaysQuote = () => {
  const { goTo } = useNav();

  const goToTodaysQuote = () => {
    const today = new Date();

    return goTo(
      AppRoutes.QUOTES,
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );
  };

  const goToAllQuotes = () => {
    goTo(AppRoutes.QUOTES);
  };

  return {
    goToAllQuotes,
    goToTodaysQuote,
    todaysQuoteTitle: fakeTodaysQuoteTitle,
  };
};

export default useTodaysQuote;
