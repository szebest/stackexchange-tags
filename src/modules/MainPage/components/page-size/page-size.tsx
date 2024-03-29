import { memo, useRef } from "react";
import { Box, Button, TextField } from "@mui/material";

export type PageSizeProps = {
  pageSize: number;
  onPageSizeChange?: (_: number) => void;
};

export const PageSize = memo(
  ({ pageSize, onPageSizeChange }: PageSizeProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.valueAsNumber;

      if (value <= 1) e.target.value = "1";
      if (value >= 100) e.target.value = "100";
    };

    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 1,
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
