import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import ListAdminPyament from "@schoolify/features/admin/payments/components/ListAdminPyament";

export const tabAdminPyamentEndpointsData: TabBoxDataProps[] = [

  {
    label: " لیست  ",
    key: "list",
    children: <ListAdminPyament />,
  },
];
