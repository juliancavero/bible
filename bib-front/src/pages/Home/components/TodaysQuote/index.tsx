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
import { Skeleton } from "@/components/ui/skeleton";
import useTodaysQuote from "./useTodaysQuote";

const TodaysQuote = () => {
  const { data, isLoading, isError, goToTodaysQuote, goToAllQuotes } =
    useTodaysQuote();
  return (
    <Card>
      <SpaceBetween>
        <StrongText>
          {data?.book} {data?.chapter}
        </StrongText>
        <StrongText>La cita de hoy</StrongText>
      </SpaceBetween>
      {isLoading && <Loading />}
      {isError && <Error />}
      {data ? (
        <>
          <DividerBox>
            <PaddingBox>
              <TextBox>
                {data.image && (
                  <Image
                    src={data.image}
                    alt="quote"
                    className="float-left w-5/12 md:w-1/3 max-w-96"
                  />
                )}
                <Markdown indent={false} serif>
                  {data.text}
                </Markdown>
              </TextBox>
              <Link className="text-right" onClick={goToTodaysQuote}>
                Seguir leyendo
              </Link>
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
        </>
      ) : (
        <BodyText>No se encontró la cita de hoy.</BodyText>
      )}
    </Card>
  );
};

export default TodaysQuote;

const Loading = () => {
  return (
    <DividerBox>
      <PaddingBox>
        <div className="flex gap-3">
          <div className="flex w-1/3">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-3 w-2/3">
            <Skeleton className="w-full h-14" />
            <Skeleton className="w-full h-14" />
          </div>
        </div>
      </PaddingBox>
    </DividerBox>
  );
};

const Error = () => {
  return (
    <DividerBox>
      <PaddingBox>
        <StrongText className="text-center text-amber-300">
          Hubo un error al cargar la cita de hoy. Inténtalo de nuevo más tarde.
        </StrongText>
      </PaddingBox>
    </DividerBox>
  );
};
