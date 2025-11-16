import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addEucationLevel } from '../utilities/api/api'
import { listEducationLevelQueryKey } from './useListEducationLevel'

const useAddEucationLevel = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      data,
      educationYearId
    }: {
      data: any
      educationYearId: string
    }) => addEucationLevel(data),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationLevelQueryKey({
          educationYearId: variables.educationYearId
        })
      })
    },
    onError: error => {}
  })
}

export default useAddEucationLevel
