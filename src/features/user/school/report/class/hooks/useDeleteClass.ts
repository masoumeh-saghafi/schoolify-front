import { useMutation, useQueryClient } from '@tanstack/react-query'
import { listClassQueryKey } from '@schoolify/features/user/school/management/class/hooks/useListClass'
import { deleteClass } from '@schoolify/features/user/school/management/class/utilities/api/api'

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
          educationGradeId: variables.educationGradeId
        })
      })
    },
    onError: error => {}
  })
}

export default useDeleteClass
