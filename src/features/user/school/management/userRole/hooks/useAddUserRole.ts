import { useMutation, useQueryClient } from '@tanstack/react-query'

import { listUserRolesQueryKey } from './useListUserRoles'
import { addUserRole } from '../utilities/api/api'

const useAddUserRole = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ data, schoolId }: { data: any; schoolId: string }) =>
      addUserRole(data,schoolId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listUserRolesQueryKey({ schoolId: variables.schoolId })
      })
    },
    onError: error => {}
  })
}

export default useAddUserRole
