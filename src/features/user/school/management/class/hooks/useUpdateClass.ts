import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateClass } from '../utilities/api/api'
import { listClassQueryKey } from './useListClass'

const useUpdateClass = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      data,
     classeId,
      educationGradeId


    }: {
      data: any
     classeId: string
      educationGradeId: string
    }) => updateClass(data,classeId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listClassQueryKey({
       educationYearId:variables.educationGradeId
        })
      })
    },
    onError: error => {
      //logError(`Error Updating Student: ${error}`);
    }
  })
}

export default useUpdateClass
