import { useMutation, useQueryClient,  } from "@tanstack/react-query";
import { addEucationYear } from "../utilities/api/api";
import { listEducationYearQueryKey } from "./useListEducationYear";


const useAddEucationYear = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data, schoolId }: { data: any; schoolId: string }) =>
      addEucationYear(data),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationYearQueryKey({ schoolId: variables.schoolId }),
      });
    },
    onError: (error) => {
     
    },
  });
};

export default useAddEucationYear
;
