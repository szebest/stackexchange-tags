import { useRef } from "react";
import { QueryKey, useQuery } from "@tanstack/react-query";

export const useAppQuery = <
  TQueryFnData,
  TError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  ...args: Parameters<typeof useQuery<TQueryFnData, TError, TData, TQueryKey>>
) => {
  const previousDataRef = useRef<TData>();

  const result = useQuery(...args);
  const resultCloned = { ...result };

  if (!result.isError) {
    previousDataRef.current = resultCloned.data;
  } else {
    resultCloned.data = previousDataRef.current;
  }

  return resultCloned;
};
