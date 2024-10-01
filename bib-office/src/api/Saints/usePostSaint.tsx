import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "..";

type Saint = {
  name: string;
  text: string;
  day: number;
  month: number;
};

const postSaint = async (saint: Saint): Promise<Saint> => {
  const response = await axiosInstance.post<Saint>("/saints", saint);
  return response.data;
};

const usePostSaint = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postSaint,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["saints"],
      });
    },
  });
};

export default usePostSaint;
