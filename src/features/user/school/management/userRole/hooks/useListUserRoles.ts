import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";

import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { listUserRoles } from "../utilities/api/api";

interface useListUserRolesProps {
  schoolId: string;
  pagination?: BaseRequestPaginationParams;
  filters?: Record<string, string>;
}

export const listUserRolesQueryKey = (props: useListUserRolesProps) =>
  ["listUserRoles", props.schoolId, props.pagination, props.filters].filter(
    (item) => !!item
  );

const useListUserRoles = (props: useListUserRolesProps) => {
  return useQuery({
    queryKey: listUserRolesQueryKey(props),
    queryFn: ({ queryKey }) =>
      listUserRoles(
        queryKey[1] as string,
        queryKey[2] as BaseRequestPaginationParams,
        queryKey[3] as Record<string, string>
      ),
    staleTime: ms("1h"),
    gcTime: ms("24h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    select: (data) => {
      data.data?.docs.map((x) => {
        x.id = x.data?.user.phoneNumber ?? "";
      });
      return data.data;
    },
    enabled: !!props.schoolId,
  });
};

export default useListUserRoles;
