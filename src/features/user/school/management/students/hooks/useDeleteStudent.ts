import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStudent } from "../utilities/api/api";
import { listStudentsQueryKey } from "./useListStudents";

const useDeleteStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      studentId,
      schoolId,
    }: {
      studentId: string;
      schoolId: string;
    }) => deleteStudent(studentId),

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

export default useDeleteStudent;
