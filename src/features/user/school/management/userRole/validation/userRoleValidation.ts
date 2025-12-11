import z from 'zod'
import { phoneValidation } from '@schoolify/features/user/school/management/shared/validation/phoneValidation'

 export const validationSchema = z.object({
   role: z.enum(['manager', 'reporter'], {
    message:'لطفا یک مورد را انتخاب نمایید'
  }),
  phoneNumber: z
    .string()
    .length(11, {
      message: 'لطفا شماره تلفن خود را صحیح وارد فرمایید'
    })
    .regex(phoneValidation, {
      message: 'شماره تلفن وارد شده صحیح نمی باشد'
    })
})
