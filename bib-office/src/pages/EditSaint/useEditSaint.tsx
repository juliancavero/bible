import useGetSaintDetails from "@/api/Saints/useGetSaintDetails";
import usePutSaint from "@/api/Saints/usePutSaint";
import useNav from "@/hooks/useNav";
import {
  replaceNextLineForTwoSpaces,
  replaceNumbersForSuperscript,
} from "@/utils/textFormatter";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const useEditSaint = () => {
  const { navigate } = useNav();
  const { id } = useParams<{ id: string }>();
  const { data } = useGetSaintDetails(id || "");
  const { mutateAsync } = usePutSaint();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<{
    name: string;
    text: string;
    day: number;
    month: number;
    isMain: boolean;
  }>({
    defaultValues: {
      name: "",
      text: "",
      day: 1,
      month: 1,
      isMain: false,
    },
  });

  const onSubmit = async (data: {
    name: string;
    text: string;
    day: number;
    month: number;
  }) => {
    const response = await mutateAsync({
      id: Number(id),
      ...data,
    });
    if (response) {
      navigate("/saints");
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
      setValue("name", data.name);
      setValue("text", data.text);
      setValue("day", data.day);
      setValue("month", data.month);
      setValue("isMain", data.isMain);
    }
  }, [data]);

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

export default useEditSaint;
