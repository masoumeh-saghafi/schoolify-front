import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getlistSummarySchools } from "@schoolify/features/user/school/utilities/api/api";

const useUserProfile = (ignoreFetchData: boolean = false) => {
  return useQuery({
    queryKey: ["listSummarySchools"],

    queryFn: () =>
      !ignoreFetchData ? getlistSummarySchools() : Promise.resolve(null),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
  });
};

export default useUserProfile;
