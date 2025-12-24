import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTicket } from "@schoolify/features/user/profile/tickets/utilities/api/api";
import { listTicketQueryKey } from "@schoolify/features/user/profile/tickets/hooks/useListTicket";

const useAddTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }: { data: any }) => addTicket(data),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listTicketQueryKey({}),
      });
    },
    onError: (error) => {},
  });
};

export default useAddTicket;
