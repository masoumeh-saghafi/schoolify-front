import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteStudentPayment } from '@schoolify/features/user/school/management/studentPayment/utilities/api/api'
import { listStudentPaymentQueryKey } from '@schoolify/features/user/school/management/studentPayment/hooks/useListStudentPayment'

const useDeleteStudentPayment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      studentPaymentsId,
      studentId
    }: {
      studentPaymentsId: string
      studentId: string
    }) => deleteStudentPayment(studentPaymentsId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listStudentPaymentQueryKey({
          studentId: variables.studentId
        })
      })
    },
    onError: error => {
      //logError(`Error Updating Student: ${error}`);
    }
  })
}

export default useDeleteStudentPayment
