import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response"

export default interface UserTicketEntity {
  title: string
  user: BaseIdDataEntity<UserInfo>
  school: null
  createDate: number
  updateDate: number
  status: string
  type: string
  messages: MessageInfo[]
}

export interface UserInfo {
  fullName: string
  role: 'support' | 'user'
}

export interface MessageInfo {
  content: string
  user: AdminIfo
  createDate: number
  updateDate: number
}

export interface AdminIfo {
  firstName: string
  lastName: string
  fullName: string
}
