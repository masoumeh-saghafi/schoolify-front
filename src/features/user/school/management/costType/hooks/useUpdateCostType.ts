import { useMutation, useQueryClient } from '@tanstack/react-query'
import { listCostTypeQueryKey } from '@schoolify/features/user/school/management/costType/hooks/useListCostType'
import { updateCostType } from '@schoolify/features/user/school/management/costType/utilities/api/api'

const useUpdateCostType = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      data,
      costTypeId,
      educationYearId
    }: {
      data: any
      costTypeId: string
      educationYearId: string
    }) => updateCostType(data, costTypeId),

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

export default useUpdateCostType
