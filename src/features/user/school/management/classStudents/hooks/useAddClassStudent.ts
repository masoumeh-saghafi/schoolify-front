import { useMutation, useQueryClient } from "@tanstack/react-query";
import { listClassQueryKey } from "./useListClass";
import { addClassStudent } from "../utilities/api/api";

const useAddStudentClass = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data, classId }: { data: any; classId: string }) =>
      addClassStudent(data,classId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listClassQueryKey({
          : variables.educationGradeId,
        }),
      });
    },
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useAddClass;
