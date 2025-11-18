import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCostType } from "../utilities/api/api";
import { listCostTypeQueryKey } from "./useListCostType";

const useAddCostType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      educationYearId,
    }: {
      data: any;
      educationYearId: string;
    }) => addCostType(data),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: listCostTypeQueryKey({
          educationYearId:variables.educationYearId,
        }),
      });
    },
    onError: (error) => {},
  });
};

export default useAddCostType;
