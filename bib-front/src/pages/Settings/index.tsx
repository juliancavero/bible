import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import StyledPaper from "@/components/Containers/Paper";
import BodyText from "@/components/Text/BodyText";
import StrongText from "@/components/Text/StrongText";
import { useTheme } from "@/context/theme";
import useLocalStorage, { LocalStorageKeys } from "@/hooks/useLocalStorage";

const SettingsPage = () => {
  const { deleteItem } = useLocalStorage();
  const { setTheme, theme } = useTheme();
  return (
    <MainContainer>
      <IndexBar>
        <StrongText>Ajustes</StrongText>
      </IndexBar>
      <PaddingBox>
        <StyledPaper>
          <SettingsItem>Idioma</SettingsItem>
          <SettingsItem>Tema</SettingsItem>
          <SettingsItem>La Biblia</SettingsItem>
          <SettingsItem
            onClick={() => deleteItem(LocalStorageKeys.STORED_QUESTIONS)}
          >
            Delete localstorage questions
          </SettingsItem>
          <SettingsItem
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "Cambiar a Dark Mode" : "Cambiar a Light Mode"}
          </SettingsItem>
        </StyledPaper>
      </PaddingBox>
    </MainContainer>
  );
};

export default SettingsPage;

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
