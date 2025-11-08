import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import { getData, postData } from '@schoolify/core/utilities/api'
import profileAccountManagementEndpoints from '@schoolify/features/user/profile/accountManagement/utilities/api/endpoints'
import type PaymentStatuEntity from '@schoolify/features/user/profile/accountManagement/payment/types/api/PaymentStatuEntity'
import type ListPaymentEntity from '@schoolify/features/user/profile/accountManagement/payment/types/api/ListPaymentEntity'

export const postPaymentStatus = async (data: any, paymentId: string) => {
  return await postData<BaseIdDataEntity<PaymentStatuEntity>>(
    `${profileAccountManagementEndpoints.buySubscription}/${paymentId}/renewal`,
    data
  )
}

export const getListPayment = async () => {
  return await getData<BaseIdDataEntity<ListPaymentEntity>[]>(
    profileAccountManagementEndpoints.payment
  )
}
