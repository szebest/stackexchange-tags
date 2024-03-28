import { PaginatedQueryParams, SortQueryParams } from "@/models";

export type TagsSortOptions = "popular" | "activity" | "name";

export type TagsSortSites =
  | "stackoverflow"
  | "serverfault"
  | "superuser"
  | "mathematics"
  | "english"
  | "askubuntu"
  | "gaming";

export type TagsSortQueryParams = SortQueryParams<TagsSortOptions>;

export type TagsQueryParams = PaginatedQueryParams &
  TagsSortQueryParams & {
    site: TagsSortSites;
  };
