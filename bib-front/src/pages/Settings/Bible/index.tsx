import AnimatedLayout from "@/components/Animated/AnimatedLayout";
import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import BodyText from "@/components/Text/BodyText";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useSettings from "./useSettings";

const BibleSettingsPage = () => {
  const { preferences, goBack, onChangeTheme, theme, onFontSizeChange } =
    useSettings();
  return (
    <MainContainer>
      <IndexBar text="Preferencias" onClick={goBack} />
      <AnimatedLayout>
        <MainContainer>
          <PaddingBox className="flex flex-col gap-3">
            <Card>
              <SettingsItem first>
                <BodyText>Idioma</BodyText>
                <Select>
                  <SelectTrigger className="w-1/2 text-end">
                    <SelectValue>{theme}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="en">Inglés</SelectItem>
                  </SelectContent>
                </Select>
              </SettingsItem>
              <SettingsItem>
                <BodyText>Tema seleccionado</BodyText>
                <Select onValueChange={onChangeTheme} value={theme}>
                  <SelectTrigger className="w-1/2 text-end">
                    <SelectValue>{theme}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Claro</SelectItem>
                    <SelectItem value="dark">Oscuro</SelectItem>
                    <SelectItem value="system">Automático</SelectItem>
                  </SelectContent>
                </Select>
              </SettingsItem>
              <SettingsItem>
                <BodyText>Tamaño del texto</BodyText>
                <Select
                  onValueChange={onFontSizeChange}
                  value={preferences.fontSize}
                >
                  <SelectTrigger className="w-1/2 text-end">
                    <SelectValue>{preferences.fontSize}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Normal</SelectItem>
                    <SelectItem value="medium">Mediano</SelectItem>
                    <SelectItem value="large">Grande</SelectItem>
                  </SelectContent>
                </Select>
              </SettingsItem>
            </Card>
          </PaddingBox>
        </MainContainer>
      </AnimatedLayout>
    </MainContainer>
  );
};

export default BibleSettingsPage;

type SettingsItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
  first?: boolean;
};

const SettingsItem = ({
  first = false,
  children,
  onClick,
}: SettingsItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center gap-3 ${
        first ? "pb-3 px-3" : "p-3"
      } border-b border-gray-200`}
    >
      {children}
    </div>
  );
};
