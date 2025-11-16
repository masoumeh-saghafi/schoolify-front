import z from 'zod'
export const validationSchema = z.object({
  title: z
    .string()
    .min(2, 'نام باید حداقل ۲ حرف باشد')
    .max(32, 'نام نباید بیشتر از ۳۲ حرف باشد'),
  educationYearId: z.string().min(1, 'انتخاب سال تحصیلی الزامی است'),
  educationLevelId: z.string().min(1, 'انتخاب مقطع تحصیلی الزامی است'),
  educationGradeId: z.string().min(1, 'انتخاب پایه تحصیلی الزامی است')
})
