import { useState } from "react";

import { Box } from "@mui/material";

import { useGetTags } from "@/modules/MainPage/hooks";

import {
  TagsQueryParams,
  TagsSortQueryParams,
} from "@/modules/MainPage/models";

export function MainPage() {
  const [query, setQuery] = useState<TagsQueryParams>({
    page: 1,
    pageSize: 20,
    sort: "popular",
    order: "desc",
    site: "stackoverflow",
  });

  const response = useGetTags(query);

  const onPageChange = (page: number) => {
    setQuery((prev) => ({ ...prev, page }));
  };

  const onPageSizeChange = (pageSize: number) => {
    setQuery((prev) => ({ ...prev, page: 1, pageSize }));
  };

  const onSortChange = (sortQuery: TagsSortQueryParams) => {
    setQuery((prev) => ({ ...prev, ...sortQuery }));
  };

  return <Box>main-page works!</Box>;
}

export default MainPage;
