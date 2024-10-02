import BiColorListItem from "@/components/Containers/BiColorListItem";
import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import MarginBox from "@/components/Containers/MarginBox";
import PaddingBox from "@/components/Containers/PaddingBox";
import { HorizontalArrow } from "@/components/Icons/Arrows";
import Calendar from "@/components/Inputs/Calendar";
import BodyText from "@/components/Text/BodyText";
import StrongText from "@/components/Text/StrongText";
import { Input } from "@/components/ui/input";
import useAllQuotes from "./useAllQuotes";

const AllQuotesPage = () => {
  const { onBack, date, setDate } = useAllQuotes();
  return (
    <MainContainer>
      <IndexBar sticky>
        <HorizontalArrow onClick={onBack} withButton dir="left" />
        <StrongText>Enseñanzas Bíblicas</StrongText>
      </IndexBar>
      <PaddingBox>
        <MarginBox multiplier={1.5}>
          <Card>
            <PaddingBox>
              <div className="mb-2 flex flex-col items-start gap-3 md:flex-row md:justify-between md:items-center">
                <BodyText>Elige la fecha que quieres consultar.</BodyText>
                <Calendar date={date} setDate={setDate} />
              </div>
            </PaddingBox>
          </Card>
        </MarginBox>
        <MarginBox multiplier={1.5}>
          <Card>
            <PaddingBox>
              <BodyText>
                Introduce el nombre del santo que deseas buscar.
              </BodyText>
              <MarginBox multiplier={1.5}>
                <Input placeholder="San/Santa..." />
              </MarginBox>

              {["1", "2", "3"].map((result, index) => {
                return (
                  <BiColorListItem key={index} colored={index % 2 === 0}>
                    {result}
                  </BiColorListItem>
                );
              })}
            </PaddingBox>
          </Card>
        </MarginBox>
        <MarginBox multiplier={1.5}>
          <Card>
            <PaddingBox>
              <BodyText>Consulta las últimas enseñanzas</BodyText>
            </PaddingBox>
          </Card>
        </MarginBox>
      </PaddingBox>
    </MainContainer>
  );
};

export default AllQuotesPage;
