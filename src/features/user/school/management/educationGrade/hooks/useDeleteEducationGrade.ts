import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEducationGrade } from "@schoolify/features/user/school/management/educationGrade/utilities/api/api";
import { listEducationGradeQueryKey } from "@schoolify/features/user/school/management/educationGrade/hooks/useListEducationGrade";
import { listSummaryEducationGradeQueryKey } from "../../shared/hooks/useListSummaryEducationGrade";

const useDeleteEducationGrade = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      educationGradeId,
      educationLevelId,
    }: {
      educationGradeId: string;
      educationLevelId: string;
    }) => deleteEducationGrade(educationGradeId),

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
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useDeleteEducationGrade;
