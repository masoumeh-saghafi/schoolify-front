import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAdminTicket } from "../utilities/api/api";
import { listAdminTicketQueryKey } from "./useListAdminTicket";
// import { addticket } from "@schoolify/features/user/school/management/ticket/utilities/api/api";
// import { listticketQueryKey } from "@schoolify/features/user/school/management/ticket/hooks/useListticket";

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
