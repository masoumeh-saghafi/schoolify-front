export const IdentityTypeEnum = {
  IRANIAN: { key: "iranian", value: "ایرانی" },
  FOREIGNER: { key: "foreigner", value: "اتباع" },
} as const;

export const identityTypeOptions = Object.values(IdentityTypeEnum);

export const phoneValidation = new RegExp(
  "^(0)9(0[1-5]|[1 3 9]\\d|2[0-2])\\d{7}$"
);
