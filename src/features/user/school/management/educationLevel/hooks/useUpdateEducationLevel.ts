import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEducationLevel } from "../utilities/api/api";
import { listEducationLevelQueryKey } from "./useListEducationLevel";

const useUpdateEducationLevel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      educationLevelId,
      educationYearId,
    }: {
      data: any;
      educationLevelId: string;
      educationYearId: string;
    }) => updateEducationLevel(data, educationLevelId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationLevelQueryKey({
          educationYearId: variables.educationYearId,
        }),
      });
    },
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useUpdateEducationLevel;
