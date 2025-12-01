import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddClassStudent from "../components/AddCost";
import ListClassStudents from "../components/ListCost";
import ListCost from "../components/ListCost";

export const tabCostEndpointsData: TabBoxDataProps[] = [
  // {
  //   label: " افزودن ",
  //     key: "create",
  //   children: <AddClassStudent />,
  // },
  {
    label: " لیست  ",
    key: "list",
    children: <ListCost />,
  },
];
