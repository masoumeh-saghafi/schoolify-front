import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddEucationYear from "../components/AddEducationYear";
import ListEducationYear from "../components/ListEducationYear";

export const tabEucationYearEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
      key: "create",
    children: <AddEucationYear />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListEducationYear />,
  },
];
