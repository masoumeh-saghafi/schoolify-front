import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCost } from '@schoolify/features/user/school/management/cost/utilities/api/api'
import { listCostQueryKey } from '@schoolify/features/user/school/management/cost/hooks/useListCost'

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
    onError: error => {}
  })
}

export default useDeleteCost
