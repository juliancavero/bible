import BiColorListItem from "@/components/Containers/BiColorListItem";
import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import MarginBox from "@/components/Containers/MarginBox";
import PaddingBox from "@/components/Containers/PaddingBox";
import { HorizontalArrow } from "@/components/Icons/Arrows";
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
