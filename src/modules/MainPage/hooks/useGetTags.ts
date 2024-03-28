import { useQuery } from "@tanstack/react-query";

import { getPaginatedTags } from "@/modules/MainPage/api";

import { TagsQueryParams } from "@/modules/MainPage/models";

export const useGetTags = (query: TagsQueryParams) => {
  const response = useQuery({
    queryKey: ["tags", query],
    queryFn: async ({ signal }) => getPaginatedTags(query, signal),
  });

  return response;
};
