const adminRoleEndpoints = {
  addAdminRole:'/admin/managers',


  deleteAdminRole: (userId: string) =>
    `/admin/managers/${userId}/remove`,

  listAdminRoles: '/admin/managers'
}

export default adminRoleEndpoints
