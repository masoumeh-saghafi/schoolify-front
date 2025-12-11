import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addCost } from "@schoolify/features/user/school/management/cost/utilities/api/api";
import { listCostQueryKey } from "@schoolify/features/user/school/management/cost/hooks/useListCost";

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
    },
    onError: (error) => {},
  });
};

export default useAddCost;
