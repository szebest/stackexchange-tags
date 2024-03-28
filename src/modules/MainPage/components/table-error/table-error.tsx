import { Box, Button, TableCell } from "@mui/material";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

export type TableErrorProps = {
  colSpan: number;
  refetch?: VoidFunction;
};

export function TableError({ colSpan, refetch }: TableErrorProps) {
  return (
    <TableCell colSpan={colSpan}>
      <Box
        sx={{
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <NotInterestedIcon fontSize="large" />
        <Box sx={{ mx: "auto" }}>
          An error has occured while loading the data...
        </Box>
        <Button onClick={refetch} color="error" variant="contained">
          Retry
        </Button>
      </Box>
    </TableCell>
  );
}

export default TableError;
