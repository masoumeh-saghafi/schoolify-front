import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddUserRole from "@schoolify/features/user/school/management/userRole/components/AddUserRole";
import Listcustomer from "../components/Listcustomers";
// import ListCustomer from "../components/ListCustomers";

export const tabCustomerEndpointsData: TabBoxDataProps[] = [

  {
    label: " لیست  ",
    key: "list",
    children: <Listcustomer />,
  },
];
