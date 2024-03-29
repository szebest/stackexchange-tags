import { PaginatedQueryParams, SortQueryParams } from "@/models";

export type TagsSortOptions = "popular" | "activity" | "name";

export const tagsSortSitesArray = [
  "stackoverflow",
  "serverfault",
  "superuser",
  "mathematics",
  "english",
  "askubuntu",
  "gaming",
] as const;

export type TagsSortSites = (typeof tagsSortSitesArray)[number];

export type TagsSortQueryParams = SortQueryParams<TagsSortOptions>;

export type TagsQueryParams = PaginatedQueryParams &
  TagsSortQueryParams & {
    site: TagsSortSites;
  };
