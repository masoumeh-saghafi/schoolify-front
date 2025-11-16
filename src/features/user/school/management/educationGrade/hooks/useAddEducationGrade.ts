import { useMutation, useQueryClient } from "@tanstack/react-query";
import { listEducationGradeQueryKey } from "./useListEducationGrade";
import { addEducationGrade } from "../utilities/api/api";

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
    },
    onError: (error) => {},
  });
};

export default useAddEducationGrade;
