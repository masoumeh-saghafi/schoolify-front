import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddStudent from "@schoolify/features/user/school/management/students/components/AddStudent";
import ListStudent from "@schoolify/features/user/school/management/students/components/ListStudent";

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
