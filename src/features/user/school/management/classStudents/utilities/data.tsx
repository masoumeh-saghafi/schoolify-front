import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddClassStudent from "../components/AddClassStudent";
import ListClassStudents from "../components/ListClassStudents";

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
