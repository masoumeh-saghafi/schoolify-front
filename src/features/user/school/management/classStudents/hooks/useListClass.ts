import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";

import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { listClass } from "../../class/utilities/api/api";
// import { listClass } from "../utilities/api/api";

interface useListClassProps {
  educationGradeId: string;
  pagination?: BaseRequestPaginationParams;
  filters?: Record<string, string>;
}

export const listClassQueryKey = (props: useListClassProps) =>
  ["listClass", props.educationGradeId, props.pagination, props.filters].filter(
    (item) => !!item
  );

const useListClass = (props: useListClassProps) => {
  return useQuery({
    queryKey: listClassQueryKey(props),
    queryFn: ({ queryKey }) =>
      listClass(
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
    enabled: !!props.educationGradeId,
  });
};

export default useListClass;
