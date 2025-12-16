export type userRoles = "superManager" | "manager" | "support" | "user";
export default interface UserProfileEntity {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  fullName: string;
  role: userRoles;
}
