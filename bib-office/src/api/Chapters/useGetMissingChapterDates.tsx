import { MissingChapters } from "@/types/bible";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "..";

const getMissingChapters = async (): Promise<MissingChapters[]> => {
  const response = await axiosInstance.get<MissingChapters[]>(
    "/chapters/missing"
  );
  return response.data;
};

const useGetMissingChapterDates = () => {
  return useQuery({
    queryFn: () => getMissingChapters(),
    queryKey: ["chapters-missing"],
  });
};

export default useGetMissingChapterDates;
