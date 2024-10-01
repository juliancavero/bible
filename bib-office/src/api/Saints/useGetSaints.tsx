import { Saint } from "@/types/saints";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "..";
import { ResponseMapper } from "../mappers";
import { Meta, RequestParams } from "../types";

type SaintsResponse = {
  data: Saint[];
  meta: Meta;
};

type Params = RequestParams & {
  day?: string;
  month?: string;
};

const getSaints = async (params: Params): Promise<SaintsResponse> => {
  const { day, month, limit, order, order_by, page, search } = params;
  const response = await axiosInstance.get<SaintsResponse>("/saints", {
    params: {
      ...(day && { day }),
      ...(month && { month }),
      ...(limit && { limit }),
      ...(order && { order }),
      ...(order_by && { order_by }),
      ...(page && { page }),
      ...(search && { search }),
    },
  });
  return ResponseMapper(response);
};

const useGetSaints = (params: Params) => {
  const { order_by, order, page, limit, search, day, month } = params;
  return useQuery({
    queryFn: () => getSaints(params),
    queryKey: ["saints", page, limit, order_by, order, search, day, month],
  });
};

export default useGetSaints;
