import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddClass from "../components/AddClass";
import ListClasses from "../components/ListClasses";

export const tabClassEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
      key: "create",
    children: <AddClass />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListClasses />,
  },
];
