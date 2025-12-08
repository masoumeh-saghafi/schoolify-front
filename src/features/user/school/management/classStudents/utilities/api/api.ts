import type {
  BaseAddResponseEntity,
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";
import {
  deleteWithQueryParams,
  getListSummaryData,
  postData,
} from "@schoolify/core/utilities/api/api";
import classStudentsEndpoints from "./endpoints";
import type listSummaryClassesEntity from "../../types/api/listSummaryClassesEntity";

export const addClassStudent = async (studentId: string, classId: string) => {
  return await postData<BaseAddResponseEntity>(
    classStudentsEndpoints.addClasseStudent(classId),
    {
      studentIds: [studentId],
    }
  );
};

export const deleteClassStudent = async (
  classId: string,
  studentId: string
) => {
  return await deleteWithQueryParams<void>(
    classStudentsEndpoints.deleteClassStudent(classId),
    "studentIds",
    [studentId]
  );
};

export const listSummaryClasses = async (educationGradeId: string) => {
  return await getListSummaryData<BaseIdDataEntity<listSummaryClassesEntity>>(
    classStudentsEndpoints.listSummaryClasses(educationGradeId)
  );
};
