import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import { listTicket } from "@schoolify/features/user/profile/tickets/utilities/api/api";

interface useListTicketProps {
  pagination?: BaseRequestPaginationParams;
  filters?: Record<string, string>;
}

export const listTicketQueryKey = (props: useListTicketProps) =>
  ["listTicket", props.pagination, props.filters].filter((item) => !!item);

const useListticket = (props: useListTicketProps) => {
  return useQuery({
    queryKey: listTicketQueryKey(props),
    queryFn: ({ queryKey }) =>
      listTicket(
        queryKey[1] as BaseRequestPaginationParams,
        queryKey[2] as Record<string, string>
      ),
    staleTime: ms("1h"),
    gcTime: ms("24h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    select: (data) => data.data,
  
  });
};

export default useListticket;
