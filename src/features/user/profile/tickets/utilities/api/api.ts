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
import ticketEndpoints from "@schoolify/features/user/profile/tickets/utilities/api/endpoints";
import type ListTicketEntity from "@schoolify/features/user/profile/tickets/types/api/ListTicketEntity";
import type UserTicketEntity from "@schoolify/features/user/profile/tickets/types/api/UserTicketEntity";

export const addTicket = async (data: any) => {
  return await postData<BaseAddResponseEntity>(ticketEndpoints.addTicket, data);
};

export const updateStudent = async (data: any, studentId: string) => {
  return await patchData<void>(
    schoolStudentEndpoints.changeStudentInfo(studentId),
    data
  );
};

export const deleteStudent = async (studentId: string) => {
  return await deleteData<void>(
    schoolStudentEndpoints.deleteStudent,
    studentId
  );
};

export const listTicket = async (
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListTicketEntity>>(
    ticketEndpoints.listTicket,
    pagination,
    filters
  );
};

export const getUserTicket = async (ticketId: string) => {
  return await getData<BaseIdDataEntity<UserTicketEntity>>(
    ticketEndpoints.getUserTicket(ticketId)
  );
};

export const addMessageToTicket = async (data: any, ticketId: string) => {
  return await postData<BaseAddResponseEntity>(
    ticketEndpoints.addMessageToTicket(ticketId),
    data
  );
};

export const closeTicket = async (ticketId: string) => {
  return await postData<BaseAddResponseEntity>(
    ticketEndpoints.closeTicket(ticketId),
    {}
  );
};
