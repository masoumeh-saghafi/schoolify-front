import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addClassStudent } from "../utilities/api/api";
import { listStudentsQueryKey } from "@schoolify/features/user/school/management/shared/hooks/useListStudents";

const useAddClassStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      studentId,
      classId,
      schoolId,
    }: {
      studentId: any;
      classId: string;
      schoolId: string;
    }) => await addClassStudent(studentId, classId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listStudentsQueryKey({ schoolId: variables.schoolId }),
      });
    },
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useAddClassStudent;
