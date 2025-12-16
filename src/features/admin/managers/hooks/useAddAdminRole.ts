import { useMutation, useQueryClient } from '@tanstack/react-query'
import { listAdminRolesQueryKey } from './useListAdminRoles'
import { addAdminRole } from '../utilities/api/api'

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
