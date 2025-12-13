import z from 'zod'
import { baseCostFieldsSchema } from '@schoolify/features/user/school/management/cost/validation/baseTypes'

export const validationSchema = baseCostFieldsSchema.safeExtend({
  costTypeId: z.string().min(1, 'انتخاب نوع هزینه الزامی است'),
  referenceRecordId: z.string()
})
