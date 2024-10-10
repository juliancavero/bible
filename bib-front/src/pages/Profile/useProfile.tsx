import AppRoutes from "@/context/router/routes";
import { useTheme } from "@/context/theme";
import useAchievements from "@/hooks/useAchievements";
import useLocalStorage, { LocalStorageKeys } from "@/hooks/useLocalStorage";
import useNav from "@/hooks/useNav";

const useProfile = () => {
  const { achievements } = useAchievements();
  const { deleteItem } = useLocalStorage();
  const { setTheme, theme } = useTheme();
  const { goTo } = useNav();

  const deleteQuestions = () => {
    deleteItem(LocalStorageKeys.STORED_QUESTIONS);
  };

  const onAllAchievementsClick = () => {
    goTo(AppRoutes.ACHIEVEMENTS);
  };

  return {
    achievements,
    theme,
    setTheme,
    deleteQuestions,
    onAllAchievementsClick,
  };
};

export default useProfile;
