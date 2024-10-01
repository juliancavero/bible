import useGetMonthDaySaint from "@/api/useGetMonthDaySaint";
import AppRoutes from "@/context/router/routes";
import useNav from "@/hooks/useNav";

const useSaintsBook = () => {
  const today = new Date();
  const { goTo } = useNav();
  const { data } = useGetMonthDaySaint(
    (today.getMonth() + 1).toString(),
    today.getDate().toString()
  );

  const goToTodaysSaint = () => {
    if (!data) return;
    return goTo(AppRoutes.SAINTS, data[0].id);
  };
  const goToAllSaints = () => {
    return goTo(AppRoutes.SAINTS);
  };

  const todaysDate = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
  });

  return {
    data,
    todaysDate,
    goToAllSaints,
    goToTodaysSaint,
  };
};

export default useSaintsBook;
