import { getGridStringOperators } from "@mui/x-data-grid";

// Allowed filter operator types
export const ALLOWED_OPERATOR_TYPES = [
  "equals",
  "contains",
  "startsWith",
  "endsWith",
];

// Custom string operators for filtering
export const customStringOperators = getGridStringOperators().filter((op) =>
  ALLOWED_OPERATOR_TYPES.includes(op.value)
);

// Localization texts for DataGrid
export const getDataGridLocaleText = (data: any) => ({
  columnMenuSortAsc: "مرتب‌سازی صعودی",
  columnMenuSortDesc: "مرتب‌سازی نزولی",
  columnMenuFilter: "فیلتر",
  columnMenuHideColumn: "مخفی کردن ستون",
  columnMenuManageColumns: "مدیریت ستون‌ها",
  columnMenuUnsort: "حذف مرتب‌سازی",
  filterPanelColumns: "ستون",
  filterPanelOperator: "نوع فیلتر",
  filterPanelInputLabel: "مقدار فیلتر",
  filterPanelInputPlaceholder: "مقدار فیلتر را وارد کنید",
  filterOperatorContains: "شامل شود",
  filterOperatorEquals: "برابر باشد",
  filterOperatorStartsWith: "شروع شود با",
  filterOperatorEndsWith: "تمام شود با",
  columnMenuLabel: "منو",
  columnHeaderSortIconLabel: "مرتب‌سازی",
  columnHeaderFiltersTooltipActive: (count: number) => `${count} فیلتر فعال`,
  toolbarFiltersTooltipActive: (count: number) => `${count} فیلتر فعال`,
  noRowsLabel: "اطلاعاتی یافت نشد",
  columnsManagementShowHideAllText: "نمایش همه",
  columnsManagementReset: "حالت پیشفرض",
  columnsManagementSearchTitle: "جستجو",
  paginationRowsPerPage: "تعداد رکورد در صفحه",
  paginationDisplayedRows: () => {
    if (data?.pagination.page == undefined)
      return "در حال دریافت اطلاعات...";
    return `صفحه ${data?.pagination.page + 1} از ${data?.pagination.totalPages}`;
  },
});
