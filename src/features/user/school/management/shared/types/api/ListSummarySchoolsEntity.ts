export type UserSchoolRoles = "manager" | "reporter" | "owner";

export default interface ListSummarySchoolsEntity {
  title: string;
  role: UserSchoolRoles;
  status: "waitingForPayment" | "active" | "expired";
}
