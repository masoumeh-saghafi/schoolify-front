import z from 'zod'
export const validationSchema = z.object({
  title: z
    .string()
    .min(2, 'نام باید حداقل ۲ حرف باشد')
    .max(32, 'نام نباید بیشتر از ۳۲ حرف باشد'),
  baseAmount: z.preprocess(
    val => Number(val),
    z.number().refine(value => !isNaN(value), { message: 'هزینه باید عددی باشد' })
  ),
  referenceType: z.string().min(1, 'انتخاب نوع اجرا الزامی است'),
  isActive: z
    .boolean()
    .optional()
    .refine(val => typeof val === 'boolean', {
      message: 'وضعیت فعال بودن الزامی است'
    }),
  educationYearId: z.string().min(1, 'انتخاب سال تحصیلی الزامی است')
})
