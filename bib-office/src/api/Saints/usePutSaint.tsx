import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "..";

type Saint = {
  id: number;
  name: string;
  text: string;
  day: number;
  month: number;
};

const putSaint = async (saint: Saint): Promise<Saint> => {
  const response = await axiosInstance.put<Saint>("/saints/" + saint.id, saint);
  return response.data;
};

const usePutSaint = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: putSaint,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["saints"],
      });
      await queryClient.invalidateQueries({
        queryKey: ["saint"],
      });
    },
  });
};

export default usePutSaint;
