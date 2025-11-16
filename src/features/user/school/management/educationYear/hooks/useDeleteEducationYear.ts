import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteEucationYear } from '../utilities/api/api'
import { listEducationYearQueryKey } from './useListEducationYear'


const useDeleteEducationYear = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      educationYearId,
      schoolId
    }: {
      educationYearId: string
      schoolId: string
    }) => deleteEucationYear(educationYearId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationYearQueryKey({ schoolId: variables.schoolId })
      })
    },
    onError: error => {
      //logError(`Error Updating Student: ${error}`);
    }
  })
}

export default useDeleteEducationYear
