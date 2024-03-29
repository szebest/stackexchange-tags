import { useCallback, useState } from "react";

import { useGetTags } from "@/modules/MainPage/hooks";

import { TagsQueryParams } from "@/modules/MainPage/models";
import {
  PageSize,
  TableFilter,
  TagsTable,
} from "@/modules/MainPage/components";
import { Box, Divider, Paper } from "@mui/material";

export function MainPage() {
  const [query, setQuery] = useState<TagsQueryParams>({
    page: 1,
    pageSize: 10,
    sort: "popular",
    order: "desc",
    site: "stackoverflow",
  });

  const { data, isFetching, isError, refetch } = useGetTags(query);

  const onQueryChange = useCallback(
    (changed: Partial<TagsQueryParams>) => {
      setQuery((prev) => ({ ...prev, ...changed }));
    },
    [setQuery],
  );

  const onPageSizeChange = useCallback(
    (pageSize: number) => {
      onQueryChange({ page: 1, pageSize });
    },
    [onQueryChange],
  );

  return (
    <Box sx={{ display: "grid", gap: 1 }}>
      <Box component={Paper} sx={{ display: "grid", gap: 2, padding: 1 }}>
        <TableFilter query={query} handleChange={onQueryChange} />
        <Divider variant="fullWidth" />
        <PageSize
          pageSize={query.pageSize}
          onPageSizeChange={onPageSizeChange}
        />
      </Box>
      <TagsTable
        isFetching={isFetching}
        isError={isError}
        data={data}
        query={query}
        onQueryChange={onQueryChange}
        refetch={refetch}
      />
    </Box>
  );
}

export default MainPage;
