import { useState } from "react";

import { useGetTags } from "@/modules/MainPage/hooks";

import {
  TagsQueryParams,
  TagsSortQueryParams,
} from "@/modules/MainPage/models";
import { TagsTable } from "@/modules/MainPage/components";

export function MainPage() {
  const [query, setQuery] = useState<TagsQueryParams>({
    page: 1,
    pageSize: 20,
    sort: "popular",
    order: "desc",
    site: "stackoverflow",
  });

  const { data, isError, refetch } = useGetTags(query);

  const onPageChange = (page: number) => {
    setQuery((prev) => ({ ...prev, page }));
  };

  const onPageSizeChange = (pageSize: number) => {
    setQuery((prev) => ({ ...prev, page: 1, pageSize }));
  };

  const onSortChange = (sortQuery: TagsSortQueryParams) => {
    setQuery((prev) => ({ ...prev, ...sortQuery }));
  };

  return (
    <TagsTable
      isError={isError}
      data={data}
      query={query}
      onSortChange={onSortChange}
      onPageChange={onPageChange}
      refetch={refetch}
    />
  );
}

export default MainPage;
