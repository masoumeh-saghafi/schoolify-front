import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addCost } from "@schoolify/features/user/school/management/cost/utilities/api/api";
import { listCostQueryKey } from "@schoolify/features/user/school/management/cost/hooks/useListCost";
import { listSummaryCostQueryKey } from "../../shared/hooks/useListSummaryCost";

const useAddCost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      educationYearId,
    }: {
      data: any;
      educationYearId: string;
    }) => addCost(data),

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
    onError: (error) => {},
  });
};

export default useAddCost;
