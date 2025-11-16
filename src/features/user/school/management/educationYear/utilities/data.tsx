import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddEducationYear from "../components/AddEducationYear";
import ListEducationYear from "../components/ListEducationYear";

export const tabEducationYearEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
    key: "create",
    children: <AddEducationYear />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListEducationYear />,
  },
];
