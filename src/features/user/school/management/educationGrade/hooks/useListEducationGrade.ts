import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import { listEducationGrade } from '@schoolify/features/user/school/management/educationGrade/utilities/api/api'

interface useListEducationGradeProps {
  educationLevelId: string
  pagination?: BaseRequestPaginationParams
  filters?: Record<string, string>
}

export const listEducationGradeQueryKey = (props: useListEducationGradeProps) =>
  [
    'listEducationGrade',
    props.educationLevelId,
    props.pagination,
    props.filters
  ].filter(item => !!item)

const useListEducationGrade = (props: useListEducationGradeProps) => {
  return useQuery({
    queryKey: listEducationGradeQueryKey(props),
    queryFn: ({ queryKey }) =>
      listEducationGrade(
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
    enabled: !!props.educationLevelId
  })
}

export default useListEducationGrade
