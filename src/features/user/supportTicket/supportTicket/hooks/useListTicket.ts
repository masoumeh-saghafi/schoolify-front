import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";

import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { listTicket } from "../utilities/api/api";

interface useListticketProps {
  // educationYearId: string;
  pagination?: BaseRequestPaginationParams;
  filters?: Record<string, string>;
}

export const listTicketQueryKey = (props: useListticketProps) =>
  [
    "listticket",
    // props.educationYearId,
    props.pagination,
    props.filters,
  ].filter((item) => !!item);

const useListticket = (props: useListticketProps) => {
  return useQuery({
    queryKey: listTicketQueryKey(props),
    queryFn: ({ queryKey }) =>
      listTicket(
        queryKey[1] as string,
        queryKey[2] as BaseRequestPaginationParams,
        queryKey[3] as Record<string, string>
      ),
    staleTime: ms("1h"),
    gcTime: ms("24h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    select: (data) => data.data,
    // enabled: !!props.educationYearId,
  });
};

export default useListticket;
