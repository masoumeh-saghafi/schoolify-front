import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";

export interface ListUserSubscriptionsSchoolEntity {
  title: string;
}

export default interface ListUserSubscriptionsEntity {
  expireDate: string;
  school: BaseIdDataEntity<ListUserSubscriptionsSchoolEntity>;
  createDate: string;
  updateDate: string | null;
  status: string;
}
