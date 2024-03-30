import {
  TagsFilterSites,
  tagsFilterSitesArray,
} from "@/modules/MainPage/models";

const siteToUrlMap = new Map([
  [tagsFilterSitesArray[0], "https://stackoverflow.com/"],
  [tagsFilterSitesArray[1], "https://serverfault.com/"],
  [tagsFilterSitesArray[2], "https://superuser.com/"],
  [tagsFilterSitesArray[3], "https://math.stackexchange.com/"],
  [tagsFilterSitesArray[4], "https://english.stackexchange.com/"],
  [tagsFilterSitesArray[5], "https://askubuntu.com/"],
  [tagsFilterSitesArray[6], "https://gaming.stackexchange.com/"],
]);

export const siteNameToUrl = (site: TagsFilterSites) =>
  siteToUrlMap.get(site) ?? undefined;
