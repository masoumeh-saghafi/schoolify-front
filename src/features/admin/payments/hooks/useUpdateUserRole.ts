import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateUserRole } from '@schoolify/features/user/school/management/userRole/utilities/api/api'
import { listUserRolesQueryKey } from '@schoolify/features/user/school/management/userRole/hooks/useListUserRoles'

const useUpdateUserRole = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      data,
      schoolId,
      phoneNumber
    }: {
      data: any
      schoolId: string
      phoneNumber: string
    }) => updateUserRole(data, schoolId, phoneNumber),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listUserRolesQueryKey({ schoolId: variables.schoolId })
      })
    },
    onError: error => {
      //logError(`Error Updating Student: ${error}`);
    }
  })
}

export default useUpdateUserRole
