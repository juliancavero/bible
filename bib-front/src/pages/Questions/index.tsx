import BiColorListItem from "@/components/Containers/BiColorListItem";
import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import BodyText from "@/components/Text/BodyText";
import StrongText from "@/components/Text/StrongText";
import { CircularProgress, Dialog, styled, Zoom } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import MakeQuestion from "./components/MakeQuestion";
import useQuestions from "./useQuestions";

const QuestionsPage = () => {
  const {
    open,
    storedQuestions,
    handleQuestionSubmit,
    handleStoredQuestionClick,
  } = useQuestions();

  return (
    <>
      <MainContainer>
        <IndexBar>
          <StrongText>Consultas</StrongText>
        </IndexBar>
        <PaddingBox>
          <Card>
            <PaddingBox>
              <BodyText>
                Pregúntale al oráculo y obtén respuestas a tus dudas. El oráculo
                te aconsejará en tus decisiones y te guiará en tu camino
                siguiendo las enseñanzas de la Biblia.
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
                    colored={index % 2 === 0}
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
      <Dialog
        open={open}
        transitionDuration={500}
        TransitionComponent={ZoomTransition}
      >
        <Card>
          <PaddingBox>
            <StrongText>Enviando consulta</StrongText>
          </PaddingBox>
          <PaddingBox>
            <Center>
              <CircularProgress size={100} />
            </Center>
          </PaddingBox>
        </Card>
      </Dialog>
    </>
  );
};

export default QuestionsPage;

const ZoomTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref
) {
  return <Zoom ref={ref} {...props} />;
});

const Center = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "250px",
  height: "250px",
});
