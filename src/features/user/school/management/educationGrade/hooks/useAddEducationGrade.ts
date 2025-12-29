import { useMutation, useQueryClient } from "@tanstack/react-query";
import { listEducationGradeQueryKey } from "@schoolify/features/user/school/management/educationGrade/hooks/useListEducationGrade";
import { addEducationGrade } from "@schoolify/features/user/school/management/educationGrade/utilities/api/api";
import { listSummaryEducationGradeQueryKey } from "../../shared/hooks/useListSummaryEducationGrade";

const useAddEducationGrade = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      educationLevelId,
    }: {
      data: any;
      educationLevelId: string;
    }) => addEducationGrade(data),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationGradeQueryKey({
          educationLevelId: variables.educationLevelId,
        }),
      });
      queryClient.invalidateQueries({
        queryKey: listSummaryEducationGradeQueryKey({
          educationLevelId: variables.educationLevelId,
        }),
      });
    },
    onError: (error) => {},
  });
};

export default useAddEducationGrade;
