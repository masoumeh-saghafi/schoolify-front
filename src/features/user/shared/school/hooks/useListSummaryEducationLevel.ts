
import { listSummaryEducationLevel } from '@schoolify/features/user/school/management/educationGrade/utilities/api/api'
import { useQuery } from '@tanstack/react-query'

import ms from 'ms'

const useListSummaryEducationLevel = (educationLevelId: string) =>
  useQuery({
    queryKey: ['ListSummaryEducationLevel', educationLevelId],
    queryFn: ({ queryKey }) => listSummaryEducationLevel(queryKey[1] as string),

    staleTime: ms('1h'),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: data => data?.data
  })
export default useListSummaryEducationLevel
