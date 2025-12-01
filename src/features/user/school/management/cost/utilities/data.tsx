import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import ListClassStudents from "../components/ListCost";
import ListCost from "../components/ListCost";
import AddCost from "../components/AddCost";

export const tabCostEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
    key: "create",
    children: <AddCost />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListCost />,
  },
];
