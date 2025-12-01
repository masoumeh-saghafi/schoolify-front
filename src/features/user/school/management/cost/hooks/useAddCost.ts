import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addCost } from "../utilities/api/api";
import { listCostQueryKey } from "./useListCost";

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
