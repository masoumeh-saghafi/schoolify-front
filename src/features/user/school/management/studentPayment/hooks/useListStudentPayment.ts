import ms from 'ms'
import { useQuery } from '@tanstack/react-query'

import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import { listStudentPayment } from '@schoolify/features/user/school/management/studentPayment/utilities/api/api'

interface useListStudentPaymentProps {
  studentId: string
  pagination?: BaseRequestPaginationParams
  filters?: Record<string, string>
}

export const listStudentPaymentQueryKey = (props: useListStudentPaymentProps) =>
  [
    'listStudentPayment',
    props.studentId,
    props.pagination,
    props.filters
  ].filter(item => !!item)

const useListStudentPayment = (props: useListStudentPaymentProps) => {
  return useQuery({
    queryKey: listStudentPaymentQueryKey(props),
    queryFn: ({ queryKey }) =>
      listStudentPayment(
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
    enabled: !!props.studentId
  })
}

export default useListStudentPayment
