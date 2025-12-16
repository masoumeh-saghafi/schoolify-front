import { phoneValidation } from "@schoolify/features/user/school/management/shared/validation/phoneValidation"
import z from "zod"

const RoleTypeEnum = {
  MANAGER: { key: 'manager', value: 'مدیر' },
  SUPPORT: { key: 'support', value: 'پشتیبان' }
} as const

export const roleTypeOptions = Object.values(RoleTypeEnum)

export const addAdminRoleValidationSchema = z.object({
  firstName: z
    .string()
    .min(2, 'نام باید حداقل ۲ حرف باشد')
    .max(32, 'نام نباید بیشتر از ۳۲ حرف باشد'),

  lastName: z
    .string()
    .min(2, 'نام خانوادگی باید حداقل ۲ حرف باشد')
    .max(32, 'نام خانوادگی نباید بیشتر از ۳۲ حرف باشد'),

  role: z.enum(['manager', 'support'],'لطفا نوع دسترسی را مشخص فرمایید '),

  phoneNumber: z
    .string()
    .length(11, {
      message: 'لطفا شماره تلفن خود را صحیح وارد فرمایید'
    })
    .regex(phoneValidation, {
      message: 'شماره تلفن وارد شده صحیح نمی باشد'
    })
})
