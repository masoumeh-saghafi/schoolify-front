import z from 'zod'
import { educationGradeTitleSchema } from '@schoolify/features/user/school/management/educationGrade/validation/baseTypes'

export const validationSchema = z.object({
  title:educationGradeTitleSchema,
  educationYearId: z.string().min(1, 'انتخاب سال تحصیلی الزامی است'),
  educationLevelId: z.string().min(1, 'انتخاب مقطع تحصیلی الزامی است')
})
