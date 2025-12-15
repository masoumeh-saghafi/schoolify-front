import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddUserRole from "@schoolify/features/user/school/management/userRole/components/AddUserRole";
import ListUserRole from "@schoolify/features/user/school/management/userRole/components/ListUserRoles";
import ListAdminPyament from "../components/ListAdminPyament";

export const tabAdminPyamentEndpointsData: TabBoxDataProps[] = [
  // {
  //   label: " افزودن ",
  //   key: "create",
  //   children: <AddUserRole />,
  // },
  {
    label: " لیست  ",
    key: "list",
    children: <ListAdminPyament />,
  },
];
