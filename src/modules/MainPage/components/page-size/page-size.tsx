import { memo, useRef } from "react";
import { Box, Button, Paper, TextField } from "@mui/material";

export type PageSizeProps = {
  pageSize: number;
  onPageSizeChange?: (_: number) => void;
};

export const PageSize = memo(
  ({ pageSize, onPageSizeChange }: PageSizeProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.valueAsNumber;

      if (value <= 0) e.target.value = "0";
      if (value >= 100) e.target.value = "100";
    };

    return (
      <Box
        component={Paper}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 2,
          padding: 1,
        }}
      >
        <TextField
          fullWidth
          label="Page size"
          type="number"
          defaultValue={pageSize}
          inputRef={ref}
          onChange={onChange}
        />
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={() =>
            ref.current && onPageSizeChange?.(ref.current.valueAsNumber)
          }
        >
          Apply
        </Button>
      </Box>
    );
  },
);

export default PageSize;