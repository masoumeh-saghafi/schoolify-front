import { educationGradeTitleSchema } from '@schoolify/features/user/school/management/educationGrade/validation/baseTypes'
import z from 'zod'

export const updateEducationGradeValidationSchema = z.object({
  title: educationGradeTitleSchema,
 
})

