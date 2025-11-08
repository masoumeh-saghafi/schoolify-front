export default interface updateUserProfileEntity {
   firstName: string;
  lastName: string;
  phoneNumber: string;
  fullName: string;
  role: "superManager" | "manager" | "support" | "user";
}
