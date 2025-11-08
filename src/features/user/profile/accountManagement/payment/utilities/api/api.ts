import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import { getData, postData } from "@schoolify/core/utilities/api";
import profileAccountManagementEndpoints from "@schoolify/features/user/profile/accountManagement/utilities/api/endpoints";
import type ListPaymentEntity from "@schoolify/features/user/profile/accountManagement/payment/types/api/ListPaymentEntity";

export const postChangePaymentStatus = async (data: any, paymentId: string) => {
  return await postData<void>(
    profileAccountManagementEndpoints.changePaymentStatus(paymentId),
    data
  );
};

export const getListPayment = async () => {
  return await getData<BaseIdDataEntity<ListPaymentEntity>[]>(
    profileAccountManagementEndpoints.payment
  );
};
