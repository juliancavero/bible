import Card from "@/components/Containers/Card";
import DividerBox from "@/components/Containers/DividerBox";
import TextBox from "@/components/Containers/LimitedLinesBox";
import PaddingBox from "@/components/Containers/PaddingBox";
import SpaceBetween from "@/components/Containers/SpaceBetween";
import Image from "@/components/Misc/Image";
import BodyText from "@/components/Text/BodyText";
import ButtonText from "@/components/Text/ButtonText";
import Link from "@/components/Text/Link";
import Markdown from "@/components/Text/Markdown";
import StrongText from "@/components/Text/StrongText";
import { Button } from "@/components/ui/button";
import { fakeTodaysQuote } from "@/fakeData";
import useTodaysQuote from "./useTodaysQuote";

const TodaysQuote = () => {
  const { goToTodaysQuote, goToAllQuotes, todaysQuoteTitle } = useTodaysQuote();
  return (
    <Card>
      <SpaceBetween>
        <StrongText>{todaysQuoteTitle}</StrongText>
        <StrongText>La cita de hoy</StrongText>
      </SpaceBetween>
      <DividerBox>
        <PaddingBox>
          <TextBox>
            <Image
              src="https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg"
              alt="quote"
              type="home"
              className="float-left"
            />
            <Markdown indent>{fakeTodaysQuote}</Markdown>
          </TextBox>
          <Link onClick={goToTodaysQuote}>Seguir leyendo</Link>
        </PaddingBox>
      </DividerBox>
      <div className="flex flex-col items-center gap-1">
        <Button className="w-full" onClick={goToTodaysQuote}>
          <ButtonText>Lee la enseñanza de la cita de hoy</ButtonText>
        </Button>
        <BodyText>o bien...</BodyText>
        <Button variant={"secondary"} className="" onClick={goToAllQuotes}>
          <ButtonText>Todas las enseñanzas</ButtonText>
        </Button>
      </div>
    </Card>
  );
};

export default TodaysQuote;
