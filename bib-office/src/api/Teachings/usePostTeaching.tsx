import { Teaching } from "@/types/bible";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "..";

type CreateTeachingDTO = {
  book: string;
  chapter: number;
  text: string;
};

const postTeaching = async (saint: CreateTeachingDTO): Promise<Teaching> => {
  const response = await axiosInstance.post<Teaching>("/teachings", saint);
  return response.data;
};

const usePostTeaching = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTeaching,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teachings"],
      });
    },
  });
};

export default usePostTeaching;
