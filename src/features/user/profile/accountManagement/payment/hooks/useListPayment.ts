import ms from 'ms'
import { useQuery } from '@tanstack/react-query'
import { getListPayment } from '../utilities/api/api'

const useListPayment = () => {
  return useQuery({
    queryKey: ['ListPayment'],
    queryFn:getListPayment ,
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

export default useListPayment

