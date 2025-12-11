import z from 'zod'
import { educationLevelTitleSchema } from '@schoolify/features/user/school/management/educationLevel/validation/baseTypes'

export const validationSchema = z.object({
  title: educationLevelTitleSchema,
  educationYearId: z.string().min(1, 'انتخاب سال تحصیلی الزامی است')
})
