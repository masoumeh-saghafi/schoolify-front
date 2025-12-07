import z from "zod";
import { phoneValidation } from "./baseTypes";

export const addStudentValidationSchema = z
  .object({
    schoolId: z.string(),
    firstName: z
      .string()
      .min(2, "نام باید حداقل ۲ حرف باشد")
      .max(32, "نام نباید بیشتر از ۳۲ حرف باشد"),
    lastName: z
      .string()
      .min(2, "نام خانوادگی باید حداقل ۲ حرف باشد")
      .max(32, "نام خانوادگی نباید بیشتر از ۳۲ حرف باشد"),
    fatherName: z
      .string()
      .min(2, "نام پدر باید حداقل ۲ حرف باشد")
      .max(32, "نام پدر نباید بیشتر از ۳۲ حرف باشد"),
    parentPhoneNumber: z
      .string()
      .length(11, {
        message: "لطفا شماره تلفن خود را صحیح وارد فرمایید",
      })
      .regex(phoneValidation, {
        message: "شماره تلفن وارد شده صحیح نمی باشد",
      }),
    identityType: z
      .string()
      .min(1, "لطفا ملیت را انتخاب کنید")
      .refine((val) => ["iranian", "foreigner"].includes(val), {
        message: "ملیت انتخاب شده معتبر نیست",
      }),
    identityCode: z.string(),
  })
  .refine(
    (data) => {
      if (
        data.identityType === "iranian" &&
        !/^\d{10}$/.test(data.identityCode)
      ) {
        return false;
      }
      if (
        data.identityType === "foreigner" &&
        !/^\d{8,15}$/.test(data.identityCode)
      ) {
        return false;
      }
      return true;
    },
    {
      message: "کد ملی صحیح نیست",
      path: ["identityCode"],
    }
  );
