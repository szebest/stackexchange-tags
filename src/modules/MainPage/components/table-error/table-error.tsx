import { Box, Button, Stack, TableCell, TableRow } from "@mui/material";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

export type TableErrorProps = {
  colSpan: number;
  refetch?: VoidFunction;
};

export function TableError({ colSpan, refetch }: TableErrorProps) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>
        <Stack
          sx={{
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
        </Stack>
      </TableCell>
    </TableRow>
  );
}

export default TableError;
