import { useCallback, useState } from "react";

import { useGetTags } from "@/modules/MainPage/hooks";

import {
  TagsQueryParams,
  TagsSortQueryParams,
} from "@/modules/MainPage/models";
import { PageSize, TagsTable } from "@/modules/MainPage/components";
import { Box } from "@mui/material";

export function MainPage() {
  const [query, setQuery] = useState<TagsQueryParams>({
    page: 1,
    pageSize: 15,
    sort: "popular",
    order: "desc",
    site: "stackoverflow",
  });

  const { data, isError, refetch } = useGetTags(query);

  const onPageChange = useCallback(
    (page: number) => {
      setQuery((prev) => ({ ...prev, page }));
    },
    [setQuery],
  );

  const onPageSizeChange = useCallback(
    (pageSize: number) => {
      setQuery((prev) => ({ ...prev, page: 1, pageSize }));
    },
    [setQuery],
  );

  const onSortChange = useCallback(
    (sortQuery: TagsSortQueryParams) => {
      setQuery((prev) => ({ ...prev, ...sortQuery }));
    },
    [setQuery],
  );

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <PageSize pageSize={query.pageSize} onPageSizeChange={onPageSizeChange} />
      <TagsTable
        isError={isError}
        data={data}
        query={query}
        onSortChange={onSortChange}
        onPageChange={onPageChange}
        refetch={refetch}
      />
    </Box>
  );
}

export default MainPage;
