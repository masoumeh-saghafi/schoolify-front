 const IdentityTypeEnum = {
  IRANIAN: { key: "iranian", value: "ایرانی" },
  FOREIGNER: { key: "foreigner", value: "اتباع" },
} as const;

export const identityTypeOptions = Object.values(IdentityTypeEnum);
