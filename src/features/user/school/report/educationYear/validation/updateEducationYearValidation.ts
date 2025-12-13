import z from 'zod'
import { educationYearTitleSchema } from '@schoolify/features/user/school/management/educationYear/validation/baseTypes'

export const updateEducationYearValidationSchema = z.object({
  title: educationYearTitleSchema
})
