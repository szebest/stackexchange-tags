import {
  Box,
  Button,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

export type TableErrorProps = {
  colSpan: number;
  errorMessage?: string;
  refetch?: VoidFunction;
};

export function TableError({
  colSpan,
  errorMessage,
  refetch,
}: TableErrorProps) {
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
          <Box sx={{ mx: "auto", display: "grid", placeItems: "center" }}>
            <Typography variant="body2">
              An error has occured while loading the data...
            </Typography>
            {errorMessage && (
              <Typography variant="body2">
                Error message: {errorMessage}
              </Typography>
            )}
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
