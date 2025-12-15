import z from "zod";

export const ticketDetailAdminValidationSchema = z.object({
  content: z.string().min(2, "متن پیام نمی‌تواند خالی باشد"),
 
});
