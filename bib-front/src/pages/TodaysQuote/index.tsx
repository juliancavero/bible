import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import MarginBox from "@/components/Containers/MarginBox";
import PaddingBox from "@/components/Containers/PaddingBox";
import { HorizontalArrow } from "@/components/Icons/Arrows";
import Markdown from "@/components/Text/Markdown";
import StrongText from "@/components/Text/StrongText";
import { Button } from "@/components/ui/button";
import useTodaysQuote from "./useTodaysQuote";

const TodaysQuotePage = () => {
  const {
    onBack,
    todaysDate,
    todaysQuote,
    onAnotherDay,
    todaysQuoteTitle,
    contiguousDates,
  } = useTodaysQuote();
  return (
    <MainContainer>
      <IndexBar>
        <HorizontalArrow onClick={onBack} withButton dir="left" />

        <StrongText>La cita de hoy</StrongText>
      </IndexBar>
      <PaddingBox>
        <Card>
          <PaddingBox multiplier={2} className="text-right">
            <span className="capitalize italic font-extrabold text-2xl">
              {todaysDate.toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
              })}
            </span>
          </PaddingBox>
          <PaddingBox multiplier={2}>
            <StrongText className="italic">{todaysQuoteTitle}</StrongText>
          </PaddingBox>
          <MarginBox>
            <PaddingBox multiplier={2}>
              <Markdown>{todaysQuote}</Markdown>
            </PaddingBox>
          </MarginBox>
          <PaddingBox multiplier={2}>
            <div className="flex flex-row items-center justify-between p-2">
              {contiguousDates.previous && (
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold">
                    {contiguousDates.previous.day}/
                    {contiguousDates.previous.month}
                  </span>
                  <Button
                    onClick={() => onAnotherDay("previous")}
                    variant="outline"
                  >
                    Anterior
                  </Button>
                </div>
              )}
              {contiguousDates.next && (
                <div className="flex flex-col gap-1 text-right">
                  <span className="text-sm font-bold">
                    {contiguousDates.next.day}/{contiguousDates.next.month}
                  </span>
                  <Button
                    onClick={() => onAnotherDay("next")}
                    variant="outline"
                  >
                    Siguiente
                  </Button>
                </div>
              )}
            </div>
          </PaddingBox>
        </Card>
      </PaddingBox>
    </MainContainer>
  );
};

export default TodaysQuotePage;
