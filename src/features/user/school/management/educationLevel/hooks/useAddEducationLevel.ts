import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEducationLevel } from "../utilities/api/api";
import { listEducationLevelQueryKey } from "./useListEducationLevel";

const useAddEducationLevel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      educationYearId,
    }: {
      data: any;
      educationYearId: string;
    }) => addEducationLevel(data),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationLevelQueryKey({
          educationYearId: variables.educationYearId,
        }),
      });
    },
    onError: (error) => {},
  });
};

export default useAddEducationLevel;
