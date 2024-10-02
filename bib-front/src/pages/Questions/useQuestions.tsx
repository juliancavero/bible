import usePostQuestion from "@/api/usePostQuestion";
import AppRoutes from "@/context/router/routes";
import useNav from "@/hooks/useNav";
import useStoredQuestions from "@/hooks/useStoredquestions";
import { useState } from "react";

const useQuestions = () => {
  const { goTo } = useNav();
  const { storeQuestion, getStoredQuestions } = useStoredQuestions();
  const { mutateAsync } = usePostQuestion();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQuestionSubmit = async (question: string) => {
    handleOpen();

    const response = await mutateAsync({ text: question });
    if (response) {
      const { id, text, answer, createdAt } = response;
      storeQuestion({
        id: id,
        text: text,
        answer,
        createdAt,
      });
      handleClose();
      goTo(AppRoutes.QUESTIONS, id);
    }
  };

  const handleStoredQuestionClick = (id: number) => {
    goTo(AppRoutes.QUESTIONS, id);
  };

  const storedQuestions = getStoredQuestions().sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  return {
    open,
    setOpen,
    storedQuestions,
    handleQuestionSubmit,
    handleStoredQuestionClick,
  };
};

export default useQuestions;
