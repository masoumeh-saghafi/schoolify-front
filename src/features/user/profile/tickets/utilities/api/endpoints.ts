const ticketEndpoints = {
  addTicket: "/tickets",
  changeTicketInfo: (TicketId: string) => `/Tickets/${TicketId}`,
  deleteTicket: "/Tickets",
  listTicket: "/tickets",
};

export default ticketEndpoints;
