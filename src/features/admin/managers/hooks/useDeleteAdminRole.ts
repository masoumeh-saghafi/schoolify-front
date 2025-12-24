import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAdminRole } from "@schoolify/features/admin/managers/utilities/api/api";
import { listAdminRolesQueryKey } from "@schoolify/features/admin/managers/hooks/useListAdminRoles";

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
