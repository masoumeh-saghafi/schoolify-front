import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";

import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { listEducationLevel } from "@schoolify/features/user/school/management/educationLevel/utilities/api/api";

interface useListEducationLevelProps {
  educationYearId: string;
  pagination?: BaseRequestPaginationParams;
  filters?: Record<string, string>;
}

export const listEducationLevelQueryKey = (props: useListEducationLevelProps) =>
  [
    "listEducationLevel",
    props.educationYearId,
    props.pagination,
    props.filters,
  ].filter((item) => !!item);

const useListEducationLevel = (props: useListEducationLevelProps) => {
  return useQuery({
    queryKey: listEducationLevelQueryKey(props),
    queryFn: ({ queryKey }) =>
      listEducationLevel(
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
    enabled: !!props.educationYearId,
  });
};

export default useListEducationLevel;
