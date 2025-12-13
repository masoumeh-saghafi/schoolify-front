import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";

import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { listEducationYear } from "@schoolify/features/user/school/management/educationYear/utilities/api/api";

interface useListEducationYearProps {
  schoolId: string;
  pagination?: BaseRequestPaginationParams;
  filters?: Record<string, string>;
}

export const listEducationYearQueryKey = (props: useListEducationYearProps) =>
  ["listEducationYear", props.schoolId, props.pagination, props.filters].filter(
    (item) => !!item
  );

const useListEducationYear = (props: useListEducationYearProps) => {
  return useQuery({
    queryKey: listEducationYearQueryKey(props),
    queryFn: ({ queryKey }) =>
      listEducationYear(
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
    enabled: !!props.schoolId,
  });
};

export default useListEducationYear;
