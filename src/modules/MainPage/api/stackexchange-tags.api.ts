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
    params,
  });

  return response.data;
};
