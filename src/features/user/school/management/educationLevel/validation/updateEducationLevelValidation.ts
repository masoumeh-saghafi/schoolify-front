import { educationLevelTitleSchema } from '@schoolify/features/user/school/management/educationLevel/validation/baseTypes'
import z from 'zod'

export const updateEducationLevelValidationSchema = z.object({
  title: educationLevelTitleSchema,
 
})

