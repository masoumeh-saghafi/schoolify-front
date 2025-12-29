import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCost } from "@schoolify/features/user/school/management/cost/utilities/api/api";
import { listCostQueryKey } from "@schoolify/features/user/school/management/cost/hooks/useListCost";
import { listSummaryCostQueryKey } from "../../shared/hooks/useListSummaryCost";

const useUpdateCost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      costId,
      educationYearId,
    }: {
      data: any;
      costId: string;
      educationYearId: string;
    }) => updateCost(data, costId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listCostQueryKey({
          educationYearId: variables.educationYearId,
        }),
      });
      queryClient.invalidateQueries({
        queryKey: listSummaryCostQueryKey({
          educationYearId: variables.educationYearId,
        }),
      });
    },
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useUpdateCost;
