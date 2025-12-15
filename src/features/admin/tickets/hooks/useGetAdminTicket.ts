import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getAdminTicket } from "../utilities/api/api";

export const adminTicketQueryKey = (ticketId: string) => [
  "getAdminTicket",
  ticketId,
];

const useGetAdminTicket = (ticketId: string) => {
  return useQuery({
    queryKey: adminTicketQueryKey(ticketId),
    queryFn: ({ queryKey }) => getAdminTicket(queryKey[1] as string),
    staleTime: ms("1h"),
    gcTime: ms("24h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    // enabled: !!token,
    select: (data) => data.data,
  });
};

export default useGetAdminTicket;
