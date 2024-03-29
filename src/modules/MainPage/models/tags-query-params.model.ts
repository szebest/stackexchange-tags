import { PaginatedQueryParams, SortQueryParams } from "@/models";

export const tagsSortOptionsArray = ["popular", "activity", "name"] as const;

export type TagsSortOptions = (typeof tagsSortOptionsArray)[number];

export const tagsFilterSitesArray = [
  "stackoverflow",
  "serverfault",
  "superuser",
  "mathematics",
  "english",
  "askubuntu",
  "gaming",
] as const;

export type TagsFilterSites = (typeof tagsFilterSitesArray)[number];

export type TagsSortQueryParams = SortQueryParams<TagsSortOptions>;

export type TagsQueryParams = PaginatedQueryParams &
  TagsSortQueryParams & {
    site: TagsFilterSites;
  };
