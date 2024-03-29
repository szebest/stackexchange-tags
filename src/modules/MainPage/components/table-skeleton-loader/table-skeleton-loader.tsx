import { Skeleton, TableCell, TableRow } from "@mui/material";

export type TableSkeletonLoaderProps = {
  rowsNumber: number;
  variants: ("text" | "rectangular" | "rounded" | "circular")[];
  animation?: "wave" | "pulse";
};

export function TableSkeletonLoader({
  rowsNumber,
  variants,
  animation = "wave",
}: TableSkeletonLoaderProps) {
  return (
    <>
      {[...Array(rowsNumber)].map((row, index) => (
        <TableRow key={index}>
          {variants.map((variant, i) => (
            <TableCell key={i} sx={{ height: "32px" }}>
              <Skeleton animation={animation} variant={variant} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}

export default TableSkeletonLoader;
