import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";

import {
  getData,
  getListPaginatedData,
  patchData,
  postData,
} from "@schoolify/core/utilities/api/api";

import type ListAdminTicketsEntity from "@schoolify/features/admin/tickets/types/api/ListAdminTicketEntity";
import adminTicketEndpoints from "@schoolify/features/admin/tickets/utilities/api/endpoints";
import type getAdminTicketEntity from "@schoolify/features/admin/tickets/types/api/getAdminTicketEntity";

export const addAdminTicketResponse = async (data: any, ticketId: string) => {
  return await postData<BaseAddResponseEntity>(
    adminTicketEndpoints.addAdminTicketResponse(ticketId),
    data
  );
};

export const updateAdminTicket = async (data: any, studentId: string) => {
  return await patchData<void>(
    adminTicketEndpoints.UpdateAdminTicket(studentId),
    data
  );
};


export const listAdminTicketEndpoints = async (
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListAdminTicketsEntity>>(
    adminTicketEndpoints.listAdminTicket,
    pagination,
    filters
  );
};

export const getAdminTicket = async (ticketId: string) => {
  return await getData<BaseIdDataEntity<getAdminTicketEntity>>(
    adminTicketEndpoints.getAdminTicket(ticketId)
  );
};

