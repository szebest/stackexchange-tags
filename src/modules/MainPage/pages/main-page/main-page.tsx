import { useCallback } from "react";
import { Box, Button, Divider, Paper } from "@mui/material";

import {
  PageSize,
  TableFilter,
  TagsTable,
} from "@/modules/MainPage/components";

import {
  QueryParamsProvider,
  useQueryParams,
} from "@/modules/MainPage/providers";
import { useGetTags } from "@/modules/MainPage/hooks";

import { TagsQueryParams } from "@/modules/MainPage/models";

function MainPageContent() {
  const { query, setQuery, resetQuery } = useQueryParams();
  const { data, isFetching, isError, error, refetch } = useGetTags(query);

  const onQueryChange = useCallback(
    (changed: Partial<TagsQueryParams>) => {
      setQuery((prev) => ({ ...prev, ...changed }));
    },
    [setQuery],
  );

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Button
        onClick={resetQuery}
        color="primary"
        variant="contained"
        sx={{ width: "max-content", m: "0 0 0 auto" }}
      >
        Reset query
      </Button>
      <Box component={Paper} sx={{ display: "grid", gap: 2, padding: 1 }}>
        <TableFilter query={query} handleChange={onQueryChange} />
        <Divider variant="fullWidth" />
        <PageSize
          defaultPageSize={query.pageSize}
          onQueryChange={onQueryChange}
        />
      </Box>
      <TagsTable
        isFetching={isFetching}
        isError={isError}
        errorMessage={error?.response?.data?.error_message}
        data={data}
        query={query}
        onQueryChange={onQueryChange}
        refetch={refetch}
      />
    </Box>
  );
}

export function MainPage() {
  return (
    <QueryParamsProvider>
      <MainPageContent />
    </QueryParamsProvider>
  );
}

export default MainPage;
