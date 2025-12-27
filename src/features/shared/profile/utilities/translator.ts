import type { UserRoles } from "@schoolify/features/shared/profile/types/api/UserProfileEntity";

export const translateUserRoleToPersian = (
  role: UserRoles | null | undefined
) => {
  switch (role) {
    case "superManager":
      return "مدیرکل";
    case "manager":
      return "مدیر";
    case "support":
      return "پشتیبان";
    case "user":
      return "کاربر";
    default:
      break;
  }
};
