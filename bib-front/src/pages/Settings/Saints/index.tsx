import AnimatedLayout from "@/components/Animated/AnimatedLayout";
import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import BodyText from "@/components/Text/BodyText";
import useSaintsSettings from "./useSaintsSettings";

const SaintsSettingsPage = () => {
  const { goBack, notifications, onCancelNotification } = useSaintsSettings();
  return (
    <MainContainer>
      <IndexBar text="Preferencias" onClick={goBack} />
      <AnimatedLayout>
        <MainContainer>
          <PaddingBox className="flex flex-col gap-3">
            <Card>
              {notifications.length > 0 &&
                notifications.map((n) => (
                  <SettingsItem key={n.id}>
                    <BodyText>{n.title}</BodyText>
                    <BodyText>{n.body}</BodyText>
                    <button onClick={() => onCancelNotification(n.id)}>
                      Cancelar
                    </button>
                  </SettingsItem>
                ))}
            </Card>
          </PaddingBox>
        </MainContainer>
      </AnimatedLayout>
    </MainContainer>
  );
};

export default SaintsSettingsPage;

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
