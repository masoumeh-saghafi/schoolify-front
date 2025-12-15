import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import ListSumaaryStudentReport from "../components/ListSumaaryStudentReport";

export const tabStudentReportSummaryEndpointsData: TabBoxDataProps[] = [
  {
    label: " لیست  ",
    key: "list",
    children: <ListSumaaryStudentReport />,
  },
 
];
