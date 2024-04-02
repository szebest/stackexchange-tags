import { Skeleton, TableCell, TableRow } from "@mui/material";

export type TableSkeletonLoaderProps = {
  rowsNumber: number;
  variants: ("text" | "rectangular" | "rounded")[];
  animation?: "wave" | "pulse";
  rowHeight?: string;
};

export function TableSkeletonLoader({
  rowsNumber,
  variants,
  animation = "wave",
  rowHeight = "65px",
}: TableSkeletonLoaderProps) {
  return (
    <>
      {[...Array(rowsNumber)].map((_, index) => (
        <TableRow key={index}>
          {variants.map((variant, i) => (
            <TableCell key={i} sx={{ height: rowHeight }}>
              <Skeleton animation={animation} variant={variant} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}

export default TableSkeletonLoader;
