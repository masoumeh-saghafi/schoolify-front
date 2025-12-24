import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAdminTicketResponse } from "@schoolify/features/admin/tickets/utilities/api/api";
import { adminTicketQueryKey } from "@schoolify/features/admin/tickets/hooks/useGetAdminTicket";


const useAddAdminTicketResponse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data, ticketId }: { data: any; ticketId: string }) =>
      addAdminTicketResponse(data, ticketId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: adminTicketQueryKey(variables.ticketId),
      });
    },
    onError: (error) => {},
  });
};

export default useAddAdminTicketResponse
;
