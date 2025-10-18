import { z } from "zod";

export const phoneValidationRegex = /^(0)9(0[1-5]|[1 3 9]\d|2[0-2])\d{7}$/;

export const phoneSchema = z.object({
  phoneNumber: z.string().regex(phoneValidationRegex, {
    message: "شماره موبایل وارد شده صحیح نمی باشد",
  }),
});
