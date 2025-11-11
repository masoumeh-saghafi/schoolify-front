import z from 'zod'

export const titleValidationSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'تعداد حروف باید بیشتر از 2 حرف باشد'
    })
    .max(32, { message: 'تعداد حروف باید کمتر از 32 حرف باشد' })
})
