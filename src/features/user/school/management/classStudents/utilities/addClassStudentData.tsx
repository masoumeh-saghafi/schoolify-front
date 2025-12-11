import useMapToOptions from '@schoolify/core/hooks/common/useMapToOptions'
import {
  listClassStudentData,
  type listClassStudentDataInterface
} from '@schoolify/features/user/school/management/classStudents/utilities/listClassStudentData'

export const addClassStudentData: listClassStudentDataInterface[] = [
  ...listClassStudentData,
  {
    name: 'studentId',
    label: 'کدملی دانش‌آموز',
    optionsMapper: useMapToOptions,
    loading: false
  }
]
