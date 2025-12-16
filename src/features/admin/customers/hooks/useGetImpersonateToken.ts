import { useMutation, useQueryClient,  } from '@tanstack/react-query'

import { getImpersonateToken } from '../utilities/api/api'
import { listCustomerQueryKey } from './useListCustomer'

const useGetImpersonateToken = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ data, userId }: { data: any; userId: string }) =>
      getImpersonateToken(data,userId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listCustomerQueryKey({})
      })
    },
    onError: error => {}
  })
}

export default useGetImpersonateToken
