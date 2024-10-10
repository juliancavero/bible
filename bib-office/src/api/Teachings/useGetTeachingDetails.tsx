import { Teaching } from "@/types/bible";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "..";

const getTeaching = async (id: string): Promise<Teaching> => {
  const response = await axiosInstance.get<Teaching>("/teachings/id/" + id);
  return response.data;
};

const useGetTeachingDetails = (id: string) => {
  return useQuery({
    queryFn: () => getTeaching(id),
    queryKey: ["teaching", id],
    enabled: !!id,
  });
};

export default useGetTeachingDetails;
