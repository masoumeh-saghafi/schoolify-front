import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import ListStudentReport from "../components/ListStudentReport";
import DetailStudentReport from "../components/DetailStudentReport";

export const tabStudentReportFullEndpointsData: TabBoxDataProps[] = [
  {
    label: " لیست  ",
    key: "list",
    children: <ListStudentReport />,
  },
  {
    label: "جزئیات",
    key: "detail",
    children: <DetailStudentReport />,
    hidden: true,
  },
];
