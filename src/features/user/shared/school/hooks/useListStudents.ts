import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import { listStudent } from "@schoolify/features/user/school/management/student/utilities/api/api";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

interface useListStudentsProps {
  schoolId: string;
  pagination?: BaseRequestPaginationParams;
  filters?: Record<string, string>;
  disabled?: boolean;
}

export const listStudentsQueryKey = (props: useListStudentsProps) =>
  ["listStudents", props.schoolId, props.pagination, props.filters].filter(
    (item) => !!item
  );

const useListStudents = (props: useListStudentsProps) => {
  return useQuery({
    queryKey: listStudentsQueryKey(props),
    queryFn: ({ queryKey }) => {
      console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFF     -   ", queryKey);

      return listStudent(
        queryKey[1] as string,
        queryKey[2] as BaseRequestPaginationParams,
        queryKey[3] as Record<string, string>
      );
    },
    staleTime: ms("1h"),
    gcTime: ms("24h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    select: (data) => data.data,
    enabled: !props.disabled,
  });
};

export default useListStudents;
