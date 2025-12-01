import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddCostType from "../components/AddCostType";
import ListCostType from "../components/ListCostType";

export const tabCostTypeEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
    key: "create",
    children: <AddCostType />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListCostType />,
  },
];
