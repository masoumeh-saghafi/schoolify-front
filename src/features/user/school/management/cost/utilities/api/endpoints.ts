const costEndpoints = {
  addCost: '/costs',

  updateCost: (costId: string) => `/costs/${costId}`,

  deleteCost: '/costs',

  listCost: (educationYearId: string) =>
    `/education-years/${educationYearId}/costs`,

  listSummaryCostType: (educationYearId: string) =>
    `/education-years/${educationYearId}/costs/types/summary`
}

export default costEndpoints
