import ms from 'ms'
import { useQuery } from '@tanstack/react-query'

import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import { listStudentReport } from '@schoolify/features/user/school/report/students/full/utilities/api/api'

interface useListStudentReportProps {
  educationYearId: string
  pagination?: BaseRequestPaginationParams
  filters?: Record<string, string>
}

export const useListStudentReportQueryKey = (props: useListStudentReportProps) =>
  [
    'useListStudentReport',
    props.educationYearId,
    props.pagination,
    props.filters
  ].filter(item => !!item)

const useListStudentReport = (props: useListStudentReportProps) => {
  return useQuery({
    queryKey: useListStudentReportQueryKey(props),
    queryFn: ({ queryKey }) =>
      listStudentReport(
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

export default useListStudentReport
