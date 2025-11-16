import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddEducationGrade from "../components/AddEducationGrade";
import ListEducationGrade from "../components/ListEducationGrade";

export const tabEducationGradeEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
    key: "create",
    children: <AddEducationGrade />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListEducationGrade />,
  },
];
