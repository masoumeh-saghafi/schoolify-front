import type { UserSchoolRoles } from '@schoolify/features/user/shared/school/types/api/ListSummarySchoolsEntity'

export const translateUserSchoolRoleToPersian = (
  role: UserSchoolRoles | null | undefined
) => {
  switch (role) {
    case 'owner':
      return 'مدیر'
    case 'manager':
      return 'معاون'
    case 'reporter':
      return 'ناظر'
    default:
      break
  }
}
