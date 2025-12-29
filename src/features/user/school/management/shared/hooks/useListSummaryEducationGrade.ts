import ms from "ms";
import { useQuery } from "@tanstack/react-query";

import { listSummaryEducationGrade } from "@schoolify/features/user/school/management/class/utilities/api/api";

interface UseListSummaryEducationGradeProps {
  educationLevelId: string;
}

export const listSummaryEducationGradeQueryKey = (
  props: UseListSummaryEducationGradeProps
) => ["ListSummaryEducationGrade", props.educationLevelId].filter(Boolean);

const useListSummaryEducationGrade = (educationLevelId: string) =>
  useQuery({
    queryKey: listSummaryEducationGradeQueryKey({ educationLevelId }),
    queryFn: ({ queryKey }) => listSummaryEducationGrade(queryKey[1] as string),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
    enabled: !!educationLevelId,
  });

export default useListSummaryEducationGrade;
