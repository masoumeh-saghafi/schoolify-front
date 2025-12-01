import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCost } from '../utilities/api/api'
import { listCostQueryKey } from './useListCost'

const useDeleteCost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      costId,
      educationYearId
    }: {
      costId: string
      educationYearId: string
    }) => deleteCost(costId),

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

export default useDeleteCost
