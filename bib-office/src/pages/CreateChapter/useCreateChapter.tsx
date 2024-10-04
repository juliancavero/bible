import usePostChapter from "@/api/Chapters/usePostChapter";
import { BibleContext } from "@/context/custom/bible";
import useNav from "@/hooks/useNav";
import useRouteParams from "@/hooks/useRouteParams";
import {
  insertBeginingTitle,
  insertTitles,
  replaceNextLineForTwoSpaces,
  replaceNumbersForSuperscript,
} from "@/utils/textFormatter";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

const useCreateChapter = () => {
  const { book, chapter } = useRouteParams({
    book: undefined,
    chapter: undefined,
  });
  const { bibleBooks } = useContext(BibleContext);
  const { navigate } = useNav();
  const { mutateAsync } = usePostChapter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<{
    book: string;
    chapter: number;
    text: string;
  }>({
    defaultValues: {
      book: book || "",
      chapter: Number(chapter) || 1,
      text: "",
    },
  });

  const onSubmit = async (data: {
    book: string;
    chapter: number;
    text: string;
  }) => {
    const response = await mutateAsync(data);
    if (response) {
      navigate(`/create-chapter?book=${data.book}&chapter=${data.chapter + 1}`);
    }
  };

  const onReplaceAllNumbersClick = () => {
    setValue("text", replaceNumbersForSuperscript(watch("text")));
  };

  const onReplaceAllNextLineClick = () => {
    setValue("text", replaceNextLineForTwoSpaces(watch("text")));
  };

  const onInsertTitlesClick = () => {
    setValue("text", insertTitles(watch("text")));
  };

  const onInsertBeginingTitleClick = () => {
    setValue("text", insertBeginingTitle(watch("text")));
  };

  const allTextModifiersAtOnce = () => {
    const text = watch("text");

    const first = replaceNumbersForSuperscript(text);
    const second = replaceNextLineForTwoSpaces(first);
    const third = insertTitles(second);
    const fourth = insertBeginingTitle(third);

    setValue("text", fourth);
  };

  useEffect(() => {
    if (book && chapter) {
      setValue("book", book);
      setValue("chapter", Number(chapter));
    }
  }, [book, chapter]);

  return {
    bibleBooks,
    register,
    handleSubmit,
    errors,
    onSubmit,
    text: watch("text"),
    onInsertTitlesClick,
    onReplaceAllNumbersClick,
    onReplaceAllNextLineClick,
    onInsertBeginingTitleClick,
    allTextModifiersAtOnce,
  };
};

export default useCreateChapter;
