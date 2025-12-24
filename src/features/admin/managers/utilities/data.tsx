import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddAdminRole from "@schoolify/features/admin/managers/components/AddAdminRole";
import ListAdminRoles from "@schoolify/features/admin/managers/components/ListAdminRoles";

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
