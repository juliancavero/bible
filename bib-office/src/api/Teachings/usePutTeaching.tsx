import { Teaching } from "@/types/bible";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "..";

type CreateTeachingDTO = {
  id: number;
  book: string;
  chapter: number;
  text: string;
};

const putTeaching = async (saint: CreateTeachingDTO): Promise<Teaching> => {
  const response = await axiosInstance.put("/teachings/" + saint.id, saint);
  return response.data;
};

const usePutTeaching = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: putTeaching,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["teachings"],
      });
      await queryClient.invalidateQueries({
        queryKey: ["teaching"],
      });
    },
  });
};

export default usePutTeaching;
