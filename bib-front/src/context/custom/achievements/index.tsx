import useAchievements from "@/hooks/useAchievements";
import { ProviderProps } from "@/types/common";
import { checkDate } from "@/utils/dates";
import { useEffect } from "react";

const AchievementsProvider = ({ children }: ProviderProps) => {
  const { achievements, addDay, resetInARow, updateLastEntered } =
    useAchievements();

  const lastEntered = achievements.lastEntered;

  useEffect(() => {
    if (lastEntered) {
      const dateComparision = checkDate(lastEntered);
      switch (dateComparision) {
        case "TODAY":
          break;
        case "YESTERDAY":
          addDay();
          break;
        default:
          resetInARow();
          addDay();
          break;
      }
    }
  }, [lastEntered]);

  useEffect(() => {
    updateLastEntered();
  }, []);

  return <>{children}</>;
};

export { AchievementsProvider };
