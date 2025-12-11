import { useMutation, useQueryClient } from '@tanstack/react-query'
import { listCostTypeQueryKey } from '@schoolify/features/user/school/management/costType/hooks/useListCostType'
import { deleteCostType } from '@schoolify/features/user/school/management/costType/utilities/api/api'

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
    onError: error => {}
  })
}

export default useDeleteCostType
