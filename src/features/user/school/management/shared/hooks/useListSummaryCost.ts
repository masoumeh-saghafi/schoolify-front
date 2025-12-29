import ms from "ms";
import { useQuery } from "@tanstack/react-query";

import { listSummaryCostType } from "@schoolify/features/user/school/management/cost/utilities/api/api";

interface UseListSummaryCostProps {
  educationYearId: string;
}

export const listSummaryCostQueryKey = (props: UseListSummaryCostProps) =>
  ["ListSummaryCostType", props.educationYearId].filter(Boolean);

const useListSummaryCost = (educationYearId: string) =>
  useQuery({
    queryKey: listSummaryCostQueryKey({ educationYearId }),
    queryFn: ({ queryKey }) => listSummaryCostType(queryKey[1] as string),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
    enabled: !!educationYearId,
  });

export default useListSummaryCost;
