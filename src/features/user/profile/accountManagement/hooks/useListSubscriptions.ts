import ms from 'ms'

import { useQuery } from '@tanstack/react-query'
import { getListSubscription} from '../utilities/api/api'

const useListSubscriptions = () => {
  return useQuery({
    queryKey: ['getListSubscription'], 
    queryFn: getListSubscription, 
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
