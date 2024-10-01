import usePostTeaching from "@/api/Teachings/usePostTeaching";
import { BibleContext } from "@/context/custom/bible";
import useNav from "@/hooks/useNav";
import {
  replaceNextLineForTwoSpaces,
  replaceNumbersForSuperscript,
} from "@/utils/textFormatter";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const useCreateTeaching = () => {
  const { bibleBooks } = useContext(BibleContext);
  const { refresh } = useNav();
  const { mutateAsync } = usePostTeaching();
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
    const response = await mutateAsync(data);
    if (response) {
      refresh();
    }
  };

  const onReplaceAllNumbersClick = () => {
    setValue("text", replaceNumbersForSuperscript(watch("text")));
  };

  const onReplaceAllNextLineClick = () => {
    setValue("text", replaceNextLineForTwoSpaces(watch("text")));
  };

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

export default useCreateTeaching;
