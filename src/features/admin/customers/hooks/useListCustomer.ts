import ms from 'ms'
import { useQuery } from '@tanstack/react-query'

import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import { listCustomer } from '@schoolify/features/admin/customers/utilities/api/api'

interface useListCustomerProps {
  pagination?: BaseRequestPaginationParams
  filters?: Record<string, string>
}

export const listCustomerQueryKey = (props: useListCustomerProps) =>
  ['listCustomer', props.pagination, props.filters].filter(item => !!item)

const useListCustomer = (props: useListCustomerProps) => {
  return useQuery({
    queryKey: listCustomerQueryKey(props),
    queryFn: ({ queryKey }) =>
      listCustomer(
        queryKey[1] as BaseRequestPaginationParams,
        queryKey[2] as Record<string, string>
      ),
    staleTime: ms('1h'),
    gcTime: ms('24h'),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    select: data => data.data
  })
}

export default useListCustomer
