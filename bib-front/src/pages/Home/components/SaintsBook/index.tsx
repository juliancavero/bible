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
  const { renderSaint, goToAllSaints, goToTodaysSaint } = useSaintsBook();

  return (
    <Card>
      <StrongText>Santoral hoy</StrongText>
      {renderSaint ? (
        <>
          <DividerBox>
            <PaddingBox>
              <TextBox>
                {renderSaint.image && (
                  <Image
                    src={renderSaint.image}
                    alt={renderSaint.name}
                    className="float-right"
                    type="home"
                  />
                )}
                <Markdown indent={false} children={renderSaint.text} />
              </TextBox>
              <Link onClick={goToTodaysSaint}>Seguir leyendo</Link>
            </PaddingBox>
          </DividerBox>
          <div className="flex flex-col items-center gap-1">
            <Button className="w-full" onClick={goToTodaysSaint}>
              <ButtonText>Leer texto completo</ButtonText>
            </Button>
            <BodyText>o bien...</BodyText>
            <Button
              className="w-50"
              onClick={goToAllSaints}
              variant={"secondary"}
            >
              <ButtonText size="lg">Ver todo el Santoral</ButtonText>
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
