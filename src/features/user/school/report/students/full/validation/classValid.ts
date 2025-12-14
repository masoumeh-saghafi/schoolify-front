import z from 'zod'


export const validationSchema = z.object({
  educationYearId: z.string().min(1, 'انتخاب سال تحصیلی الزامی است'),
  educationLevelId: z.string().min(1, 'انتخاب مقطع تحصیلی الزامی است'),
  educationGradeId: z.string().min(1, 'انتخاب پایه تحصیلی الزامی است'),
  classId: z.string().min(1, 'انتخاب کلاس الزامی است'),
  studentId: z.string().min(1, 'انتخاب دانش‌آموز الزامی است')
})
