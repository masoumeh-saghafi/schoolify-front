import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteClassStudent } from "../utilities/api/api";
import { listStudentsQueryKey } from "@schoolify/features/user/school/management/shared/hooks/useListStudents";

const useDeleteClassStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      studentId,
      classId,
      schoolId,
    }: {
      studentId: string;
      classId: string;
      schoolId: string;
    }) => await deleteClassStudent(classId, studentId),

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

export default useDeleteClassStudent;
