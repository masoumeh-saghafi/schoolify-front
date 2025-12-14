import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getUserTicket } from "../utilities/api/api";

export const userTicketQueryKey = (ticketId: string) => [
  "getUserTicket",
  ticketId,
];

const useGetUserTicket = (ticketId: string) => {
  return useQuery({
    queryKey: userTicketQueryKey(ticketId),
    queryFn: ({ queryKey }) => getUserTicket(queryKey[1] as string),
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

export default useGetUserTicket;
