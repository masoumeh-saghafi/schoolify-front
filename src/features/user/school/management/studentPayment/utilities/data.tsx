import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddClass from "../components/AddStudentPayment";
import ListClasses from "../components/ListClasses";
import AddStudentPayment from "../components/AddStudentPayment";

export const tabStudentPaymentEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
      key: "create",
    children: <AddStudentPayment />,
  },
  // {
  //   label: " لیست  ",
  //   key: "list",
  //   children: <ListClasses />,
  // },
];
