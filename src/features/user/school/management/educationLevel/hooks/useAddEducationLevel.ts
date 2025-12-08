import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEducationLevel } from "@schoolify/features/user/school/management/educationLevel/utilities/api/api";
import { listEducationLevelQueryKey } from "@schoolify/features/user/school/management/educationLevel/hooks/useListEducationLevel";

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
