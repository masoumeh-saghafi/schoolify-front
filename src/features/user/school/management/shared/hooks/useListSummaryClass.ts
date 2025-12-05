import { listSummaryClasses } from "@schoolify/features/user/school/management/classStudents/utilities/api/api";
import { useQuery } from "@tanstack/react-query";

import ms from "ms";

const useListSummaryClass = (classId: string) =>
  useQuery({
    queryKey: ["ListSummaryClass", classId],
    queryFn: ({ queryKey }) => listSummaryClasses(queryKey[1] as string),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
    enabled: !!classId,
  });
export default useListSummaryClass;
