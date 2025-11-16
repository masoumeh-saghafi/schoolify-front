import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddEducationLevel from "../components/AddEducationLevel";
import ListEducationLevel from "../components/ListEducationLevel";

export const tabEducationLevelEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
    key: "create",
    children: <AddEducationLevel />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListEducationLevel />,
  },
];
