import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";

import { TableSkeletonLoader, TableError } from "@/modules/MainPage/components";

import { TableHeadModel } from "@/models";
import {
  TagsPaginatedResponse,
  TagsQueryParams,
  TagsSortOptions,
  TagsSortQueryParams,
} from "@/modules/MainPage/models";
import { Link } from "react-router-dom";
import { siteNameToUrl } from "@/modules/MainPage/helpers";

export type TagsTableProps = {
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
  isError,
  isFetching,
  data,
  query,
  onQueryChange,
  refetch,
}: TagsTableProps) {
  const { order, sort } = query;

  const onSort = (property: TagsSortOptions) => {
    const newSort: TagsSortQueryParams = {
      sort: property,
      order: sort === property ? (order === "asc" ? "desc" : "asc") : "asc",
    };

    onQueryChange?.(newSort);
  };

  const renderTableBody = () => {
    if (isError) return <TableError colSpan={3} refetch={refetch} />;

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
          target={siteUrl ? "_blank" : "_self"}
          component={Link}
          to={
            siteUrl
              ? `${siteUrl}questions/tagged/${row.name}`
              : window.location.pathname
          }
          key={row.name}
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
    <Paper sx={{ width: "100%", mb: 2, overflowX: "auto" }}>
      <TableContainer
        sx={{ maxHeight: "calc(100dvh - 310px)", overflowY: "auto" }}
      >
        <Table stickyHeader aria-labelledby="tags table">
          <TableHead
            sx={{
              "& .MuiTableCell-head": {
                backgroundColor: "primary.main",
                color: "common.white",
              },
            }}
          >
            <TableRow>
              {headCells.map((headCell) => (
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
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              ".MuiTableRow-root:nth-of-type(2n+1)": {
                backgroundColor: "grey.100",
              },
            }}
          >
            {renderTableBody()}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={data?.total ?? 0}
        rowsPerPage={query.pageSize}
        page={query.page - 1} // Subtract 1 because the MUI table is 0 based, and the stachexchange API is 1 based
        onPageChange={(_, page) => onQueryChange?.({ page: page + 1 })} // Add 1 because we subtraced 1 in the line before
      />
    </Paper>
  );
}

export default TagsTable;
