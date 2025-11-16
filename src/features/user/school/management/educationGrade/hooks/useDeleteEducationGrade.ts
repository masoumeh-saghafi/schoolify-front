import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteEducationGrade } from '../utilities/api/api'
import { listEducationGradeQueryKey } from './useListEducationGrade'

const useDeleteEducationGrade = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      educationGradeId,
      educationLevelId
    }: {
      educationGradeId: string
      educationLevelId: string
    }) => deleteEducationGrade(educationGradeId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationGradeQueryKey({
          educationLevelId: variables.educationLevelId
        })
      })
    },
    onError: error => {
      //logError(`Error Updating Student: ${error}`);
    }
  })
}

export default useDeleteEducationGrade
