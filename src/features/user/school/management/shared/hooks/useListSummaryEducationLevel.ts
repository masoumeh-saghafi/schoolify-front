import ms from "ms";
import { useQuery } from "@tanstack/react-query";

import { listSummaryEducationLevel } from "@schoolify/features/user/school/management/educationGrade/utilities/api/api";

interface UseListSummaryEducationLevelProps {
  educationYearId: string;
}

export const listSummaryEducationLevelQueryKey = (
  props: UseListSummaryEducationLevelProps
) => ["ListSummaryEducationLevel", props.educationYearId].filter(Boolean);

const useListSummaryEducationLevel = (educationYearId: string) =>
  useQuery({
    queryKey: listSummaryEducationLevelQueryKey({ educationYearId }),
    queryFn: ({ queryKey }) => listSummaryEducationLevel(queryKey[1] as string),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
    enabled: !!educationYearId,
  });

export default useListSummaryEducationLevel;
