const customerEndpoints = {
  
  listcustomer:'/admin/customers'
 ,
  getImpersonateToken: (userId: string) =>
     `/admin/customers/${userId}/impersonate/token`,

}

export default customerEndpoints
