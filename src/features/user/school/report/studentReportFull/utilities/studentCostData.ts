import type ListStudentReportEntity from '../types/api/ListStudentReportEntity'
import type StudentReportEntity from '../types/api/StudentReportEntity'
import { referenceTypeLabels } from '../validation/baseTypes'

export interface StudentCostField {
  title: string
  baseAmount: number
  referenceType: string
  variableAmount: number
  description: string
}
export const StudentCostData = (
  data: StudentReportEntity | null | undefined
): StudentCostField[] => {
  if (!data?.costs) return []

  return data.costs.map(cost => ({
    title: cost.data?.costType?.data?.title ?? '',
    baseAmount: cost.data?.costType?.data?.baseAmount ?? 0,
    referenceType:
      referenceTypeLabels[cost.data?.costType.data?.referenceType] ||
      cost.data?.costType?.data?.referenceType ||'',
    variableAmount: cost.data?.amount ?? 0,
    description: cost.data?.description ?? ''
  }))
}

export const columns = [
  { id: 'title', label: 'عنوان هزینه' },
  { id: 'baseAmount', label: 'مبلغ ثابت' },
  { id: 'referenceType', label: 'نوع' },
  { id: 'variableAmount', label: 'مبلغ متغیر' },
  { id: 'description', label: 'توضیحات' }
]
