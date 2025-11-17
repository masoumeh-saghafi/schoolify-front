import useMapToOptions, { type OptionType } from "@schoolify/core/hooks/common/useMapToOptions"

type EducationGradeFields = 'title' | 'educationYearId' | 'educationLevelId'

export const addEducationLGradeData: {
  name: EducationGradeFields
  label: string
  optionsMapper: (data: any[]) => OptionType[]
  loading: boolean
}[] = [
  {
    name: 'educationYearId',
    label: 'سال تحصیلی',
    optionsMapper: useMapToOptions
,
    loading: false
  },
  {
    name: 'educationLevelId',
    label: 'مقطع تحصیلی',
    optionsMapper: useMapToOptions
,
    loading: false
  }
]
