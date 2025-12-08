import z from "zod";

 export const updateUserRoleValidationSchema = z.object({
  role: z.enum(['manager', 'reporter'], {
    message:'لطفا یک مورد را انتخاب نمایید.'
  }),
  
})

