import BiColorListItem from "@/components/Containers/BiColorListItem";
import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import Star from "@/components/Icons/Star";
import BodyText from "@/components/Text/BodyText";
import StrongText from "@/components/Text/StrongText";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";
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
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Día / Mes</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    // labels={{}} traducciones
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
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
