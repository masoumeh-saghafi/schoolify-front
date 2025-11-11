import ms from 'ms'
import { useQuery } from '@tanstack/react-query'
import { getListNotification } from '@schoolify/features/user/profile/accountManagement/personalInfo/utilities/api/api'
import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'

const useListStudents = (
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return useQuery({
    queryKey: ['listStudents', pagination, filters],
    queryFn: ({ queryKey }) =>
      getListNotification(
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

export default useListStudents

