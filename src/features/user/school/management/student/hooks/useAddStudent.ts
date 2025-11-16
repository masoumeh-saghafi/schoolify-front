import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addStudent } from "@schoolify/features/user/school/management/student/utilities/api/api";
import { listStudentsQueryKey } from "@schoolify/features/user/school/management/student/hooks/useListStudents";

const useAddStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data, schoolId }: { data: any; schoolId: string }) =>
      addStudent(data),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listStudentsQueryKey({ schoolId: variables.schoolId }),
      });
    },
    onError: (error) => {
      //logError(`Error Creating Student: ${error}`);
    },
  });
};

export default useAddStudent;
