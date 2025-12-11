import z from 'zod'
import { baseCostTypeFieldsSchema } from '@schoolify/features/user/school/management/costType/validation/baseTypes'

export const validationSchema = baseCostTypeFieldsSchema.safeExtend({
  referenceType: z.string().min(1, 'انتخاب نوع اجرا الزامی است'),

  educationYearId: z.string().min(1, 'انتخاب سال تحصیلی الزامی است')
})
