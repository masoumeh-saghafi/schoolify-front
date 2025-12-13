import z from 'zod'
import { classTitleSchema } from '@schoolify/features/user/school/management/class/validation/baseTypes'
export const validationSchema = z.object({
  title: classTitleSchema,
  educationYearId: z.string().min(1, 'انتخاب سال تحصیلی الزامی است'),
  educationLevelId: z.string().min(1, 'انتخاب مقطع تحصیلی الزامی است'),
  educationGradeId: z.string().min(1, 'انتخاب پایه تحصیلی الزامی است')
})
