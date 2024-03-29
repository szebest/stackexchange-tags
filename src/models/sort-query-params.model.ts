export const sortOrderDirecttionsArray = ["asc", "desc"] as const;

export type SortOrderDirecttions = (typeof sortOrderDirecttionsArray)[number];

export type SortQueryParams<T> = {
  sort: T;
  order: "asc" | "desc";
};
