import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";

import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { listAdminTicketEndpoints } from "../utilities/api/api";

interface useListAdminTicketProps {
  pagination?: BaseRequestPaginationParams;
  filters?: Record<string, string>;
}

export const listAdminTicketQueryKey = (props: useListAdminTicketProps) =>
  ["listAdminTicket", props.pagination, props.filters].filter((item) => !!item);

const useListAdminticket = (props: useListAdminTicketProps) => {
  return useQuery({
    queryKey: listAdminTicketQueryKey(props),
    queryFn: ({ queryKey }) =>
      listAdminTicketEndpoints(
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

export default useListAdminticket;
