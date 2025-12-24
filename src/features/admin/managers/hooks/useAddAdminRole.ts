import { useMutation, useQueryClient } from '@tanstack/react-query'
import { listAdminRolesQueryKey } from '@schoolify/features/admin/managers/hooks/useListAdminRoles'
import { addAdminRole } from '@schoolify/features/admin/managers/utilities/api/api'

const useAddAdminRole = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ data }: { data: any }) => addAdminRole(data),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listAdminRolesQueryKey({})
      })
    },
    onError: error => {}
  })
}

export default useAddAdminRole
