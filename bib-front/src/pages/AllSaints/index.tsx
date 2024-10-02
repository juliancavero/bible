import BiColorListItem from "@/components/Containers/BiColorListItem";
import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import Star from "@/components/Icons/Star";
import Calendar from "@/components/Inputs/Calendar";
import BodyText from "@/components/Text/BodyText";
import StrongText from "@/components/Text/StrongText";
import { Input } from "@/components/ui/input";
import useAllSaints from "./useAllSaints";

const AllSaintsPage = () => {
  const {
    date,
    setDate,
    favSaints,
    allSaints,
    setSearch,
    dayMonthSaints,
    onSaintSelected,
  } = useAllSaints();
  return (
    <MainContainer>
      <IndexBar sticky>
        <StrongText>Santoral</StrongText>
      </IndexBar>
      <PaddingBox className="flex flex-col gap-3">
        <Card>
          <PaddingBox multiplier={2} className="flex flex-col gap-3">
            <div className="mb-2 flex flex-col items-start gap-3 md:flex-row md:justify-between md:items-center">
              <BodyText>Elige la fecha que quieres consultar.</BodyText>
              <Calendar date={date} setDate={setDate} />
            </div>

            {dayMonthSaints ? (
              <>
                {dayMonthSaints.length > 0 ? (
                  <div>
                    <h1 className="text-lg tracking-tight font-medium pb-3">
                      El día{" "}
                      <span className="font-extrabold bg-indigo-100 dark:bg-indigo-800 px-2 py-1 rounded-sm">
                        {date?.toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "long",
                        })}
                      </span>{" "}
                      se celebra:
                    </h1>
                    {dayMonthSaints?.map((saint, index) => {
                      return (
                        <BiColorListItem
                          onClick={() => onSaintSelected(saint)}
                          key={index}
                          colored={index % 2 === 0}
                        >
                          {saint.name}
                        </BiColorListItem>
                      );
                    })}
                  </div>
                ) : (
                  <BodyText>No hay santos para esta fecha</BodyText>
                )}
              </>
            ) : null}
          </PaddingBox>
        </Card>
        <Card>
          <PaddingBox multiplier={1} className="flex flex-col gap-3">
            <BodyText>
              Introduce el nombre del santo que deseas buscar.
            </BodyText>
            <Input
              placeholder="San/Santa..."
              onChange={(e) => setSearch(e.target.value)}
            />

            <div>
              {allSaints?.data.map((saint, index) => {
                return (
                  <BiColorListItem
                    onClick={() => onSaintSelected(saint)}
                    key={index}
                    colored={index % 2 === 0}
                  >
                    {saint.name}
                  </BiColorListItem>
                );
              })}
            </div>
          </PaddingBox>
        </Card>
        <Card>
          <PaddingBox multiplier={1} className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
              <Star filled />
              <BodyText className="text-xl">Favoritos</BodyText>
            </div>
            <div>
              {favSaints.map((saint, index) => {
                return (
                  <BiColorListItem
                    onClick={() => onSaintSelected(saint)}
                    colored={index % 2 === 0}
                    key={index}
                  >
                    {saint.name}
                  </BiColorListItem>
                );
              })}
            </div>
          </PaddingBox>
        </Card>
      </PaddingBox>
    </MainContainer>
  );
};

export default AllSaintsPage;
