import z from "zod";
import type { OptionType } from "@schoolify/core/hooks/common/useMapToOptions";

export const isActiveTypes: OptionType[] = [
  { key: true, value: "فعال" },
  { key: false, value: "غیرفعال" },
];

export const baseCostTypeFieldsSchema = z.object({
  title: z
    .string()
    .min(2, "نام باید حداقل ۲ حرف باشد")
    .max(32, "نام نباید بیشتر از ۳۲ حرف باشد"),
  baseAmount: z.preprocess(
    (val) => Number(val),
    z
      .number({
        message: "هزینه باید عددی باشد",
      })
      .refine((value) => !isNaN(value), { message: "هزینه باید عددی باشد" })
  ),
  isActive: z.boolean("انتخاب وضعیت الزامی است"),
});
