import z from "zod";

export const ticketDetailValidationSchema = z.object({
  content: z.string().min(2, "متن پیام نمی‌تواند خالی باشد"),
  // status: z.string().optional()
});
