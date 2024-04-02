import {
  Chip,
  TableCell,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";

import { TableSkeletonLoader, TableError } from "@/modules/MainPage/components";

import { siteNameToUrl } from "@/modules/MainPage/helpers";

import { AxiosErrorModel, TableHeadModel } from "@/models";
import {
  TagsPaginatedResponse,
  TagsQueryParams,
  TagsSortOptions,
} from "@/modules/MainPage/models";
import { CustomTable } from "@/modules/Shared/components";

export type TagsTableProps = {
  error: AxiosErrorModel | null;
  isError: boolean;
  isFetching: boolean;
  data?: TagsPaginatedResponse;
  query: TagsQueryParams;
  onQueryChange?: (_: Partial<TagsQueryParams>) => void;
  refetch: VoidFunction;
};

const headCells: TableHeadModel<TagsSortOptions>[] = [
  {
    id: "name",
    label: "Tag",
    width: "40%",
  },
  {
    id: "popular",
    label: "Count",
    width: "20%",
  },
  {
    id: "activity",
    label: "Last created",
    width: "40%",
  },
];

export function TagsTable({
  error,
  isError,
  isFetching,
  data,
  query,
  onQueryChange,
  refetch,
}: TagsTableProps) {
  const { order, sort } = query;

  const onSort = (property: TagsSortOptions) => {
    const updatedQuery: Partial<TagsQueryParams> = {
      page: 1,
      sort: property,
      order: sort === property ? (order === "asc" ? "desc" : "asc") : "asc",
    };

    onQueryChange?.(updatedQuery);
  };

  const goToExternalSite = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const renderTableBody = () => {
    if (isError)
      return (
        <TableError
          error={error?.response?.data?.error_message}
          colSpan={3}
          refetch={refetch}
        />
      );

    if (isFetching || !data)
      return (
        <TableSkeletonLoader
          rowsNumber={query.pageSize}
          variants={["text", "text", "text"]}
        />
      );

    const siteUrl = siteNameToUrl(query.site);

    return data.items.map((row) => {
      return (
        <TableRow
          tabIndex={0}
          key={row.name}
          sx={{ cursor: siteUrl ? "pointer" : "inherit" }}
          role="link"
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              siteUrl &&
                goToExternalSite(`${siteUrl}questions/tagged/${row.name}`);
            }
          }}
          onClick={() =>
            siteUrl &&
            goToExternalSite(`${siteUrl}questions/tagged/${row.name}`)
          }
        >
          <TableCell align="right">
            <Chip label={row.name} color="info" />
          </TableCell>
          <TableCell align="right">{row.count}</TableCell>
          <TableCell align="right">
            {row.last_activity_date !== undefined
              ? new Date(row.last_activity_date * 1000).toLocaleString()
              : "—"}
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <CustomTable
      sx={{ maxHeight: "calc(100dvh - 310px)" }}
      header={headCells.map((headCell) => (
        <TableCell
          sx={{ width: headCell.width }}
          align="right"
          key={headCell.id}
          sortDirection={sort === headCell.id ? order : false}
        >
          <TableSortLabel
            active={sort === headCell.id}
            direction={sort === headCell.id ? order : "asc"}
            onClick={() => onSort(headCell.id)}
          >
            {headCell.label}
          </TableSortLabel>
        </TableCell>
      ))}
      body={renderTableBody()}
      footer={
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={data?.total ?? 0}
          rowsPerPage={query.pageSize}
          page={data?.total !== undefined ? query.page - 1 : 0} // Subtract 1 because the MUI table is 0 based, and the stachexchange API is 1 based
          onPageChange={(_, page) => onQueryChange?.({ page: page + 1 })} // Add 1 because we subtraced 1 in the line before
        />
      }
    ></CustomTable>
  );
}

export default TagsTable;
