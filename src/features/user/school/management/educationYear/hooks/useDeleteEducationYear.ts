import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEducationYear } from "@schoolify/features/user/school/management/educationYear/utilities/api/api";
import { listEducationYearQueryKey } from "@schoolify/features/user/school/management/educationYear/hooks/useListEducationYear";
import { listSummaryEducationYearQueryKey } from "../../shared/hooks/useListSummaryEducationYears";

const useDeleteEducationYear = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      educationYearId,
      schoolId,
    }: {
      educationYearId: string;
      schoolId: string;
    }) => deleteEducationYear(educationYearId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationYearQueryKey({ schoolId: variables.schoolId }),
      });
      queryClient.invalidateQueries({
        queryKey: listSummaryEducationYearQueryKey({
          schoolId: variables.schoolId,
        }),
      });
    },
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useDeleteEducationYear;
