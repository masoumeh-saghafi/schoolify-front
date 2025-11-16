import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEducationGrade } from "../utilities/api/api";
import { listEducationGradeQueryKey } from "./useListEducationGrade";

const useUpdateEducationGrade = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      educationGradeId,
      educationLevelId,
    }: {
      data: any;
      educationGradeId: string;
      educationLevelId: string;
    }) => updateEducationGrade(data, educationGradeId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listEducationGradeQueryKey({
          educationLevelId: variables.educationLevelId,
        }),
      });
    },
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useUpdateEducationGrade;
