import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserRole } from "@schoolify/features/user/school/management/userRole/utilities/api/api";
import { listUserRolesQueryKey } from "@schoolify/features/user/school/management/userRole/hooks/useListUserRoles";

const useDeleteUserRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      schoolId,
      phoneNumber,
    }: {
      schoolId: string;
      phoneNumber: string;
    }) => deleteUserRole(schoolId, phoneNumber),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listUserRolesQueryKey({ schoolId: variables.schoolId }),
      });
    },
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useDeleteUserRole;
