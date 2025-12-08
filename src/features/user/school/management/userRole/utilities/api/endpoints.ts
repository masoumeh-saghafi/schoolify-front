const UserRoleEndpoints = {
  addUserRole: (schoolId: string) => `/schools/${schoolId}/users`,

  updateUserRole: (schoolId: string, phoneNumber: string) =>
    `/schools/${schoolId}/users/${phoneNumber}`,

  deleteUserRole: (schoolId: string, phoneNumber: string) =>
    `/schools/${schoolId}/users/${phoneNumber}`,

  listUserRoles: (schoolId: string) => `/schools/${schoolId}/users`
}

export default UserRoleEndpoints
