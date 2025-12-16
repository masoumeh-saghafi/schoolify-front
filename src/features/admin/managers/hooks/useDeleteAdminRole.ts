import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAdminRole } from "../utilities/api/api";
import { listAdminRolesQueryKey } from "./useListAdminRoles";

const useDeleteAdminRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
 
    }: {
      userId: string;
    
    }) => deleteAdminRole(userId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listAdminRolesQueryKey({ }),
      });
    },
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useDeleteAdminRole;
