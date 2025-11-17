import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { listSummarySchools } from "@schoolify/features/user/school/management/base/utilities/api/api";

export const listSummarySchoolsQueryKey = ["listSummarySchools"];

const useListSummarySchools = (ignoreFetchData: boolean = false) => {
  return useQuery({
    queryKey: listSummarySchoolsQueryKey,

    queryFn: () => listSummarySchools(),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
    enabled: !ignoreFetchData,
  });
};

export default useListSummarySchools;
