import type { TabBoxDataProps } from '@schoolify/core/components/common/TabBox'
import AddClass from '@schoolify/features/user/school/management/class/components/AddClass'
import ListClasses from '@schoolify/features/user/school/management/class/components/ListClasses'

export const tabClassEndpointsData: TabBoxDataProps[] = [
  {
    label: ' افزودن ',
    key: 'create',
    children: <AddClass />
  },
  {
    label: ' لیست  ',
    key: 'list',
    children: <ListClasses />
  }
]
