import z from 'zod'
import { baseStudentFieldsSchema } from '@schoolify/features/user/school/management/student/validation/baseTypes'


export const addTicketValidationSchema = z.object({
  title: z.string().min(2, 'موضوع باید حداقل ۲ حرف باشد'),
  type: z.string().min(1, 'انتخاب نوع پیام الزامی است'),
  message: z.string().min(2, 'متن پیام نمی‌تواند خالی باشد'),
  schoolId: z.string().optional()
})
