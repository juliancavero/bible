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

  const onSettingsClick = () => {
    goTo(AppRoutes.SETTINGS);
  };

  const onBibleSettingsClick = () => {
    goTo(AppRoutes.BIBLE_SETTINGS);
  };

  const onSaintsSettingsClick = () => {
    goTo(AppRoutes.SAINTS_SETTINGS);
  };

  const changeTheme = () => {
    switch (theme) {
      case "system":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
      case "dark":
      default:
        setTheme("light");
        break;
    }
  };

  return {
    achievements,
    theme,
    changeTheme,
    deleteQuestions,
    onAllAchievementsClick,
    onSettingsClick,
    onBibleSettingsClick,
    onSaintsSettingsClick,
  };
};

export default useProfile;
