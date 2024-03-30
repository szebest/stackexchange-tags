import { keepPreviousData } from "@tanstack/react-query";

import { getPaginatedTags } from "@/modules/MainPage/api";

import { useAppQuery } from "@/hooks";

import { TagsQueryParams } from "@/modules/MainPage/models";

export const useGetTags = (query: TagsQueryParams) => {
  const response = useAppQuery({
    queryKey: ["tags", query],
    queryFn: async ({ signal }) => getPaginatedTags(query, signal),
    placeholderData: keepPreviousData,
    retry: 0,
    staleTime: Infinity,
  });

  return response;
};
