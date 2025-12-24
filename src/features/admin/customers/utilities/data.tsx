import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import ListCustomer from "@schoolify/features/admin/customers/components/ListCustomers";

export const tabCustomerEndpointsData: TabBoxDataProps[] = [
  {
    label: " لیست  ",
    key: "list",
    children: <ListCustomer />,
  },
];
