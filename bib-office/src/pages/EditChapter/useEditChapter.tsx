import useGetChapterDetails from "@/api/Chapters/useGetChapterDetails";
import usePutChapter from "@/api/Chapters/usePutChapter";
import { BibleContext } from "@/context/custom/bible";
import useNav from "@/hooks/useNav";
import {
  replaceNextLineForTwoSpaces,
  replaceNumbersForSuperscript,
} from "@/utils/textFormatter";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const useEditChapter = () => {
  const { id } = useParams<{ id: string }>();
  const { bibleBooks } = useContext(BibleContext);
  const { navigate } = useNav();
  const { data } = useGetChapterDetails(id || "");
  const { mutateAsync } = usePutChapter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<{
    book: string;
    chapter: number;
    text: string;
  }>({
    defaultValues: {
      book: "",
      chapter: 1,
      text: "",
    },
  });

  const onSubmit = async (data: {
    book: string;
    chapter: number;
    text: string;
  }) => {
    const response = await mutateAsync({
      id: Number(id),
      ...data,
    });
    if (response) {
      navigate("/chapters");
    }
  };

  const onReplaceAllNumbersClick = () => {
    setValue("text", replaceNumbersForSuperscript(watch("text")));
  };

  const onReplaceAllNextLineClick = () => {
    setValue("text", replaceNextLineForTwoSpaces(watch("text")));
  };

  useEffect(() => {
    if (data) {
      setValue("book", data.book);
      setValue("chapter", data.chapter);
      setValue("text", data.text);
    }
  }, [data]);

  return {
    bibleBooks,
    register,
    handleSubmit,
    errors,
    onSubmit,
    text: watch("text"),
    onReplaceAllNumbersClick,
    onReplaceAllNextLineClick,
  };
};

export default useEditChapter;
