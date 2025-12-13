import { useMutation, useQueryClient } from "@tanstack/react-query";
import { closeTicket } from "../utilities/api/api";
import { userTicketQueryKey } from "./useGetUserTicket";

const useCloseTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ ticketId }: { ticketId: string }) => closeTicket(ticketId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: userTicketQueryKey(variables.ticketId),
      });
    },
    onError: (error) => {},
  });
};

export default useCloseTicket;
