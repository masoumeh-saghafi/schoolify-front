import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response"


export default interface getAdminTicketEntity {
  title: string
  user: BaseIdDataEntity<UserInfo>
  school: BaseIdDataEntity<schoolInfo>
  createDate: number
  updateDate: number
  status: string
  type: string
  messages: MessageInfo[]
 
}
export interface schoolInfo {
title:string
}

export interface UserInfo {
  firstName: string
  lastName: string
  phoneNumber: number
  fullName: string
}

export interface MessageInfo {
  content: string
  user: AdminIfo
  createDate: number
  updateDate: number
}

export interface AdminIfo {
 fullName: string
role: 'support' | 'user'

}
