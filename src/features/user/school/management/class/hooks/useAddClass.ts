import { useMutation, useQueryClient } from "@tanstack/react-query";
import { listClassQueryKey } from "./useListClass";
import { addClass } from "../utilities/api/api";

const useAddClass = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      educationGradeId,
    }: {
      data: any;
      educationGradeId: string;
    }) => addClass(data),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listClassQueryKey({
          educationYearId: variables.educationGradeId,
        }),
      });
    },
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useAddClass;
