import type { TabBoxDataProps } from '@schoolify/core/components/common/TabBox'
import AddStudentPayment from '@schoolify/features/user/school/management/studentPayment/components/AddStudentPayment'
import ListStudentPayments from '@schoolify/features/user/school/management/studentPayment/components/ListStudentPayments'

export const tabStudentPaymentEndpointsData: TabBoxDataProps[] = [
  {
    label: ' افزودن ',
    key: 'create',
    children: <AddStudentPayment />
  },
  {
    label: ' لیست  ',
    key: 'list',
    children: <ListStudentPayments />
  }
]
