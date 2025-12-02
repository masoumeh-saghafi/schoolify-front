import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStudentPayment } from "@schoolify/features/user/school/management/studentPayment/utilities/api/api";
import { listStudentPaymentQueryKey } from "@schoolify/features/user/school/management/studentPayment/hooks/useListStudentPayment";

const useUpdateStudentPayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      studentPaymentId,
      studentId,
    }: {
      data: any;
      studentPaymentId: string;
      studentId: string;
    }) => updateStudentPayment(data, studentPaymentId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listStudentPaymentQueryKey({
          studentId: variables.studentId,
        }),
      });
    },
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useUpdateStudentPayment;
