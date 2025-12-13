const ticketEndpoints = {
  addTicket: '/tickets',
  changeTicketInfo: (ticketId: string) => `/tickets/${ticketId}`,

  listTicket: '/tickets',
  getUserTicket: (ticketId: string) => `/tickets/${ticketId}`,
  addMessageToTicket: (ticketId: string) => `/tickets/${ticketId}/messages`,
  closeTicket: (ticketId: string) => `/tickets/${ticketId}/close`
}

export default ticketEndpoints
