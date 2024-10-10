import AnimatedLayout from "@/components/Animated/AnimatedLayout";
import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import BodyText from "@/components/Text/BodyText";
import AchievementsDemo from "./components/AchievementsDemo";
import useProfile from "./useProfile";

const ProfilePage = () => {
  const {
    achievements,
    theme,
    setTheme,
    deleteQuestions,
    onAllAchievementsClick,
  } = useProfile();
  return (
    <MainContainer>
      <IndexBar sticky text="Perfil" />
      <AnimatedLayout>
        <MainContainer>
          <PaddingBox className="flex flex-col gap-3">
            <Card>
              <AchievementsDemo
                achievements={achievements}
                onAllAchievementsClick={onAllAchievementsClick}
              />
            </Card>
            <Card>
              <SettingsItem>Idioma</SettingsItem>
              <SettingsItem>Tema</SettingsItem>
              <SettingsItem>La Biblia</SettingsItem>
              <SettingsItem onClick={deleteQuestions}>
                Delete localstorage questions
              </SettingsItem>
              <SettingsItem
                onClick={() => setTheme(theme !== "dark" ? "dark" : "light")}
              >
                {theme !== "dark"
                  ? "Cambiar a Dark Mode"
                  : "Cambiar a Light Mode"}
              </SettingsItem>
            </Card>
          </PaddingBox>
        </MainContainer>
      </AnimatedLayout>
    </MainContainer>
  );
};

export default ProfilePage;

type SettingsItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const SettingsItem = ({ children, onClick }: SettingsItemProps) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-between p-3 border-b border-gray-200"
    >
      <BodyText>{children}</BodyText>
    </div>
  );
};
