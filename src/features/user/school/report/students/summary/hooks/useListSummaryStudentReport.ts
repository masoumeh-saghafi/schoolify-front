import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import { listSummaryStudentReport } from '../utilities/api/api'
// import { listSummaryStudentReport } from '../utilities/api/api'
// import { listuseListSummaryStudentReport } from '@schoolify/features/user/school/management/useListSummaryStudentReport/utilities/api/api'

interface useListSummaryStudentReportProps {
  educationYearId: string
  pagination?: BaseRequestPaginationParams
  filters?: Record<string, string>
}

export const useListSummaryStudentReportQueryKey = (props: useListSummaryStudentReportProps) =>
  [
    'useListSummaryStudentReport',
    props.educationYearId,
    props.pagination,
    props.filters
  ].filter(item => !!item)

const useListSummaryStudentReport = (props: useListSummaryStudentReportProps) => {
  return useQuery({
    queryKey: useListSummaryStudentReportQueryKey(props),
    queryFn: ({ queryKey }) =>
      listSummaryStudentReport(
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

export default useListSummaryStudentReport
