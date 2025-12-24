import ms from "ms";
import { useQuery } from "@tanstack/react-query";

import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import { listCostType } from "@schoolify/features/user/school/management/costType/utilities/api/api";

interface useListCostTypeProps {
  educationYearId: string;
  pagination?: BaseRequestPaginationParams;
  filters?: Record<string, string>;
}

export const listCostTypeQueryKey = (props: useListCostTypeProps) =>
  [
    "listCostType",
    props.educationYearId,
    props.pagination,
    props.filters,
  ].filter((item) => !!item);

const useListCostType = (props: useListCostTypeProps) => {
  return useQuery({
    queryKey: listCostTypeQueryKey(props),
    queryFn: ({ queryKey }) =>
      listCostType(
        queryKey[1] as string,
        queryKey[2] as BaseRequestPaginationParams,
        queryKey[3] as Record<string, string>
      ),
    staleTime: ms("1h"),
    gcTime: ms("24h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    select: (data) => data.data,

  });
};

export default useListCostType;
