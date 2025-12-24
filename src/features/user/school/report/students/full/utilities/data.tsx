import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import ListStudentReport from "@schoolify/features/user/school/report/students/full/components/ListStudentReport";
import DetailStudentReport from "@schoolify/features/user/school/report/students/full/components/DetailStudentReport";

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
