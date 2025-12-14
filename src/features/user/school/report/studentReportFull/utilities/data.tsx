import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import ListStudentReport from "../components/ListStudentReport";

export const tabStudentReportFullEndpointsData: TabBoxDataProps[] = [
  // {
  //   label: " افزودن ",
  //     key: "create",
  //   children: <AddClassStudent />,
  // },
  {
    label: " لیست  ",
    key: "list",
    children: <ListStudentReport />,
  },
];
