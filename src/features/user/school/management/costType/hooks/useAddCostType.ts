import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addCostType } from '@schoolify/features/user/school/management/costType/utilities/api/api'
import { listCostTypeQueryKey } from '@schoolify/features/user/school/management/costType/hooks/useListCostType'

const useAddCostType = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      data,
      educationYearId
    }: {
      data: any
      educationYearId: string
    }) => addCostType(data),

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

export default useAddCostType
