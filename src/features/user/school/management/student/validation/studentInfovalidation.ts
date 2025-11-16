import z from 'zod'

const phoneValidation = new RegExp('^(0)9(0[1-5]|[1 3 9]\\d|2[0-2])\\d{7}$')

export const validationSchema = z
  .object({
    schoolId: z.string(),
    firstName: z
      .string()
      .min(2, 'نام باید حداقل ۲ حرف باشد')
      .max(32, 'نام نباید بیشتر از ۳۲ حرف باشد'),
    lastName: z
      .string()
      .min(2, 'نام خانوادگی باید حداقل ۲ حرف باشد')
      .max(32, 'نام خانوادگی نباید بیشتر از ۳۲ حرف باشد'),
    fatherName: z
      .string()
      .min(2, 'نام پدر باید حداقل ۲ حرف باشد')
      .max(32, 'نام پدر نباید بیشتر از ۳۲ حرف باشد'),
    parentPhoneNumber: z
      .string()
      .length(11, {
        message: 'لطفا شماره تلفن خود را صحیح وارد فرمایید'
      })
      .regex(phoneValidation, {
        message: 'شماره تلفن وارد شده صحیح نمی باشد'
      }),
    identityType: z.enum(['iranian', 'foreigner']),
    identityCode: z.string()
  })
  .refine(
    data => {
      if (
        data.identityType === 'iranian' &&
        !/^\d{10}$/.test(data.identityCode)
      ) {
        return false
      }
      if (
        data.identityType === 'foreigner' &&
        !/^\d{8,15}$/.test(data.identityCode)
      ) {
        return false
      }
      return true
    },
    {
      message: 'کد ملی صحیح نیست',
      path: ['identityCode']
    }
  )
