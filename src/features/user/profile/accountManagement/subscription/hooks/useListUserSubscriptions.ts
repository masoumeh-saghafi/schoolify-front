import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getListUserSubscription } from "@schoolify/features/user/profile/accountManagement/subscription/utilities/api/api";

export const listUserSubscriptionsQueryKey = ["getListUserSubscription"];

const useListUserSubscriptions = () => {
  return useQuery({
    queryKey: listUserSubscriptionsQueryKey,
    queryFn: getListUserSubscription,
    staleTime: ms("1h"),
    gcTime: ms("24h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    select: (data) => data.data,
  });
};

export default useListUserSubscriptions;
