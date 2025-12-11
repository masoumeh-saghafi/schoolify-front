import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateClass } from '@schoolify/features/user/school/management/class/utilities/api/api'
import { listClassQueryKey } from '@schoolify/features/user/school/management/class/hooks/useListClass'

const useUpdateClass = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      data,
      classId,
      educationGradeId
    }: {
      data: any
      classId: string
      educationGradeId: string
    }) => updateClass(data, classId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listClassQueryKey({
          educationGradeId: variables.educationGradeId
        })
      })
    },
    onError: error => {}
  })
}

export default useUpdateClass
