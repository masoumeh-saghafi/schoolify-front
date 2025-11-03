import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBuySubscriptions } from "../utilities/api/api";
import { useNavigate } from "react-router-dom";
import routes from "@schoolify/core/utilities/routes";
import { listUserSubscriptionsQueryKey } from "./useListUserSubscriptions";

const useBuySubscription = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postBuySubscriptions,

    onSuccess: (response) => {
      if (response.data?.paymentId) {
        navigate(routes.paymentGateway(response.data.paymentId), {
          state: { from: location.pathname },
        });
        queryClient.invalidateQueries({
          queryKey: [listUserSubscriptionsQueryKey],
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

export default useBuySubscription;
