import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import { HorizontalArrow } from "@/components/Icons/Arrows";
import StrongText from "@/components/Text/StrongText";
import MakeQuestion from "../Questions/components/MakeQuestion";
import ChatBox from "./components/ChatBox";
import useQuestionAnswers from "./useQuestionAnswers";

const QuestionAnswersPage = () => {
  const { goBack, question } = useQuestionAnswers();
  return (
    <MainContainer>
      <IndexBar>
        <HorizontalArrow withButton onClick={goBack} />
        <StrongText>Respuestas</StrongText>
      </IndexBar>
      <PaddingBox>
        <Card>
          <PaddingBox>
            {question ? (
              <ChatBox question={question.text} answer={question.answer} />
            ) : (
              <StrongText>No se encontró la pregunta</StrongText>
            )}
          </PaddingBox>
        </Card>
      </PaddingBox>
      <PaddingBox>
        <Card>
          <PaddingBox>
            <StrongText>Vuelve a consultar</StrongText>
          </PaddingBox>
          <MakeQuestion short onSubmit={() => {}} />
        </Card>
      </PaddingBox>
    </MainContainer>
  );
};

export default QuestionAnswersPage;
