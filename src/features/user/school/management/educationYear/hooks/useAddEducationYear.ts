import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEducationYear } from "@schoolify/features/user/school/management/educationYear/utilities/api/api";
import { listEducationYearQueryKey } from "@schoolify/features/user/school/management/educationYear/hooks/useListEducationYear";
import { listSummaryEducationYearQueryKey } from "../../shared/hooks/useListSummaryEducationYears";

const useAddEducationYear = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data, schoolId }: { data: any; schoolId: string }) =>
      addEducationYear(data),

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
    onError: (error) => {},
  });
};

export default useAddEducationYear;
