import AnimatedLayout from "@/components/Animated/AnimatedLayout";
import BiColorListItem from "@/components/Containers/BiColorListItem";
import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import CustomPagination from "@/components/Tables/CustomPagination";
import BodyText from "@/components/Text/BodyText";
import StrongText from "@/components/Text/StrongText";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import MakeQuestion from "./components/MakeQuestion";
import useQuestions, { PAGINATION_SIZE } from "./useQuestions";

const QuestionsPage = () => {
  const {
    open,
    setOpen,
    storedQuestions,
    handleQuestionSubmit,
    handleStoredQuestionClick,
    page,
    onPageChange,
  } = useQuestions();

  return (
    <MainContainer>
      <IndexBar sticky text="Consultas" />
      <AnimatedLayout>
        <MainContainer>
          <PaddingBox>
            <Card>
              <PaddingBox>
                <BodyText>
                  Pregúntale al oráculo y obtén respuestas a tus dudas. El
                  oráculo te aconsejará en tus decisiones y te guiará en tu
                  camino siguiendo las enseñanzas de la Biblia.
                </BodyText>
              </PaddingBox>
              <MakeQuestion onSubmit={handleQuestionSubmit} />
            </Card>
          </PaddingBox>
          <PaddingBox>
            {storedQuestions && storedQuestions.length > 0 && (
              <Card>
                <PaddingBox>
                  <StrongText>Consultas pasadas</StrongText>
                </PaddingBox>
                <PaddingBox>
                  {storedQuestions
                    .slice(page * PAGINATION_SIZE, (page + 1) * PAGINATION_SIZE)
                    .map((question, index) => {
                      return (
                        <BiColorListItem
                          onClick={() => handleStoredQuestionClick(question.id)}
                          colored={index % 2 !== 0}
                          key={index}
                        >
                          <BodyText className="line-clamp-2 overflow-hidden">
                            {question.text}
                          </BodyText>
                        </BiColorListItem>
                      );
                    })}
                </PaddingBox>
                {storedQuestions.length > PAGINATION_SIZE && (
                  <CustomPagination
                    page={page}
                    pageSize={PAGINATION_SIZE}
                    totalItems={storedQuestions.length}
                    pageChange={onPageChange}
                  />
                )}
              </Card>
            )}
          </PaddingBox>
        </MainContainer>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="w-screen h-dvh">
            <DialogHeader>
              <StrongText>Enviando consulta</StrongText>
            </DialogHeader>
            <DialogDescription className="flex justify-center">
              <Loader2
                size={100}
                className="animate-spin text-indigo-800 dark:text-indigo-200"
              />
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </AnimatedLayout>
    </MainContainer>
  );
};

export default QuestionsPage;
