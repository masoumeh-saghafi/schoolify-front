import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddAdminRole from "../components/AddAdminRole";
import ListAdminRoles from "../components/ListAdminRoles";

export const tabAdminRoleEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
    key: "create",
    children: <AddAdminRole />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListAdminRoles />,
  },
];
