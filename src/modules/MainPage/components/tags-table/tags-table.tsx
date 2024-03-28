import {
  Box,
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

export type TagsTableProps = {
  isError: boolean;
  data?: TagsPaginatedResponse;
  query: TagsQueryParams;
  onSortChange?: (_: TagsSortQueryParams) => void;
  onPageChange?: (_: number) => void;
  refetch: VoidFunction;
};

const headCells: TableHeadModel<TagsSortOptions>[] = [
  {
    id: "name",
    label: "Tag",
    width: "25%",
  },
  {
    id: "popular",
    label: "Count",
    width: "25%",
  },
  {
    id: "activity",
    label: "Last created on",
    width: "50%",
  },
];

export function TagsTable({
  isError,
  data,
  query,
  onSortChange,
  onPageChange,
  refetch,
}: TagsTableProps) {
  const { order, sort } = query;

  const onSort = (property: TagsSortOptions) => {
    const newSort: TagsSortQueryParams = {
      sort: property,
      order: sort === property ? (order === "asc" ? "desc" : "asc") : "asc",
    };

    onSortChange?.(newSort);
  };

  const renderTableBody = () => {
    if (isError) return <TableError colSpan={3} refetch={refetch} />;

    if (!data)
      return (
        <TableSkeletonLoader
          rowsNumber={query.pageSize}
          variants={["text", "text", "text"]}
        />
      );

    return data.items.map((row) => {
      return (
        <TableRow key={row.name}>
          <TableCell align="right">{row.name}</TableCell>
          <TableCell align="right">{row.count}</TableCell>
          <TableCell align="right">{row.last_activity_date}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ overflowX: "initial" }}>
          <Table stickyHeader aria-labelledby="tags table">
            <TableHead>
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
            <TableBody>{renderTableBody()}</TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={data?.total ?? 0}
          rowsPerPage={query.pageSize}
          page={query.page - 1} // Subtract 1 because the MUI table is 0 based, and the stachexchange API is 1 based
          onPageChange={(_, page) => onPageChange?.(page + 1)} // Add 1 because we subtraced 1 in the line before
        />
      </Paper>
    </Box>
  );
}

export default TagsTable;
