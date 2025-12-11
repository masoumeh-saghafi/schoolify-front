import z from "zod";

export const educationYearTitleSchema = z
  .string()
  .regex(/^14\d{2}-\d{2}$/, {
    message: "مقدار سال تحصیلی باید مانند 03-1402 باشد",
  })
  .refine((val) => {
    const [first, second] = val.split("-");
    const yy1 = Number(first.slice(2)); 
    const yy2 = Number(second);

    return (yy1 + 1) % 100 === yy2;
  }, "مقدار سال تحصیلی باید مانند 03-1402 باشد");
