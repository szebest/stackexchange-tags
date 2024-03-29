import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import {
  TagsQueryParams,
  TagsFilterSites,
  tagsFilterSitesArray,
} from "@/modules/MainPage/models";

export type TableFilterProps = {
  query: TagsQueryParams;
  handleChange?: (_: Partial<TagsQueryParams>) => void;
};

export function TableFilter({ query, handleChange }: TableFilterProps) {
  return (
    <FormControl>
      <InputLabel id="site-filter-label">Site</InputLabel>
      <Select
        labelId="site-filter-label"
        id="site-filter"
        value={query.site}
        label="Site"
        onChange={(e) =>
          handleChange?.({ site: e.target.value as TagsFilterSites })
        }
      >
        {tagsFilterSitesArray.map((x) => (
          <MenuItem key={x} value={x}>
            {x}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TableFilter;
