import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateEucationYear } from '../utilities/api/api'
import { listEducationYearQueryKey } from './useListEducationYear'


const useUpdateEducationYear = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      data,
      educationYearId,
      schoolId
    }: {
      data: any
      educationYearId: string
      schoolId: string
    }) => updateEucationYear(data, educationYearId),

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

export default useUpdateEducationYear
