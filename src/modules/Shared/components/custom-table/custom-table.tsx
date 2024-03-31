import {
  Divider,
  Paper,
  SxProps,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
} from "@mui/material";

export type CustomTableProps = {
  sx?: SxProps<Theme>;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
};

export function CustomTable({ sx, header, body, footer }: CustomTableProps) {
  return (
    <Paper sx={{ width: "100%", mb: 2, overflowX: "auto" }}>
      <TableContainer sx={{ overflowY: "auto", ...sx }}>
        <Table stickyHeader aria-labelledby="tags table">
          <TableHead
            sx={{
              "& .MuiTableCell-head": {
                backgroundColor: "primary.main",
                color: "common.white",
              },
            }}
          >
            <TableRow>{header}</TableRow>
          </TableHead>
          <TableBody
            sx={{
              ".MuiTableRow-root:nth-of-type(2n+1)": {
                backgroundColor: "grey.100",
              },
              ".MuiTableRow-root:focus-visible": {
                backgroundColor: "grey.400",
              },
            }}
          >
            {body}
          </TableBody>
        </Table>
      </TableContainer>
      {footer && <Divider variant="fullWidth" />}
      {footer}
    </Paper>
  );
}

export default CustomTable;
