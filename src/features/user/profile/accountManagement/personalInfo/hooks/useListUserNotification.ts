import ms from 'ms'

import { useQuery } from '@tanstack/react-query'
import { getListNotification } from '@schoolify/features/user/profile/accountManagement/personalInfo/utilities/api/api'

const useListUserNotifications = (filters: Record<string, string>) => {
  return useQuery({
    queryKey: ['ListUserNotifications', filters],
    queryFn: ({ queryKey }) =>
      getListNotification(queryKey[1] as Record<string, string>),
    staleTime: ms('1h'),
    gcTime: ms('24h'),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    select: data => data.data
  })
}

export default useListUserNotifications
