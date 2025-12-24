import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAdminTicket } from "@schoolify/features/admin/tickets/utilities/api/api";
import { listAdminTicketQueryKey } from "@schoolify/features/admin/tickets/hooks/useListAdminTicket";

const useUpdateAdminTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data,ticketId }: { data: any,ticketId:string }) => updateAdminTicket(data,ticketId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listAdminTicketQueryKey({}),
      });
    },
    onError: (error) => {},
  });
};

export default useUpdateAdminTicket;
