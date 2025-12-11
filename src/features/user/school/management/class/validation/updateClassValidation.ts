import { classTitleSchema } from '@schoolify/features/user/school/management/class/validation/baseTypes'
import z from 'zod'

export const updateClassValidationSchema = z.object({
  title: classTitleSchema,
 
})

