import type { TabBoxDataProps } from '@schoolify/core/components/common/TabBox'
import AddEducationGrade from '@schoolify/features/user/school/management/educationGrade/components/AddEducationGrade'
import ListEducationGrade from '@schoolify/features/user/school/management/educationGrade/components/ListEducationGrade'

export const tabEducationGradeEndpointsData: TabBoxDataProps[] = [
  {
    label: ' افزودن ',
    key: 'create',
    children: <AddEducationGrade />
  },
  {
    label: ' لیست  ',
    key: 'list',
    children: <ListEducationGrade />
  }
]
