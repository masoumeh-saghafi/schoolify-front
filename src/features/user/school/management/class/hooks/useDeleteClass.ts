import { useMutation, useQueryClient } from '@tanstack/react-query'
import { listClassQueryKey } from './useListClass'
import { deleteClass } from '../utilities/api/api'

const useDeleteClass = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      classId,
      educationGradeId
    }: {
      classId: string
      educationGradeId: string
    }) => deleteClass(classId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listClassQueryKey({
          educationYearId: variables.educationGradeId
        })
      })
    },
    onError: error => {
      //logError(`Error Updating Student: ${error}`);
    }
  })
}

export default useDeleteClass
