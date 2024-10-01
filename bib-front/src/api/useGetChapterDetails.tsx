import { Chapter } from "@/types/bible";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from ".";

const getChapter = async (book: string, chapter: string): Promise<Chapter> => {
  const response = await axiosInstance.get<Chapter>(
    "chapters/book-chapter/" + book + "/" + chapter
  );
  return response.data;
};

const useGetChapterDetails = (book: string, chapter: string) => {
  return useQuery({
    queryFn: () => getChapter(book, chapter),
    queryKey: ["chapter", book, chapter],
    enabled: !!book && !!chapter,
  });
};

export default useGetChapterDetails;
