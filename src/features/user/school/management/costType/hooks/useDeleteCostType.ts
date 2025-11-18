import { useMutation, useQueryClient } from '@tanstack/react-query'
import { listCostTypeQueryKey } from './useListCostType'
import { deleteCostType } from '../utilities/api/api'

const useDeleteCostType = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      costTypeId,
      educationYearId

    }: {
      costTypeId: string
      educationYearId: string
    }) => deleteCostType(costTypeId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listCostTypeQueryKey({
          educationYearId: variables.educationYearId
        })
      })
    },
    onError: error => {
      //logError(`Error Updating Student: ${error}`);
    }
  })
}

export default useDeleteCostType
