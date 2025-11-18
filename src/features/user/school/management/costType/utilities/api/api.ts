import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";
import {
  deleteData,
  getListPaginatedData,
  getListSummaryData,
  patchData,
  postData,
} from "@schoolify/core/utilities/api/api";

import CostTypeEndpoints from "./endpoints";
import type ListCostTypeEntity from "../../types/api/ListCostTypeEntity";
import type ListSummaryCostTypesEntity from "../../types/api/ListSummaryCostTypesEntity";



export const  addCostType = async (data: any) => {
  return await postData<BaseAddResponseEntity>(
    CostTypeEndpoints.addCostType,
    data
  );
};

export const updateCostType = async (
  data: any,
  costTypeId: string
) => {
  return await patchData<void>(
    CostTypeEndpoints.updateCostType(costTypeId),
    data
  );
};

export const deleteCostType = async (costTypeId: string) => {
  return await deleteData<void>(
    CostTypeEndpoints.deleteCostType,
    costTypeId
  );
};

export const listCostType = async (
  educationYearId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListCostTypeEntity>>(
    CostTypeEndpoints.listCostType(educationYearId),
    pagination,
    filters
  );
};

export const ListSummaryCostTypes = async (educationYearId: string) => {
  return await getListSummaryData<
    BaseIdDataEntity<ListSummaryCostTypesEntity>
  >(CostTypeEndpoints.listSummaryCostTypes(educationYearId));
};
