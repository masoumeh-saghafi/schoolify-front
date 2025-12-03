import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddClass from "../components/AddStudentPayment";
import ListClasses from "../components/ListStudentPayments";
import AddStudentPayment from "../components/AddStudentPayment";
import ListStudentPayments from "../components/ListStudentPayments";

export const tabStudentPaymentEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
    key: "create",
    children: <AddStudentPayment />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListStudentPayments />,
  },
];
