import AnimatedLayout from "@/components/Animated/AnimatedLayout";
import Card from "@/components/Containers/Card";
import DividerBox from "@/components/Containers/DividerBox";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import Image from "@/components/Misc/Image";
import Markdown from "@/components/Text/Markdown";
import StrongText from "@/components/Text/StrongText";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ImageDetailsDialog from "./components/ImageDetailsDialog";
import useTeachingDetails from "./useTeachingDetails";

const TeachingDetailsPage = () => {
  const {
    isLoading,
    isError,
    data,
    onBack,
    todaysDate,
    onAnotherDay,
    contiguousDates,
    imageOpen,
    setImageOpen,
  } = useTeachingDetails();
  return (
    <MainContainer>
      <IndexBar sticky text="Enseñanzas" onClick={onBack} />
      <AnimatedLayout>
        <MainContainer>
          <PaddingBox>
            <Card>
              {isLoading && <Loading />}
              {isError && <Error />}
              {data && (
                <div>
                  <PaddingBox multiplier={2} className="text-right">
                    <span className="capitalize italic font-extrabold text-2xl">
                      {todaysDate}
                    </span>
                  </PaddingBox>
                  <PaddingBox multiplier={2}>
                    <StrongText className="italic">{""}</StrongText>
                  </PaddingBox>
                  <div className="flex flex-col items-center md:block">
                    {data.image && (
                      <Image
                        src={data.image}
                        alt={data.book || ""}
                        className="float-none md:float-right w-4/5 md:w-1/3 md:max-w-96"
                        onClick={() => setImageOpen(true)}
                      />
                    )}
                    <Markdown indent={false} children={data.text} />
                  </div>
                  {data && (
                    <ImageDetailsDialog
                      open={imageOpen}
                      setOpen={setImageOpen}
                      teaching={data}
                    />
                  )}
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
                            {contiguousDates.next.day}/
                            {contiguousDates.next.month}
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
                </div>
              )}
            </Card>
          </PaddingBox>
        </MainContainer>
      </AnimatedLayout>
    </MainContainer>
  );
};

export default TeachingDetailsPage;

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
          Hubo un error al cargar el Sermón de hoy. Inténtalo de nuevo más
          tarde.
        </StrongText>
      </PaddingBox>
    </DividerBox>
  );
};
