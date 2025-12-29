import { useMutation, useQueryClient } from "@tanstack/react-query";
import { listClassQueryKey } from "@schoolify/features/user/school/management/class/hooks/useListClass";
import { addClass } from "@schoolify/features/user/school/management/class/utilities/api/api";
import { listSummaryClassQueryKey } from "../../shared/hooks/useListSummaryClass";

const useAddClass = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      educationGradeId,
    }: {
      data: any;
      educationGradeId: string;
    }) => addClass(data),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listClassQueryKey({
          educationGradeId: variables.educationGradeId,
        }),
      });
      queryClient.invalidateQueries({
        queryKey: listSummaryClassQueryKey({
          educationGradeId: variables.educationGradeId,
        }),
      });
    },
    onError: (error) => {},
  });
};

export default useAddClass;
