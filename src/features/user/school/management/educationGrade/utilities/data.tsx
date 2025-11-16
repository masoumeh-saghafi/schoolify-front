import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddEucationGrade from "../components/AddEducationLevel";
import ListEucationGrade from "../components/ListEducationGrade";

export const tabEucationGradeEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
      key: "create",
    children: <AddEucationGrade />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListEucationGrade />,
  },
];
