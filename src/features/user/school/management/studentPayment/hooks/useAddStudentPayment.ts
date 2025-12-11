import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addStudentPayment } from "@schoolify/features/user/school/management/studentPayment/utilities/api/api";
import { listStudentPaymentQueryKey } from "@schoolify/features/user/school/management/studentPayment/hooks/useListStudentPayment";

const useAddStudentPayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      studentId
,
    }: {
      data: any;
      studentId: string;
    }) => addStudentPayment(data),

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

export default useAddStudentPayment;
