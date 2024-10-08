import AnimatedLayout from "@/components/Animated/AnimatedLayout";
import BiColorListItem from "@/components/Containers/BiColorListItem";
import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
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
import useQuestions from "./useQuestions";

const QuestionsPage = () => {
  const {
    open,
    setOpen,
    storedQuestions,
    handleQuestionSubmit,
    handleStoredQuestionClick,
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
            <Card>
              <PaddingBox>
                <StrongText>Consultas pasadas</StrongText>
              </PaddingBox>
              <PaddingBox>
                {storedQuestions.map((question, index) => {
                  return (
                    <BiColorListItem
                      onClick={() => handleStoredQuestionClick(question.id)}
                      colored={index % 2 !== 0}
                      key={index}
                    >
                      {question.text}
                    </BiColorListItem>
                  );
                })}
              </PaddingBox>
            </Card>
          </PaddingBox>
        </MainContainer>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="w-screen h-screen">
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
