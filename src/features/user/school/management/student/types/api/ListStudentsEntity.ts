

export default interface ListStudentsEntity {
  firstName: string
  lastName: string
  fatherName: string
  parentPhoneNumber: number
  identityCode: number
  createDate: number
  updateDate: number
  identityType: 'iranian' | 'foreigner'
}
