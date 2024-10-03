import usePostSaint from "@/api/Saints/usePostSaint";
import useNav from "@/hooks/useNav";
import useRouteParams from "@/hooks/useRouteParams";
import {
  replaceNextLineForTwoSpaces,
  replaceNumbersForSuperscript,
} from "@/utils/textFormatter";
import { useForm } from "react-hook-form";

const useCreateSaint = () => {
  const { day, month } = useRouteParams({ day: undefined, month: undefined });
  const { refresh } = useNav();
  const { mutateAsync } = usePostSaint();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<{
    name: string;
    text: string;
    day: number;
    month: number;
    isMain: boolean;
    image?: FileList;
  }>({
    defaultValues: {
      name: "",
      text: "",
      day: Number(day) || 1,
      month: Number(month) || 1,
      isMain: false,
      image: undefined,
    },
  });

  const onSubmit = async (data: {
    name: string;
    text: string;
    day: number;
    month: number;
    isMain: boolean;
    image?: FileList;
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
    register,
    handleSubmit,
    errors,
    onSubmit,
    text: watch("text"),
    onReplaceAllNumbersClick,
    onReplaceAllNextLineClick,
  };
};

export default useCreateSaint;
