import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEducationYear } from "../utilities/api/api";
import { listEducationYearQueryKey } from "./useListEducationYear";

const useAddEducationYear = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data, schoolId }: { data: any; schoolId: string }) =>
      addEducationYear(data),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationYearQueryKey({ schoolId: variables.schoolId }),
      });
    },
    onError: (error) => {},
  });
};

export default useAddEducationYear;
