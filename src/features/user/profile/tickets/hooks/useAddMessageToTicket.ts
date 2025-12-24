import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMessageToTicket } from "@schoolify/features/user/profile/tickets/utilities/api/api";
import { userTicketQueryKey } from "@schoolify/features/user/profile/tickets/hooks/useGetUserTicket";

const useAddMessageToTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data, ticketId }: { data: any; ticketId: string }) =>
      addMessageToTicket(data, ticketId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: userTicketQueryKey(variables.ticketId),
      });
    },
    onError: (error) => {},
  });
};

export default useAddMessageToTicket;
