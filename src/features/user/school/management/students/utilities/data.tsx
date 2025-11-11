import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddStudent from "../components/AddStudent";
import ListStudent from "../components/ListStudent";

export const tabSchoolStudentData: TabBoxDataProps[] = [
  {
    label: " ایجاد دانش آموز",
    key: "create",
    children: <AddStudent />,
  },
  {
    label: " لیست دانش آموزان ",
    key: "list",
    children: <ListStudent />,
  },
];
