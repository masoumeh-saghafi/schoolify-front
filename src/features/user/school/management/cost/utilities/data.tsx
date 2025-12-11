import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import ListCost from "@schoolify/features/user/school/management/cost/components/ListCost";
import AddCost from "@schoolify/features/user/school/management/cost/components/AddCost";

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
