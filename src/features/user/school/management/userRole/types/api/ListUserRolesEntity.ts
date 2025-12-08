export default interface ListUserRolesEntity {
  user: ListUserRolesUserEntity
  role: 'manager' | 'reporter'
  createDate: number
  updateDate: number
}

export interface ListUserRolesUserEntity {
  fullName: string
  phoneNumber: string
}
