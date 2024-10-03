import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import { HorizontalArrow } from "@/components/Icons/Arrows";
import Star from "@/components/Icons/Star";
import Markdown from "@/components/Text/Markdown";
import StrongText from "@/components/Text/StrongText";
import { Button } from "@/components/ui/button";
import useBibleRead from "./useBibleRead";

const BibleReadPage = () => {
  const {
    book,
    data,
    next,
    onBack,
    onNext,
    chapter,
    previous,
    thisBook,
    onPrevious,
    isFavourite,
    toggleFavourite,
  } = useBibleRead();

  const bookName = thisBook ? thisBook.name : book;
  return (
    <MainContainer>
      <IndexBar sticky>
        <HorizontalArrow withButton onClick={onBack} />
        <StrongText>{bookName || "" + chapter || ""}</StrongText>
      </IndexBar>
      <PaddingBox multiplier={3}>
        <Card>
          <div className="flex flex-row items-center justify-between p-2">
            <h1 className="text-2xl italic font-bold">
              {bookName} {chapter}
            </h1>
            <Button variant={"link"} onClick={toggleFavourite}>
              <Star filled={isFavourite} />
            </Button>
          </div>

          <div className="p-2 mb-3">
            {data && data?.text ? (
              <Markdown children={data.text} />
            ) : (
              <h1 className="text-xl">
                El capítulo seleccionado no tiene contenido...{" "}
                <span className="text-3xl font-bold">todavía.</span>
              </h1>
            )}
          </div>
          <div className="flex flex-row items-center justify-between p-2">
            {previous && (
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold">
                  {previous.book.name} {previous.chapter}
                </span>
                <Button onClick={onPrevious} variant="outline">
                  Anterior
                </Button>
              </div>
            )}
            {next && (
              <div className="flex flex-col gap-1 text-right">
                <span className="text-sm font-bold">
                  {next.book.name} {next.chapter}
                </span>
                <Button onClick={onNext} variant="outline">
                  Siguiente
                </Button>
              </div>
            )}
          </div>
        </Card>
      </PaddingBox>
    </MainContainer>
  );
};

export default BibleReadPage;
