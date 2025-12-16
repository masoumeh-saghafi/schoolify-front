import type UserProfileEntity from "@schoolify/features/shared/profile/types/api/UserProfileEntity";

export const PersonalInfoData = (
  user: UserProfileEntity | null | undefined
) => [
  { label: "نام", value: user?.firstName },
  { label: "نام خانوادگی", value: user?.lastName },
  { label: "شماره موبایل", value: user?.phoneNumber },
];
