import Card from "@/components/Containers/Card";
import DividerBox from "@/components/Containers/DividerBox";
import TextBox from "@/components/Containers/LimitedLinesBox";
import PaddingBox from "@/components/Containers/PaddingBox";
import Image from "@/components/Misc/Image";
import BodyText from "@/components/Text/BodyText";
import ButtonText from "@/components/Text/ButtonText";
import Link from "@/components/Text/Link";
import Markdown from "@/components/Text/Markdown";
import StrongText from "@/components/Text/StrongText";
import { Button } from "@/components/ui/button";
import useSaintsBook from "./useSaintsBook";

const SaintsBook = () => {
  const { data, goToAllSaints, goToTodaysSaint } = useSaintsBook();

  const saint = data && data.find((saint) => saint.isMain);

  return (
    <Card>
      <StrongText>Santoral hoy</StrongText>
      {saint ? (
        <>
          <DividerBox>
            <PaddingBox>
              <TextBox>
                <Image
                  src="https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg"
                  alt="quote"
                  className="float-right ml-2"
                />
                <Markdown indent={false} children={saint.text} />
              </TextBox>
              <Link onClick={goToTodaysSaint}>Seguir leyendo</Link>
            </PaddingBox>
          </DividerBox>
          <div className="flex flex-col items-center gap-1">
            <Button className="w-full" onClick={goToTodaysSaint}>
              <ButtonText>Texto completo - {saint.name}</ButtonText>
            </Button>
            <BodyText>o bien...</BodyText>
            <Button
              className="w-full"
              onClick={goToAllSaints}
              variant={"secondary"}
            >
              <ButtonText>Ver el Santoral completo</ButtonText>
            </Button>
          </div>
        </>
      ) : (
        <>
          <BodyText>No se encontró información para este día.</BodyText>
          <DividerBox>
            <Button className="my-2 w-full" onClick={goToAllSaints}>
              <ButtonText>Ver el Santoral completo</ButtonText>
            </Button>
          </DividerBox>
        </>
      )}
    </Card>
  );
};

export default SaintsBook;
