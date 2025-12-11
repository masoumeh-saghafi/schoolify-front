import z from 'zod'

export const baseCostTypeFieldsSchema = z.object({
  title: z
    .string()
    .min(2, 'نام باید حداقل ۲ حرف باشد')
    .max(32, 'نام نباید بیشتر از ۳۲ حرف باشد'),
  baseAmount: z.preprocess(
    val => Number(val),
    z
      .number({
        message: 'هزینه باید عددی باشد'
      })
      .refine(value => !isNaN(value), { message: 'هزینه باید عددی باشد' })
  ),

  isActive: z
    .enum(['true', 'false'] as const, {
      message: 'انتخاب وضعیت الزامی است'
    })
    .refine(val => val === 'true' || val === 'false', {
      message: 'انتخاب وضعیت الزامی است'
    })
})
