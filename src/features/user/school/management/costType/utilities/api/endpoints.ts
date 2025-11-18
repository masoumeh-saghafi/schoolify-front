const  CostTypeEndpoints = {
  addCostType: "/costs/types",
  updateCostType: (costTypeId: string) =>
    `/costs/types/${costTypeId}`,
  deleteCostType: "/costs/types",
  listCostType: (educationYearId: string) =>
    `/education-years/${educationYearId}/costs/types`,
  listSummaryCostTypes: (educationYearId: string) =>
    `/education-years/${educationYearId}/costs/types/summary`,
};

export default CostTypeEndpoints;
