import { useMutation, useQueryClient } from '@tanstack/react-query'
import { listClassQueryKey } from './useListClass'
import { addClass } from '../utilities/api/api'

const useAddClass = () => {
  const queryClient = useQueryClient()

  return useMutation({
      mutationFn: ({
      classId,
      educationGradeId
    }: {
      classId: string
      educationGradeId: string
    }) => addClass(classId),

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

export default useAddClass
