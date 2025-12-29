import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEducationLevel } from "@schoolify/features/user/school/management/educationLevel/utilities/api/api";
import { listEducationLevelQueryKey } from "@schoolify/features/user/school/management/educationLevel/hooks/useListEducationLevel";
import { listSummaryEducationLevelQueryKey } from "../../shared/hooks/useListSummaryEducationLevel";

const useDeleteEducationLevel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      educationLevelId,
      educationYearId,
    }: {
      educationLevelId: string;
      educationYearId: string;
    }) => deleteEducationLevel(educationLevelId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationLevelQueryKey({
          educationYearId: variables.educationYearId,
        }),
      });
      queryClient.invalidateQueries({
        queryKey: listSummaryEducationLevelQueryKey({
          educationYearId: variables.educationYearId,
        }),
      });
    },
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useDeleteEducationLevel;
