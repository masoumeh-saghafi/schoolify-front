import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEducationYear } from "@schoolify/features/user/school/management/educationYear/utilities/api/api";
import { listEducationYearQueryKey } from "@schoolify/features/user/school/management/educationYear/hooks/useListEducationYear";
import { listSummaryEducationYearQueryKey } from "../../shared/hooks/useListSummaryEducationYears";

const useUpdateEducationYear = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      educationYearId,
      schoolId,
    }: {
      data: any;
      educationYearId: string;
      schoolId: string;
    }) => updateEducationYear(data, educationYearId),

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

export default useUpdateEducationYear;
