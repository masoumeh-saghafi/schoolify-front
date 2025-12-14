import type ListStudentReportEntity from '../types/api/ListStudentReportEntity'
import type StudentReportEntity from '../types/api/StudentReportEntity'
import { identityTypeOptions } from '../validation/baseTypes'

interface StudentInfoField {
  label: string
  value?: string | number | null
}

export const StudentInfoData = (
  data: StudentReportEntity | null | undefined,
 
): StudentInfoField[] => [
  {
    label: 'نام',
    value: data?.firstName
  },
  {
    label: 'نام خانوادگی',
    value: data?.lastName
  },
  {
    label: 'هویت',
    value:
      identityTypeOptions.find(option => option.key === data?.identityType)
        ?.value ?? null
  },
  {
    label: 'شناسه هویتی',
    value: data?.identityCode
  },
  {
    label: 'نام پدر',
    value: data?.fatherName
  },
  {
    label: 'شماره تماس',
    value: data?.parentPhoneNumber
  },
  {
    label: 'کلاس',
    value: data?.class?.data?.title
  }
]
