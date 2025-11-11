import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStudent } from "../utilities/api/api";
import { listStudentsQueryKey } from "./useListStudents";

const useUpdateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      studentId,
      schoolId,
    }: {
      data: any;
      studentId: string;
      schoolId: string;
    }) => updateStudent(data, studentId),

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

export default useUpdateStudent;
