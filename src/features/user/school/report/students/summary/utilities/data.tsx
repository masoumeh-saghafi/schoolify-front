import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import ListSumaaryStudentReport from "@schoolify/features/user/school/report/students/summary/components/ListSumaaryStudentReport";

export const tabStudentReportSummaryEndpointsData: TabBoxDataProps[] = [
  {
    label: " لیست  ",
    key: "list",
    children: <ListSumaaryStudentReport />,
  },
 
];
