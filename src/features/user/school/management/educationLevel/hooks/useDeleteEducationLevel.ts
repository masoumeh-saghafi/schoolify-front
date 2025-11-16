import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteEducationLevel } from '../utilities/api/api'
import { listEducationLevelQueryKey } from './useListEducationLevel'

const useDeleteEducationLevel = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      educationLevelId,
      educationYearId
    }: {
      educationLevelId: string
      educationYearId: string
    }) => deleteEducationLevel(educationLevelId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationLevelQueryKey({
          educationYearId: variables.educationYearId
        })
      })
    },
    onError: error => {
      //logError(`Error Updating Student: ${error}`);
    }
  })
}

export default useDeleteEducationLevel
