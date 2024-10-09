import useGetSaintDetails from "@/api/useGetSaintDetails";
import { useFavouriteContext } from "@/context/custom/favourites";
import useNav from "@/hooks/useNav";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const useSaintDetails = () => {
  const { id = "" } = useParams();
  const { goBack } = useNav();
  const { data, isLoading, isError } = useGetSaintDetails(id);
  const { favSaints, addToFavSaint, isSaintFav, removeFromFavSaint } =
    useFavouriteContext();
  const [imageOpen, setImageOpen] = useState(false);

  const todaysDate = useMemo(() => {
    if (!data) return new Date();
    return new Date(
      new Date().getFullYear(),
      Number(data.month) - 1,
      Number(data.day)
    );
  }, [data]);

  const onBack = () => {
    goBack();
  };

  const toggleFavourite = () => {
    if (!data) return;
    const isFavourite = isSaintFav(data);

    if (isFavourite) {
      removeFromFavSaint(data);
    } else {
      addToFavSaint(data);
    }
  };

  const isFavourite = useMemo(() => {
    if (!data) return false;
    return isSaintFav(data);
  }, [data, favSaints]);

  return {
    data,
    onBack,
    isError,
    isLoading,
    imageOpen,
    todaysDate,
    isFavourite,
    setImageOpen,
    toggleFavourite,
  };
};

export default useSaintDetails;
