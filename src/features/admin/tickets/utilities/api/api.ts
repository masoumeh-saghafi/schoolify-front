import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";

import {
  deleteData,
  getData,
  getListPaginatedData,
  patchData,
  postData,
} from "@schoolify/core/utilities/api/api";

import schoolStudentEndpoints from "@schoolify/features/user/school/management/student/utilities/api/endpoints";
import ticketEndpoints from "./endpoints";
import type ListTicketEntity from "../../types/api/ListAdminTicketEntity";
import type UserTicketEntity from "../../types/api/getAdminTicketEntity";
import type ListAdminTicketsEntity from "../../types/api/ListAdminTicketEntity";
import adminTicketEndpoints from "./endpoints";
import type getAdminTicketEntity from "../../types/api/getAdminTicketEntity";

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

// export const deleteStudent = async (studentId: string) => {
//   return await deleteData<void>(
//     schoolStudentEndpoints.deleteStudent,
//     studentId
//   );
// };

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

// export const addMessageToTicket = async (data: any, ticketId: string) => {
//   return await postData<BaseAddResponseEntity>(
//     ticketEndpoints.addMessageToTicket(ticketId),
//     data
//   );
// };

// export const closeTicket = async (ticketId: string) => {
//   return await postData<BaseAddResponseEntity>(
//     ticketEndpoints.closeTicket(ticketId),
//     {}
//   );
// };
