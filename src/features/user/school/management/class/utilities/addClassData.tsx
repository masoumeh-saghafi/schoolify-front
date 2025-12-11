import useMapToOptions, {
  type OptionType
} from '@schoolify/core/hooks/common/useMapToOptions'

type EducationGradeFields =
  | 'title'
  | 'educationYearId'
  | 'educationLevelId'
  | 'educationGradeId'

export const addClassData: {
  name: EducationGradeFields
  label: string
  optionsMapper: (data: any[]) => OptionType[]
  loading: boolean
}[] = [
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
  }
]
