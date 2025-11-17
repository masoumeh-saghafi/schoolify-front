import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";

import { useQuery } from "@tanstack/react-query";
import ms from "ms";
// import { listClassStudent } from "../utilities/api/api";

interface useListClassStudentProps {
  educationGradeId: string;
  pagination?: BaseRequestPaginationParams;
  filters?: Record<string, string>;
}

export const listClassStudentQueryKey = (props: useListClassStudentProps) =>
  [
    "listClassStudent",
    props.educationGradeId,
    props.pagination,
    props.filters,
  ].filter((item) => !!item);

const useListClassStudent = (props: useListClassStudentProps) => {
  return useQuery({
    queryKey: listClassStudentQueryKey(props),
    queryFn: ({ queryKey }) =>
      listClassStudents(
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

export default useListClassStudent;
