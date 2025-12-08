import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddUserRole from "../components/AddUserRole";
import ListUserRole from "../components/ListUserRoles";

export const tabUserRoleEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
    key: "create",
    children: <AddUserRole />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListUserRole />,
  },
];
