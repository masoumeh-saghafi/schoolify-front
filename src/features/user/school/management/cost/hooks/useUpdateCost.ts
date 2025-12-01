import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateCost } from '../utilities/api/api'
import { listCostQueryKey } from './useListCost'

const useUpdateCost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      data,
      costId,
      educationYearId
    }: {
      data: any
      costId: string
      educationYearId: string
    }) => updateCost(data, costId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listCostQueryKey({
          educationYearId: variables.educationYearId
        })
      })
    },
    onError: error => {
      //logError(`Error Updating Student: ${error}`);
    }
  })
}

export default useUpdateCost
