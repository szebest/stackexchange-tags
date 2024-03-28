import { api } from "@/lib";
import {
  TagsPaginatedResponse,
  TagsQueryParams,
} from "@/modules/MainPage/models";

export const getPaginatedTags = async (
  params: TagsQueryParams,
  signal?: AbortSignal,
) => {
  const response = await api.request<TagsPaginatedResponse>({
    url: `/tags`,
    method: "GET",
    signal,
    params: {
      ...params,
      filter: "!0Xn3jzYe.5-R5tb5ec*2)eMVx", // Stackexchange API filter for tags endpoint. It is used for selecting the data that we need
    },
  });

  return response.data;
};
