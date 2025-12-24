import ms from "ms";
import { useQuery } from "@tanstack/react-query";

import { listSummaryEducationLevel } from "@schoolify/features/user/school/management/educationGrade/utilities/api/api";


const useListSummaryEducationLevel = (educationYearId: string) =>
  useQuery({
    queryKey: ["ListSummaryEducationLevel", educationYearId],
    queryFn: ({ queryKey }) => listSummaryEducationLevel(queryKey[1] as string),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
    enabled: !!educationYearId,
  });
export default useListSummaryEducationLevel;
