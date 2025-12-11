import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";

import {
  deleteData,
  getListPaginatedData,
  patchData,
  postData,
} from "@schoolify/core/utilities/api/api";

import schoolStudentEndpoints from "@schoolify/features/user/school/management/student/utilities/api/endpoints";
import type ListStudentsEntity from "@schoolify/features/user/school/management/student/types/api/ListStudentsEntity";
import ticketEndpoints from "./endpoints";
import type ListTicketEntity from "../../types/api/ListTicketEntity";

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
