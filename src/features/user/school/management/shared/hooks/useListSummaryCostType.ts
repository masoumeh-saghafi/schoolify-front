import ms from "ms";
import { useQuery } from "@tanstack/react-query";

import { listSummaryCostType } from "@schoolify/features/user/school/management/cost/utilities/api/api";


const useListSummaryCostType = (costTypeId: string) =>
  useQuery({
    queryKey: ["ListSummaryCostType", costTypeId],
    queryFn: ({ queryKey }) => listSummaryCostType(queryKey[1] as string),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
    enabled: !!costTypeId,
  });
export default useListSummaryCostType;
