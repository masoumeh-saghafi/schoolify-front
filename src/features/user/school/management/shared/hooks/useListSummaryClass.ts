import ms from "ms";
import { useQuery } from "@tanstack/react-query";

import { listSummaryClasses } from "@schoolify/features/user/school/management/classStudents/utilities/api/api";

interface UseListSummaryClassProps {
  educationGradeId: string;
}

export const listSummaryClassQueryKey = (props: UseListSummaryClassProps) =>
  ["ListSummaryClass", props.educationGradeId].filter(Boolean);

const useListSummaryClass = (educationGradeId: string) =>
  useQuery({
    queryKey: listSummaryClassQueryKey({ educationGradeId }),
    queryFn: ({ queryKey }) => listSummaryClasses(queryKey[1] as string),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
    enabled: !!educationGradeId,
  });

export default useListSummaryClass;
