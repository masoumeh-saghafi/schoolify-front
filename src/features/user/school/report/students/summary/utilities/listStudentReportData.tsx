import useMapToOptions, {
  type OptionType
} from '@schoolify/core/hooks/common/useMapToOptions'

export type StudentReportFields =
  | 'educationYearId'
  | 'educationLevelId'
  | 'educationGradeId'
  | 'studentId'
  | 'classId'

export interface listSummaryStudentReportDataInterface {
  name: StudentReportFields
  label: string
  optionsMapper: (data: any[]) => OptionType[]
  loading: boolean
}

export const listSummaryStudentReportData: listSummaryStudentReportDataInterface[] = [
  {
    name: 'educationYearId',
    label: 'سال تحصیلی',
    optionsMapper: useMapToOptions,
    loading: false
  },
  {
    name: 'educationLevelId',
    label: 'مقطع تحصیلی',
    optionsMapper: useMapToOptions,
    loading: false
  },
  {
    name: 'educationGradeId',
    label: 'پایه تحصیلی',
    optionsMapper: useMapToOptions,
    loading: false
  },
  {
    name: 'classId',
    label: 'کلاس',
    optionsMapper: useMapToOptions,
    loading: false
  }
]
