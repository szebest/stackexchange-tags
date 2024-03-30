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

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      ref.current && onPageSizeChange?.(ref.current.valueAsNumber);
    };

    return (
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <TextField
            size="small"
            fullWidth
            label="Page size"
            type="number"
            defaultValue={pageSize}
            inputRef={ref}
            onChange={onChange}
          />
          <Button
            sx={{ height: "100%" }}
            color="primary"
            variant="contained"
            type="submit"
          >
            Apply
          </Button>
        </Box>
      </form>
    );
  },
);

export default PageSize;
