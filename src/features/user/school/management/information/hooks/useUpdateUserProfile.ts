import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSchoolName } from "@schoolify/features/user/school/management/information/utilities/api/api";
import { schoolInfoQueryKey } from "./useInfoSchool";
import { listSummarySchoolsQueryKey } from "@schoolify/features/user/shared/school/hooks/useListSummarySchools";

const useUpdateSchoolName = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data, schoolId }: { data: any; schoolId: string }) =>
      updateSchoolName(data, schoolId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: schoolInfoQueryKey(variables.schoolId),
      });

      queryClient.invalidateQueries({
        queryKey: listSummarySchoolsQueryKey,
      });
    },
    onError: (error) => {
      console.error("Error Updating School:", error);
    },
  });
};

export default useUpdateSchoolName;
