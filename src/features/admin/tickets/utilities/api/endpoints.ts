const adminTicketEndpoints = {
  getAdminTicket: (ticketId: string) => `/admin/tickets/${ticketId}`,

  UpdateAdminTicket: (ticketId: string) => `/admin/tickets/${ticketId}`,

  listAdminTicket: '/admin/tickets',

  addAdminTicketResponse: (ticketId: string) =>
    `/admin/tickets/${ticketId}/messages`,

  closeTicket: (ticketId: string) => `/tickets/${ticketId}/close`
}

export default adminTicketEndpoints
