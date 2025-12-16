import ms from 'ms'
import { useQuery } from '@tanstack/react-query'

import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import { listAdminRoles } from '../utilities/api/api'

interface useListAdminRolesProps {
  pagination?: BaseRequestPaginationParams
  filters?: Record<string, string>
}

export const listAdminRolesQueryKey = (props: useListAdminRolesProps) =>
  ['listAdminRoles', props.pagination, props.filters].filter(item => !!item)

const useListAdminRoles = (props: useListAdminRolesProps) => {
  return useQuery({
    queryKey: listAdminRolesQueryKey(props),
    queryFn: ({ queryKey }) =>
      listAdminRoles(
        queryKey[1] as BaseRequestPaginationParams,
        queryKey[2] as Record<string, string>
      ),
    staleTime: ms('1h'),
    gcTime: ms('24h'),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
     select: data => data.data,
  })
}

export default useListAdminRoles
