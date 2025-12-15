import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response"

export default interface ListAdminTicketEntity {
  title: string
  user: BaseIdDataEntity<AdminInfo>
  school: BaseIdDataEntity<SchoolInfo>
  createDate: number
  updateDate: number
  status: string
  type: string
}

export interface AdminInfo {
  firstName: string
  lastName: string
  phoneNumber: number
  fullName: string
}
export interface SchoolInfo {
  title: string
}
