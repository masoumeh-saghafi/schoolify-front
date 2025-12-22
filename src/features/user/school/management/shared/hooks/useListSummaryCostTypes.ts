import { ListSummaryCostTypes } from "@schoolify/features/user/school/management/costType/utilities/api/api";
import { useQuery } from "@tanstack/react-query";

import ms from "ms";

const useListSummaryCostType = (educationYearId: string) =>
  useQuery({
    queryKey: ["ListSummaryCostType", educationYearId],
    queryFn: ({ queryKey }) => ListSummaryCostTypes(queryKey[1] as string),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
    enabled: !!educationYearId,
  });
export default useListSummaryCostType;
