import ms from 'ms'
import { useQuery } from '@tanstack/react-query'
import { getListPayment } from '@schoolify/features/user/profile/accountManagement/payment/utilities/api/api'

export const listPaymentQueryKey = 'ListPayment'

const useListPayment = () => {
  return useQuery({
    queryKey: [listPaymentQueryKey],
    queryFn: getListPayment,
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
