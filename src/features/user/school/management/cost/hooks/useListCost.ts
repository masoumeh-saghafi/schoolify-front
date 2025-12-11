import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'

import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import { listCost } from '@schoolify/features/user/school/management/cost/utilities/api/api'

interface useListCostProps {
  educationYearId: string
  pagination?: BaseRequestPaginationParams
  filters?: Record<string, string>
}

export const listCostQueryKey = (props: useListCostProps) =>
  ['listCost', props.educationYearId, props.pagination, props.filters].filter(
    item => !!item
  )

const useListCost = (props: useListCostProps) => {
  return useQuery({
    queryKey: listCostQueryKey(props),
    queryFn: ({ queryKey }) =>
      listCost(
        queryKey[1] as string,
        queryKey[2] as BaseRequestPaginationParams,
        queryKey[3] as Record<string, string>
      ),
    staleTime: ms('1h'),
    gcTime: ms('24h'),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    select: data => data.data,
    enabled: !!props.educationYearId
  })
}

export default useListCost
