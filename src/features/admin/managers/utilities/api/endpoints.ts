const adminRoleEndpoints = {
  addAdminRole:'/admin/managers',

  // updateAdminRole: (userId: string, phoneNumber: string) =>
  //   `/schools/${userId}/Admins/${phoneNumber}`,

  deleteAdminRole: (userId: string) =>
    `/admin/managers/${userId}/remove`,

  listAdminRoles: '/admin/managers'
}

export default adminRoleEndpoints
