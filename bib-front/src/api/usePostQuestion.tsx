import { Question } from "@/types/questions";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from ".";

type CreateQuestionDTO = {
  text: string;
};

const postQuestion = async (body: CreateQuestionDTO): Promise<Question> => {
  const response = await axiosInstance.post<Question>("/questions", body);
  return response.data;
};

const usePostQuestion = () => {
  return useMutation({
    mutationFn: postQuestion,
  });
};

export default usePostQuestion;
