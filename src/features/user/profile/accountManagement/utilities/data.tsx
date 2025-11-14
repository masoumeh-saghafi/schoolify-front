import type { TabBoxDataProps } from '@schoolify/core/components/common/TabBox'

import PersonalInfoTab from '@schoolify/features/user/profile/accountManagement/personalInfo/components/index'
import RecentPaymentTab from '@schoolify/features/user/profile/accountManagement/payment/components/idex'
import SubscriptionTab from '@schoolify/features/user/profile/accountManagement/subscription/components/index'
import EditInfoTab from '@schoolify/features/user/profile/accountManagement/editInfo/components/index'

export const tabData: TabBoxDataProps[] = [
  {
    label: 'اطلاعات شخصی',
    key: 'personal-info',
    children: <PersonalInfoTab />
  },
  { label: 'اشتراک', key: 'subscription', children: <SubscriptionTab /> },
  { label: 'تراکنش ها', key: 'payments', children: <RecentPaymentTab /> },
  { label: 'ویرایش اطلاعات', key: 'edit-info', children: <EditInfoTab /> }
]
