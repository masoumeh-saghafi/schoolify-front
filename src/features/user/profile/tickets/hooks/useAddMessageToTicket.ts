import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addMessageToTicket } from '../utilities/api/api'
import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'

interface useAddMessageToTicketProps {
  pagination?: BaseRequestPaginationParams
  filters?: Record<string, string>
}
export const addMessageToTicketQueryKey = (props: useAddMessageToTicketProps) =>
  ['addMessageToTicket', props.pagination, props.filters].filter(item => !!item)

const useAddMessageToTicket = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ data }: { data: any; ticketId: string }) =>
      addMessageToTicket(data, ticketId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: addMessageToTicketQueryKey({})
      })
    },
    onError: error => {}
  })
}

export default useAddMessageToTicket
