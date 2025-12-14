import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTicket } from "../utilities/api/api";
import { listTicketQueryKey } from "./useListTicket";
// import { addticket } from "@schoolify/features/user/school/management/ticket/utilities/api/api";
// import { listticketQueryKey } from "@schoolify/features/user/school/management/ticket/hooks/useListticket";

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
