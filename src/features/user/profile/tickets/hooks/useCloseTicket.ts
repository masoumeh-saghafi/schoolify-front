import { useMutation, useQueryClient } from "@tanstack/react-query";
import { closeTicket } from "@schoolify/features/user/profile/tickets/utilities/api/api";
import { userTicketQueryKey } from "@schoolify/features/user/profile/tickets/hooks/useGetUserTicket";

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
