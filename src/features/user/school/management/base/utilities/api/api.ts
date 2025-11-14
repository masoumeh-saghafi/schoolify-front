import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import { getData } from "@schoolify/core/utilities/api/api";

import schoolManagementEndpoints from "@schoolify/features/user/school/management/base/utilities/api/endpoints";
import type ListSummarySchoolsEntity from "@schoolify/features/user/school/management/base/types/api/ListSummarySchoolsEntity";

export const listSummarySchools = async () => {
  return await getData<BaseIdDataEntity<ListSummarySchoolsEntity>[]>(
    schoolManagementEndpoints.listSummarySchool
  );
};
