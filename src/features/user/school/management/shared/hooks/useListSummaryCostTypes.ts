import ms from "ms";
import { useQuery } from "@tanstack/react-query";

import { ListSummaryCostTypes } from "@schoolify/features/user/school/management/costType/utilities/api/api";

interface UseListSummaryCostTypeProps {
  educationYearId: string;
}

export const listSummaryCostTypeQueryKey = (
  props: UseListSummaryCostTypeProps
) => ["ListSummaryCostType", props.educationYearId].filter(Boolean);

const useListSummaryCostType = (educationYearId: string) =>
  useQuery({
    queryKey: listSummaryCostTypeQueryKey({ educationYearId }),
    queryFn: ({ queryKey }) => ListSummaryCostTypes(queryKey[1] as string),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
    enabled: !!educationYearId,
  });

export default useListSummaryCostType;
