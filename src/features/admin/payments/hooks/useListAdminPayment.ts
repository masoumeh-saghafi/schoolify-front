import ms from "ms";
import { useQuery } from "@tanstack/react-query";

import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import { listAdminPayment } from "@schoolify/features/admin/payments/utilities/api/api";


interface useListAdminPaymentProps {
  pagination?: BaseRequestPaginationParams;
  filters?: Record<string, string>;
}

export const listAdminPaymentQueryKey = (props: useListAdminPaymentProps) =>
  ["listAdminPayment", props.pagination, props.filters].filter((item) => !!item);

const useListAdminPayment = (props: useListAdminPaymentProps) => {
  return useQuery({
    queryKey: listAdminPaymentQueryKey(props),
    queryFn: ({ queryKey }) =>
      listAdminPayment(
        queryKey[1] as BaseRequestPaginationParams,
        queryKey[2] as Record<string, string>
      ),
    staleTime: ms("1h"),
    gcTime: ms("24h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    select: (data) => data.data,
    
  });
};

export default useListAdminPayment;
