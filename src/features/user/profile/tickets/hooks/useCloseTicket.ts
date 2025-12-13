import { useMutation, useQueryClient } from '@tanstack/react-query'
import { closeTicket } from '../utilities/api/api'
import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'

interface useCloseTicketProps {
  pagination?: BaseRequestPaginationParams
  filters?: Record<string, string>
}
export const CloseTicketQueryKey = (props: useCloseTicketProps) =>
  ['closeTicket', props.pagination, props.filters].filter(item => !!item)

const useCloseTicket = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ data }: { data: any; ticketId: string }) =>
      closeTicket(data, ticketId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: CloseTicketQueryKey({})
      })
    },
    onError: error => {}
  })
}

export default useCloseTicket
