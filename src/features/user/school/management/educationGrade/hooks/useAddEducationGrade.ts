import { useMutation, useQueryClient } from '@tanstack/react-query'
import { listEducationGradeQueryKey } from './useListEducationGrade'
import { addEucationGrade } from '../utilities/api/api'

const useAddEucationGrade = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      data,
      educationLevelId
    }: {
      data: any
      educationLevelId: string
    }) => addEucationGrade(data),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationGradeQueryKey({
          educationLevelId: variables.educationLevelId
        })
      })
    },
    onError: error => {}
  })
}

export default useAddEucationGrade
