import z from 'zod'

export const updateEducationLevelValidationSchema = z.object({
  title: z
     .string()
     .min(2, 'نام باید حداقل ۲ حرف باشد')
     .max(32, 'نام نباید بیشتر از ۳۲ حرف باشد'),

})
