import ms from 'ms'
import { useQuery } from '@tanstack/react-query'
import { getStudentReport } from '../utilities/api/api'

export const StudentReportQueryKey = (
  educationYearId: string,
  studentId: string
) => ['getUserStudentReport', educationYearId, studentId]

const useGetStudentReport = (
  educationYearId: string,
  studentId: string
) => {
  return useQuery({
    queryKey: StudentReportQueryKey(educationYearId, studentId),
    queryFn: ({ queryKey }) =>
      getStudentReport(queryKey[1] as string, queryKey[2] as string),
    staleTime: ms('1h'),
    gcTime: ms('24h'),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    // enabled: !!token,
    select: data => data.data
  })
}

export default useGetStudentReport
