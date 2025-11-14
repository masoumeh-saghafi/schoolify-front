import ms from 'ms'
import { useQuery } from '@tanstack/react-query'
import { listSubscription} from '@schoolify/features/user/profile/accountManagement/subscription/utilities/api/api'

const useListSubscriptions = () => {
  return useQuery({
    queryKey: ['getListSubscription'], 
    queryFn: listSubscription, 
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

export default useListSubscriptions
