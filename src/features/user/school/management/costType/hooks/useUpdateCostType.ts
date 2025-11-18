import { useMutation, useQueryClient } from "@tanstack/react-query";
import { listCostTypeQueryKey } from "./useListCostType";
import { updateCostType } from "../utilities/api/api";

const useUpdateCostType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      costTypeId,
      educationYearId,
    }: {
      data: any;
      costTypeId: string;
      educationYearId: string;
    }) => updateCostType(data, costTypeId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listCostTypeQueryKey({
          educationYearId: variables.educationYearId,
        }),
      });
    },
    onError: (error) => {
      //logError(`Error Updating Student: ${error}`);
    },
  });
};

export default useUpdateCostType;
