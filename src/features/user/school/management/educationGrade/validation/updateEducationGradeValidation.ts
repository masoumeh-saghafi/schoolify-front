import z from 'zod'
import { educationGradeTitleSchema } from '@schoolify/features/user/school/management/educationGrade/validation/baseTypes'

export const updateEducationGradeValidationSchema = z.object({
  title: educationGradeTitleSchema,
 
})

