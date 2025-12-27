export type UserRoles = "superManager" | "manager" | "support" | "user";
export default interface UserProfileEntity {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  fullName: string;
  role: UserRoles;
}
