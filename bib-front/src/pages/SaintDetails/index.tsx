import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import { HorizontalArrow } from "@/components/Icons/Arrows";
import Star from "@/components/Icons/Star";
import Markdown from "@/components/Text/Markdown";
import StrongText from "@/components/Text/StrongText";
import { Button } from "@/components/ui/button";
import useSaintDetails from "./useSaintDetails";

const SaintDetailsPage = () => {
  const { data, onBack, todaysDate, isFavourite, toggleFavourite } =
    useSaintDetails();
  return (
    <MainContainer>
      <IndexBar sticky>
        <HorizontalArrow onClick={onBack} withButton dir="left" />
        <StrongText>{data ? data.name : "Santoral"}</StrongText>
      </IndexBar>

      <PaddingBox>
        <PaddingBox multiplier={2}>
          <h3 className="text-2xl text-right font-bold capitalize">
            {todaysDate.toLocaleDateString("es-ES", {
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </h3>
        </PaddingBox>
        <Card>
          {data ? (
            <div key={data.id}>
              <PaddingBox
                multiplier={2}
                className="flex flex-row items-center justify-between"
              >
                <StrongText className="italic capitalize">
                  {data.name}
                </StrongText>
                <div>
                  <Button variant={"link"} onClick={toggleFavourite}>
                    <Star filled={isFavourite} />
                  </Button>
                </div>
              </PaddingBox>
              <PaddingBox multiplier={2}>
                <Markdown indent={false} children={data.text} />
              </PaddingBox>
            </div>
          ) : (
            <PaddingBox>
              <h1 className="text-xl">
                No se encontró información para este día.
              </h1>
            </PaddingBox>
          )}
        </Card>
      </PaddingBox>
    </MainContainer>
  );
};

export default SaintDetailsPage;
