import { useSearchParams } from "react-router-dom";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  TagsQueryParams,
  TagsSortOptions,
  TagsFilterSites,
  tagsSortOptionsArray,
  tagsFilterSitesArray,
} from "@/modules/MainPage/models";
import { SortOrderDirecttions, sortOrderDirecttionsArray } from "@/models";

type QueryParamsContextValue = {
  query: TagsQueryParams;
  setQuery: React.Dispatch<React.SetStateAction<TagsQueryParams>>;
};

const QueryParamsContext = createContext<QueryParamsContextValue | undefined>(
  undefined,
);

export type QueryParamsProviderProps = PropsWithChildren;

export const QueryParamsProvider = ({ children }: QueryParamsProviderProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const parseQuery = (): TagsQueryParams => {
    const DEFAULT_PAGE = 1;
    const DEFAULT_PAGE_SIZE = 20;
    const DEFAULT_SORT = "popular";
    const DEFAULT_ORDER = "desc";
    const DEFAULT_SITE = "stackoverflow";

    const page = +(searchParams.get("page") ?? DEFAULT_PAGE);
    const pageSize = +(searchParams.get("pageSize") ?? DEFAULT_PAGE_SIZE);
    const sort = (searchParams.get("sort") ?? DEFAULT_SORT) as TagsSortOptions;
    const order = (searchParams.get("order") ??
      DEFAULT_ORDER) as SortOrderDirecttions;
    const site = (searchParams.get("site") ?? DEFAULT_SITE) as TagsFilterSites;

    return {
      page: isNaN(page) ? DEFAULT_PAGE : page,
      pageSize: isNaN(pageSize) ? DEFAULT_PAGE_SIZE : pageSize,
      sort: tagsSortOptionsArray.includes(sort) ? sort : DEFAULT_SORT,
      order: sortOrderDirecttionsArray.includes(order) ? order : DEFAULT_ORDER,
      site: tagsFilterSitesArray.includes(site) ? site : DEFAULT_SITE,
    };
  };

  const [query, setQuery] = useState<TagsQueryParams>(parseQuery());

  const ctx = useMemo(
    () => ({
      query,
      setQuery,
    }),
    [query],
  );

  useEffect(() => {
    setSearchParams(
      () => {
        const newSearchParams: URLSearchParams = new URLSearchParams();

        Object.entries(query).forEach(([key, value]) => {
          newSearchParams.set(key, value.toString());
        });

        return newSearchParams;
      },
      {
        replace: true,
      },
    );
  }, [query]);

  return (
    <QueryParamsContext.Provider value={ctx}>
      {children}
    </QueryParamsContext.Provider>
  );
};

export const useQueryParams = () => {
  const ctx = useContext(QueryParamsContext);
  if (!ctx) {
    throw new Error("useQueryParams must be used within QueryParamsProvider");
  }
  return ctx;
};
