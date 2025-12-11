import type { TabBoxDataProps } from '@schoolify/core/components/common/TabBox'
import AddCostType from '@schoolify/features/user/school/management/costType/components/AddCostType'
import ListCostType from '@schoolify/features/user/school/management/costType/components/ListCostType'

export const tabCostTypeEndpointsData: TabBoxDataProps[] = [
  {
    label: ' افزودن ',
    key: 'create',
    children: <AddCostType />
  },
  {
    label: ' لیست  ',
    key: 'list',
    children: <ListCostType />
  }
]
