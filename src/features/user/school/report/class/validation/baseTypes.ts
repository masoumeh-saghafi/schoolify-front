import z from 'zod'

export const classTitleSchema = z
  .string()
  .min(2, 'نام باید حداقل ۲ حرف باشد')
  .max(32, 'نام نباید بیشتر از ۳۲ حرف باشد')
