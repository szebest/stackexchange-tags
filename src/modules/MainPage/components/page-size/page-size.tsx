import { memo, useState } from "react";
import { Box, Button, TextField } from "@mui/material";

import { TagsQueryParams } from "@/modules/MainPage/models";

export type PageSizeProps = {
  defaultPageSize: number;
  onQueryChange?: (_: Partial<TagsQueryParams>) => void;
};

export const PageSize = memo(
  ({ defaultPageSize, onQueryChange }: PageSizeProps) => {
    const [pageSize, setPageSize] = useState(defaultPageSize);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.valueAsNumber;

      if (value <= 1 || isNaN(value)) value = 1;
      if (value >= 100) value = 100;

      setPageSize(value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      onQueryChange?.({ page: 1, pageSize });
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
            value={pageSize}
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
