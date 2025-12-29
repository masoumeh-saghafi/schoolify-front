import { useMutation } from "@tanstack/react-query";
import { updateRenewalSubscription } from "@schoolify/features/user/profile/accountManagement/subscription/utilities/api/api";
import { useNavigate } from "react-router-dom";
import routes from "@schoolify/core/utilities/routes";
import { listUserSubscriptionsQueryKey } from "@schoolify/features/user/profile/accountManagement/subscription/hooks/useListUserSubscriptions";
import { listSummarySchoolsQueryKey } from "@schoolify/features/user/shared/school/hooks/useListSummarySchools";

const useRenewalSubscription = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({
      data,
      subscriptionId,
    }: {
      data: any;
      subscriptionId: string;
    }) => updateRenewalSubscription(data, subscriptionId),

    onSuccess: (response) => {
      if (response.data?.paymentId) {
        navigate(routes.paymentGateway(response.data.paymentId), {
          state: {
            from: location.pathname + location.hash,
            refetchQueryKey: [
              listUserSubscriptionsQueryKey,
              listSummarySchoolsQueryKey,
            ],
          },
        });
      } else {
        alert("مشکلی در دریافت اطلاعات پرداخت وجود دارد");
      }
    },
    onError: (error) => {
      console.error("Error updating profile:", error);
    },
  });
};

export default useRenewalSubscription;
