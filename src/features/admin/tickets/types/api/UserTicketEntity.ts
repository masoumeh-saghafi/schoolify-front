import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";

export default interface UserTicketEntity {
  title: string;
  user: BaseIdDataEntity<TicketUserInfo>;
  school: BaseIdDataEntity<TicketSchoolInfo>;
  createDate: number;
  updateDate: number;
  status: string;
  type: string;
  messages: MessageInfo[];
}

export interface TicketUserInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  phoneNumber: string;
}

export interface TicketSchoolInfo {
  title: string;
}

export interface MessageInfo {
  content: string;
  user: MessageUserInfo;
  createDate: number;
  updateDate: number;
}

export interface MessageUserInfo {
  fullName: string;
  role: "support" | "user";
}
