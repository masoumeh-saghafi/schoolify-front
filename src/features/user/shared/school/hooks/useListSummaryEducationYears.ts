import { useQuery } from '@tanstack/react-query'
import { listSummaryEducationYear } from '../../../school/management/educationLevel/utilities/api/api'
import ms from 'ms'

const useListSummaryEducationYear = (schoolId: string) =>
  useQuery({
    queryKey: ['ListSummaryEducationYear', schoolId],
    queryFn: ({ queryKey }) => listSummaryEducationYear(queryKey[1] as string),

    staleTime: ms('1h'),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: data => data?.data
  })
export default useListSummaryEducationYear
