import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'

export default interface ListTicketEntity {
  title: string
  school: BaseIdDataEntity<SchoolInfo>
  createDate: number
  updateDate: number
  status: string
  type: string
}
export interface SchoolInfo {
  title: string
}
