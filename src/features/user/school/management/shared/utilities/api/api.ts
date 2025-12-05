import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import { getData } from "@schoolify/core/utilities/api/api";
import type ListSummarySchoolsEntity from "../../types/api/ListSummarySchoolsEntity";
import schoolManagementEndpoints from "./endpoints";

export const listSummarySchools = async () => {
  return await getData<BaseIdDataEntity<ListSummarySchoolsEntity>[]>(
    schoolManagementEndpoints.listSummarySchool
  );
};
