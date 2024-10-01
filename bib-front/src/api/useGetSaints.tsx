import { Saint } from "@/types/saints";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from ".";
import { ResponseMapper } from "./mappers";
import { Meta, RequestParams } from "./types";

type SaintsResponse = {
  data: Saint[];
  meta: Meta;
};

const getSaints = async (params: RequestParams): Promise<SaintsResponse> => {
  const response = await axiosInstance.get<SaintsResponse>("/saints", {
    params,
  });
  return ResponseMapper(response);
};

const useGetSaints = (params: RequestParams) => {
  const { order_by, order, page, limit, search } = params;
  return useQuery({
    queryFn: () => getSaints(params),
    queryKey: ["saints", page, limit, order_by, order, search],
    enabled: !!search,
  });
};

export default useGetSaints;
