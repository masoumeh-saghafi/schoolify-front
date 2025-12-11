import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddClassStudent from "@schoolify/features/user/school/management/classStudents/components/AddClassStudent";
import ListClassStudents from "@schoolify/features/user/school/management/classStudents/components/ListClassStudents";

export const tabClassStudentsEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
      key: "create",
    children: <AddClassStudent />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListClassStudents />,
  },
];
