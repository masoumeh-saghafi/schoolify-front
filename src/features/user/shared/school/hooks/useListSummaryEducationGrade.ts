import { listSummaryEducationGrade } from "@schoolify/features/user/school/management/class/utilities/api/api";
import { useQuery } from "@tanstack/react-query";

import ms from "ms";

const useListSummaryEducationGrade = (educationGradeId: string) =>
  useQuery({
    queryKey: ["ListSummaryEducationGrade", educationGradeId],
    queryFn: ({ queryKey }) => listSummaryEducationGrade(queryKey[1] as string),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
    enabled: !!educationGradeId,
  });
export default useListSummaryEducationGrade;
