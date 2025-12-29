import { useMutation } from "@tanstack/react-query";
import routes from "@schoolify/core/utilities/routes";
import { useNavigate } from "react-router-dom";
import { updateBuySubscriptions } from "@schoolify/features/user/profile/accountManagement/subscription/utilities/api/api";
import { listUserSubscriptionsQueryKey } from "@schoolify/features/user/profile/accountManagement/subscription/hooks/useListUserSubscriptions";
import { listSummarySchoolsQueryKey } from "@schoolify/features/user/shared/school/hooks/useListSummarySchools";

const useBuySubscription = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: updateBuySubscriptions,

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
  });
};

export default useBuySubscription;
