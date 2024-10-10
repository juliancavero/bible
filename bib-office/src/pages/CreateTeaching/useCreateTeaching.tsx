import usePostTeaching from "@/api/Teachings/usePostTeaching";
import { BibleContext } from "@/context/custom/bible";
import useNav from "@/hooks/useNav";
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
  } = useForm<{
    book: string;
    chapter: number;
    text: string;
    image?: FileList;
  }>({
    defaultValues: {
      book: "",
      chapter: 1,
      text: "",
      image: undefined,
    },
  });

  const onSubmit = async (data: {
    book: string;
    chapter: number;
    text: string;
    image?: FileList;
  }) => {
    const response = await mutateAsync(data);
    if (response) {
      refresh();
    }
  };

  return {
    bibleBooks,
    register,
    handleSubmit,
    errors,
    onSubmit,
    text: watch("text"),
  };
};

export default useCreateTeaching;
